package main

import (
	"fmt"
	"log"

	"github.com/daritelska-platforma/v2/api"
	configuration "github.com/daritelska-platforma/v2/config"
	"github.com/daritelska-platforma/v2/contact"
	"github.com/daritelska-platforma/v2/database"

	"github.com/asaskevich/govalidator"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/recover"
)

type App struct {
	*fiber.App
	env *configuration.Config
	DB  *database.Database
}

func (app *App) setupRoutes() {
	app.Get("/api/v1/healthcheck", func(ctx *fiber.Ctx) error {
		if pinger, ok := app.DB.DB.ConnPool.(interface{ Ping() error }); ok {
			err := pinger.Ping()
			if err != nil {
				return ctx.Status(fiber.StatusInternalServerError).JSON(&fiber.Map{
					"status": fiber.StatusInternalServerError,
				})
			}
		}
		return ctx.JSON(&fiber.Map{"status": fiber.StatusOK})
	})

	app.Get("/api/v1/contact", contact.GetContacts(app.DB))
	app.Get("/api/v1/contact/:id", contact.GetContact(app.DB))
	app.Post("/api/v1/contact", contact.NewContact(app.DB))
	app.Delete("/api/v1/contact/:id", contact.DeleteContact(app.DB))
}

func (app *App) initValidation() {
	govalidator.TagMap["phone"] = govalidator.Validator(func(str string) bool {
		return govalidator.Matches(str, "^\\+?\\d+$")
	})
}

func (app *App) initDatabase() *database.Database {
	db, err := database.New(&database.DatabaseConfig{
		Host:     app.env.GetString("DB_HOST"),
		Username: app.env.GetString("DB_USER"),
		Password: app.env.GetString("DB_PASS"),
		Database: app.env.GetString("DB_NAME"),
		Port:     app.env.GetInt("DB_PORT"),
		SSL:      "disable",
		// SSL:      "verify-ca",
		RootCert: "/certs/ca.crt",
		Cert:     "/certs/client.dp_user.crt",
		Key:      "/certs/client.dp_user.key",
	})

	if err != nil {
		panic("Failed to connect database")
	}

	fmt.Println("Connection Opened to Database")

	// Add schema prefix to table
	db.Table("app.contacts").AutoMigrate(&contact.Contact{})
	fmt.Println("Database Migrated")
	return db
}

func main() {
	config := configuration.New()

	app := App{
		App: fiber.New(fiber.Config{
			ErrorHandler: api.ErrorHandler,
		}),
		env: config,
	}

	app.Use(cors.New())
	app.Use(recover.New())
	app.initValidation()
	app.DB = app.initDatabase()
	app.setupRoutes()

	log.Fatal(app.Listen(":" + config.GetString("PORT")))
}
