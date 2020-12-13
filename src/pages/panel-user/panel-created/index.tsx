import React from 'react'
import clsx from 'clsx'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import {CheckAuthentication} from '../../../redux/auth'
import SideBarMenu from '../component/sidebar-menu'
import DefaultImg from '../../public/img/default.png'
import {Img, DivImg, ProfileName, ContainerCo, ContainerPC} from '../styles'
import Panels from '../panels'
import CardCreated from './component/cardCreated'

type userType = {
    id: number
    email: string
    first_name: string
    last_name: string

}

interface Iauth {
    authenticated: boolean
    currentUser: userType
}

const PanelCreated: React.FC<Iauth> = ({authenticated, currentUser}) => {
    const classes = useStyles()
    const [showImg, SetShowImg] = React.useState()
    let history = useHistory()

    React.useEffect(()=>{
        if(!CheckAuthentication()){
            history.push('/')
        }

    },[])

    return(
    <div className={clsx('App', classes.root)}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
      <div>
        <DivImg>
            <Img src={ showImg ? showImg : DefaultImg } alt="cotizate" />
        </DivImg>
        <div>
            <ProfileName>{currentUser.first_name} {currentUser.last_name}</ProfileName>
        </div>
      </div>
        <SideBarMenu />
      </Drawer>
      <main className={classes.content}>
        <ContainerCo maxWidth="lg" className={classes.container}>
            <Panels />
            <ContainerPC>
               <CardCreated />
            </ContainerPC>
        </ContainerCo>
      </main>
    </div>
    )
}
const drawerWidth = 250

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: '#3E97CB',
    color: '#fff',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))

const mapStateToProps = (state: any) => ({
    authenticated: state.user.authenticated,
    currentUser: state.user,
    currentProfile: state.profile
})
export default connect(mapStateToProps)(PanelCreated)
