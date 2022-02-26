import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { observer } from 'mobx-react'
import { AxiosError, AxiosResponse } from 'axios'
import { Dialog, Card, CardContent, Box, Button, Typography } from '@mui/material'
import { GridSelectionModel } from '@mui/x-data-grid'
import { useTranslation } from 'next-i18next'

import { DocumentResponse } from 'gql/document'
import { ApiErrors } from 'service/apiErrors'
import { endpoints } from 'service/apiEndpoints'
import { useDeleteManyDocuments } from 'service/restRequests'
import { ModalStore } from 'stores/documents/ModalStore'
import { AlertStore } from 'stores/AlertStore'

type Props = {
  selectionModel: GridSelectionModel
}

export default observer(function DeleteAllModal({ selectionModel }: Props) {
  const queryClient = useQueryClient()
  const { isDeleteAllOpen, hideDeleteAll } = ModalStore
  const { t } = useTranslation()

  const idsToDelete = selectionModel.map((x) => x.toString())
  const mutationFn = useDeleteManyDocuments(idsToDelete)

  const mutation = useMutation<
    AxiosResponse<DocumentResponse>,
    AxiosError<ApiErrors>,
    GridSelectionModel
  >({
    mutationFn,
    onError: () => AlertStore.show(t('documents:alerts:error'), 'error'),
    onSuccess: () => {
      hideDeleteAll()
      AlertStore.show(t('documents:alerts:deleteAll'), 'success')
      queryClient.invalidateQueries(endpoints.documents.documentsList.url)
    },
  })

  function deleteHandler() {
    mutation.mutate(idsToDelete)
  }

  return (
    <Dialog open={isDeleteAllOpen} onClose={hideDeleteAll} sx={{ top: '-35%' }}>
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ marginBottom: '16px', textAlign: 'center' }}>
            {t('documents:deleteTitle')}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '16px', textAlign: 'center' }}>
            {t('documents:deleteAllContent')}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button color="error" onClick={deleteHandler}>
              {t('documents:cta:delete')}
            </Button>
            <Button onClick={hideDeleteAll}>{t('documents:cta:cancel')}</Button>
          </Box>
        </CardContent>
      </Card>
    </Dialog>
  )
})
