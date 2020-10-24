import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
 foot: {
  w:'100%',
  p:'1%',
  position:'fixed',
  // zIndex='1'
  left:'0px',
  bottom:'0px',
  background: 'blue',
  // color: 'green'

 },
 root: {
   width:'100%',
  '& > .fa': {
    // margin: theme.spacing(2),
    color: 'red'
  },
  
},
}));