import React from 'react'

import FullStack from './FullStack'

import { Box, Typography } from '@material-ui/core'
import {useStyles} from './projectStyles'
import '../../App.css';

const Index = () => {
  const classes = useStyles()
  
  return (
    <Box className={classes.projects}>
      <Typography className={classes.title}variant='h3'>Projects</Typography>
      <FullStack />
    </Box>
  )
}

export default Index
