import { Divider } from '@mui/material'
import AdminContainer from 'components/admin/navigation/AdminContainer'
import BootcampLayout from './components/BootcampLayout'

import { useTranslation } from 'next-i18next'
import BootcampGrid from './components/DataGrid'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { deleteTasks } from './survices/bootcampSurvices'
import { ApiErrors } from 'service/apiErrors'
import { AlertStore } from 'stores/AlertStore'
import DeleteModal from './components/DeleteModal'
import { useRouter } from 'next/router'
import AddDellBtns from './components/AddDellBtns'

export default function BootcampPage() {
  const { t } = useTranslation()
  const [selectedIds, setSelectedIds] = useState([])
  const [openCloseDeleteAll, setDeleteAll] = useState(false)
  const closeModal = () => setDeleteAll(false)
  const openModal = () => setDeleteAll(true)
  const router = useRouter()

  const mutation = useMutation<AxiosResponse<string>, AxiosError<ApiErrors>, []>({
    mutationFn: deleteTasks,
    onError: () => AlertStore.show(t('bootcamp:alerts.delete-row.error'), 'error'),
    onSuccess: () => AlertStore.show(t('bootcamp:alerts.delete-row.success'), 'success'),
  })

  const deleteMany = async () => {
    try {
      await mutation.mutateAsync(selectedIds as [])
      closeModal()
      router.push('bootcamp/')
    } catch (error) {
      alert(error)
    }
  }
  return (
    <BootcampLayout>
      <AdminContainer title={t('bootcamp:nav.title')}>
        <AddDellBtns selectedIds={selectedIds} openModal={openModal} />
        <DeleteModal
          open={openCloseDeleteAll}
          confirmHandler={deleteMany}
          closeModal={closeModal}
        />
        <Divider />
        <BootcampGrid setIds={setSelectedIds} />
      </AdminContainer>
    </BootcampLayout>
  )
}
