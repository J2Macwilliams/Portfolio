import React from 'react'

import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Menu, MenuItem } from '@material-ui/core'
export const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={ 0 }
    getContentAnchorEl={ null }
    anchorOrigin={ {
      vertical: 'bottom',
      horizontal: 'center',
    } }
    transformOrigin={ {
      vertical: 'top',
      horizontal: 'center',
    } }
    { ...props }
  />
));

export const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.warning.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);
export const useStyles = makeStyles(() => ({
  nav: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  navBtn: {
    width: "5%"
  },
  // Footer
}))