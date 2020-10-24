import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  // Project Globals
  projects: {
    width: "100%",
    // marginTop: '10%'
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    marginBottom: '2%'
  },
  card: {
    // padding: 5
    boxShadow: '0 1px 3px grey, 0 1px 3px grey',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    
  },
  notion: {
    width: '5%'
  },
  links: {
    color: 'black'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  projectName: {
    whiteSpace: 'nowrap',
    color: 'black'
  },
  skills: {
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  skill: {
    margin: '0 1%'
  }

}))