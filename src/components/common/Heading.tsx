import { PropsWithChildren, useState } from 'react'

import { styled } from '@mui/material/styles'

import { Typography, TypographyProps } from '@mui/material'
import LinkIcon from '@mui/icons-material/Link'

import LinkIconButton from 'components/common/LinkIconButton'

const PREFIX = 'Heading'

const classes = {
  linkIcon: `${PREFIX}-linkIcon`,
  hideLinkIcon: `${PREFIX}-hideLinkIcon`,
}

const Root = styled('div')(({ theme }) => ({
  [`& .${classes.linkIcon}`]: {
    transform: 'rotate(-45deg)',
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },

  [`& .${classes.hideLinkIcon}`]: {
    visibility: 'hidden',
  },
}))

type Linkable =
  | {
      id: string
      linkable: true
    }
  | { linkable?: false }

type HeadingParams = PropsWithChildren<TypographyProps & Linkable> & {
  component?: React.ElementType
}

export default function Heading({ children, id, linkable, ...props }: HeadingParams) {
  const [linkIconIsShown, setlinkIconIsShown] = useState(false)

  return (
    <Root
      id={id}
      onMouseEnter={() => setlinkIconIsShown(true)}
      onMouseLeave={() => setlinkIconIsShown(false)}>
      <Typography {...props}>
        {children}
        {linkable && (
          <LinkIconButton href={`#${id}`} className={linkIconIsShown ? '' : classes.hideLinkIcon}>
            <LinkIcon className={classes.linkIcon} />
          </LinkIconButton>
        )}
      </Typography>
    </Root>
  )
}
