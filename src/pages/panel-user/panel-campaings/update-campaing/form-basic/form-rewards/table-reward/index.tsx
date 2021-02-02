import React from 'react'
import {connect} from 'react-redux'
import {useRouteMatch} from 'react-router-dom'
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Reward} from '../../../../../../../userReward'
import {getReward} from '../../../../../../../redux/actions/reward.actions' 
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import {BtnUpdate, BtnDelete} from './styles'
import {store} from 'react-notifications-component'
import Loading from '../../../../../../../components/loading'

interface Icity {
    id: number
}

type propsRewards = {
    id: number
    title: string
    amount: number
    description: string
    header: number
    expected_delivery: string
    user: number
    cities: Icity
    all_cities: boolean
    pick_up_locally: boolean
}

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});

const TableReward:React.FC = (props: any) => {
  let match = useRouteMatch('/panel-de-usuario/actualizar-proyecto/:campania')
  let matchUrl: any = match
  let campaingId = matchUrl.params.campania
  let token = window.sessionStorage.getItem('token')
  let CReward = new Reward(token)
  const classes = useStyles();
  const [IsLoading, setIsLoading] = React.useState(true)
  const [LoadRewards, setLoadRewards] = React.useState()

  const listRewards = (campID: number) => {
    CReward.retrieveReward(campID)
        .then(resp => {
            setLoadRewards(resp.data.data) 
        })
        .catch(err => {
            console.error(err)
        })
        .then(()=>{
            setIsLoading(false)
        })
  }

  const onSend =(e: any)=>{
      let rewardId: number = e.id 
      props.getReward(rewardId)
  }

  const onDelete =(e: any)=>{
      let rewardId: number = e.id
      if(window.confirm("Estas seguro que deseas eliminar esta Recompensa...?")){
        CReward.deleteReward(rewardId)
        Notifications("La Recompensa fue eliminada ", 'success')
      }
  }

    const Notifications = (set_messages: string, set_type: any) => {
        store.addNotification({
            title: 'Guardando Datos',
            message: set_messages,
            type: set_type,
            insert: 'top',
            container: 'top-right',
            animationIn: ['animate__animated', 'animate__fadeIn'],
            animationOut: ['animate__animated', 'animate__fadeOut'],
            dismiss: {
                duration: 5000,
                onScreen: true
            }
        })
    }

  React.useEffect(()=>{
    listRewards(campaingId)
  },[])

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">TITULO</StyledTableCell>
            <StyledTableCell align="right">OPCIONES</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
            !IsLoading && LoadRewards ? (LoadRewards.map((reward: any)=>{
                return(
                    <StyledTableRow key={reward.id}>
                        <StyledTableCell align="right">{reward.id}</StyledTableCell>
                        <StyledTableCell align="right">{reward.title}</StyledTableCell>
                        <StyledTableCell align="right">
                                <BtnUpdate type="button" onClick={e=>onSend(reward)}> <EditIcon /></BtnUpdate>
                                <BtnDelete type="button" onClick={e=>onDelete(reward)}> <DeleteIcon /></BtnDelete>
                        </StyledTableCell>
                    </StyledTableRow>

                ) 
                    })):(<Loading message='cargando datos de recompensas' />)
        }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const mapStateToProps = (state: any) => ({
    reward: state.reward
}) 

const mapActionToProps = {
    getReward 
}

export default connect(mapStateToProps, mapActionToProps)(TableReward)
