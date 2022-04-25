import { Document, Page, StyleSheet, Text, View, Font } from '@react-pdf/renderer'
import Logo from '../utils/Logo'
// import { useDonation } from 'common/hooks/donation'
// import { useViewPerson } from 'service/person'
// import { useQuery, UseQueryResult } from 'react-query'
import { endpoints } from 'service/apiEndpoints'
// import { queryFnFactory } from 'service/restRequests'
import { DonationResponse } from 'gql/donations'
import { PersonResponse } from 'gql/person'
import { useEffect, useState } from 'react'
import { apiClient } from 'service/apiClient'

interface CertificateProps {
  donationId: string
}

Font.register({
  family: 'Roboto',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
})

Font.load({ fontFamily: 'Roboto' })

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E1E4E5',
  },
  heading: {
    fontFamily: 'Roboto',
    fontSize: '30',
    color: '#29599D',
    textAlign: 'center',
  },
  subheading: {
    fontFamily: 'Roboto',
    color: '#29599D',
    textAlign: 'center',
  },
  text1: {
    fontFamily: 'Roboto',
    textAlign: 'center',
    marginTop: '15',
  },
  name: {
    fontFamily: 'Roboto',
    textDecoration: 'underline',
    textAlign: 'center',
    fontSize: '50',
  },
  donationText: {
    fontFamily: 'Roboto',
    textAlign: 'center',
  },
  dateAndSignView: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '50',
  },
  date: {
    fontFamily: 'Roboto',
    textDecoration: 'underline',
  },
})

export default function Certificate({ donationId }: CertificateProps) {
  const [donation, setDonation] = useState<DonationResponse>()
  const [person, setPerson] = useState<PersonResponse>()

  useEffect(() => {
    apiClient.get(endpoints.donation.getDonation(donationId).url).then((x) => {
      setDonation(x.data)
    })

    apiClient.get(endpoints.person.viewPerson(donation?.personId || '').url).then((x) => {
      setPerson(x.data)
    })
  })

  const name = `${person?.firstName} ${person?.lastName}`

  return (
    <Document title="Дарение">
      <Page size="A4" style={styles.page}>
        <View>
          <Logo />
          <Text style={styles.heading}>СЕРТИФИКАТ</Text>
          <Text style={styles.subheading}>за дарение № </Text>
        </View>
        <View>
          <Text style={styles.text1}>С този сертификат Управителният съвет на Сдружение</Text>
          <Text style={styles.text1}>„Подкрепи БГ“ удостоверява, че:</Text>
          <Text style={styles.name} fixed>
            {name}
          </Text>
        </View>
        <View>
          <Text style={styles.donationText}>
            дари сума в размер на <Text style={{ color: '#29599D' }}>{donation?.amount}</Text>
            лева за дейността на сдружението.
          </Text>
        </View>
        <View style={styles.dateAndSignView}>
          <View>
            <Text style={styles.date}>{donation?.createdAt}</Text>
            <Text style={styles.date}>Дата</Text>
          </View>
          <View>
            <Text style={styles.date}>{new Date(donation?.createdAt).toLocaleDateString()}</Text>
            <Text style={styles.date}>Дата</Text>
          </View>
        </View>
      </Page>
    </Document>
  )
}
