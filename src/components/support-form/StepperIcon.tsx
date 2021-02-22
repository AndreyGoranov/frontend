import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import GroupAddIcon from '@material-ui/icons/GroupAdd'
import ContactMailIcon from '@material-ui/icons/ContactMail'
import { StepIconProps } from '@material-ui/core/StepIcon'
import { AccessibilityNew } from '@material-ui/icons'
import SecurityIcon from '@material-ui/icons/Security'
import HelpIcon from '@material-ui/icons/Help'

const useStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage: 'linear-gradient( 136deg, #4AC3FF 0%, #29a2df 50%, #1b88be 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage: 'linear-gradient( 136deg, #4AC3FF 0%, #29a2df 50%, #1b88be 100%)',
  },
})

export default function StepIcon(props: StepIconProps) {
  const classes = useStepIconStyles()
  const { active, completed } = props

  const icons: { [index: string]: React.ReactElement } = {
    1: <GroupAddIcon />,
    2: <HelpIcon />,
    3: <ContactMailIcon />,
    4: <SecurityIcon />,
    5: <AccessibilityNew />,
  }

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}>
      {icons[String(props.icon)]}
    </div>
  )
}
