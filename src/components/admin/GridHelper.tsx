import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'
import ImportExportIcon from '@mui/icons-material/ImportExport'
import EditIcon from '@mui/icons-material/Edit'
import ShareIcon from '@mui/icons-material/Share'
import { useRouter } from 'next/router'
import React from 'react'
type Props = {
  setOpen: (id: string) => void
  row: any
  openModal: () => void
  editRoute: string
  handleDelete: () => void
  setId: (id: any) => void
}

export const ControlIcons: React.FC<Props> = ({
  setOpen,
  row,
  openModal,
  editRoute,
  handleDelete,
  setId,
}) => {
  const router = useRouter()

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      {
        <ImportExportIcon
          sx={{ cursor: 'pointer' }}
          color="primary"
          onClick={() => {
            setOpen(row)
            openModal()
          }}
        />
      }
      {
        <ShareIcon
          sx={{ cursor: 'pointer' }}
          color="primary"
          onClick={() => {
            setOpen(row)
            openModal()
          }}
        />
      }
      {
        <EditIcon
          sx={{ cursor: 'pointer' }}
          color="primary"
          onClick={() => {
            router.push(editRoute)
          }}
        />
      }
      {
        <DeleteIcon
          sx={{ cursor: 'pointer', opacity: 0.9 }}
          color="primary"
          onClick={() => {
            handleDelete()
            setId(row.id)
          }}
        />
      }
    </div>
  )
}

const renderCell = (cellValues: GridRenderCellParams): React.ReactNode => {
  const style =
    cellValues.field === 'status' && cellValues.value === 'verified'
      ? { color: 'green' }
      : cellValues.field === 'status' && cellValues.value === 'verification_failed'
      ? { color: 'red' }
      : cellValues.field === 'status' && cellValues.value === 'new'
      ? { color: 'blue' }
      : cellValues.field === 'status' && cellValues.value === 'errored'
      ? { color: 'red' }
      : cellValues.field === 'status' && cellValues.value === 'validated'
      ? { color: 'green' }
      : { color: '' }
  // console.log(cellValues)
  return <div style={style}>{cellValues.value}</div>
}

export const renderCellWithdraws = (): React.ReactNode => {
  return (
    <div style={{ width: '100%' }}>
      <p style={{ cursor: 'pointer', color: 'hsl(206,100%,40%)' }}>Отваряне</p>
    </div>
  )
}

export const commonProps: Partial<GridColDef> = {
  align: 'left',
  width: 150,
  headerAlign: 'left',
  renderCell,
}
