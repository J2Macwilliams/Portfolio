import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
  home: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'space-around',
    border: "1px solid orange",
    // marginTop: '20%',
    height: '60vh',
    textAlign: 'center',
  },
  media: {
    width: '20%',
    justifyContent: 'center',
    borderRadius: '50%'
  },
  name: {
    display: 'flex',
  },
  initials: {
    margin: '1%'
  }
}));

