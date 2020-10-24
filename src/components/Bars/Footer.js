import React from 'react'

import { Box, Link, makeStyles } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';

import {useStyles} from './barStyles'

const useStyles = makeStyles((theme) => ({
  
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <Box className={ classes.footer }>
      <Link href='https://www.linkedin.com/in/jeremyjmcwilliams/' target='_blank'>
      <LinkedInIcon className={ classes.icons } /></Link>
      <Link href='https://github.com/J2Macwilliams'target='_blank'>
      <GitHubIcon className={ classes.icons } /></Link>
      <Link href='https://twitter.com/McWilliamJJ1' target='_blank'>
      <TwitterIcon className={ classes.icons } /></Link>
      <EmailIcon className={ classes.icons } />
    </Box>
  )
}

export default Footer
