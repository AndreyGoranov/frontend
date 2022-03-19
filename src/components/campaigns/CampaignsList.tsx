import { Box, CircularProgress, Grid } from '@mui/material'
import Image from 'next/image'

import { useCampaignList } from 'common/hooks/campaigns'

import CampaignCard from './CampaignCard'

export default function CampaignsList() {
  const { data, isLoading } = useCampaignList()
  let mobile = false
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    mobile = true
  }

  return (
    <Grid container justifyContent="center" spacing={2}>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {isLoading && <CircularProgress size="large" />}
      {data?.map((campaign, index) => (
        <Grid key={index} item xs={12} sm={6} lg={4}>
          <Box textAlign="center">
            <CampaignCard campaign={campaign} />
          </Box>
        </Grid>
      ))}
      {mobile ? (
        <Image src="/img/ArtboardRotate.png" width={250} height={400} />
      ) : (
        <Image src="/img/Artboard.png" width={813} height={358} />
      )}
    </Grid>
  )
}
