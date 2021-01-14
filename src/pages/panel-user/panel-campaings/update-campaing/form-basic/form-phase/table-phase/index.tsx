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
import {Phases} from '../../../../../../../userPhases'
import {getPhase} from '../../../../../../../redux/actions/phase.actions' 
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import {BtnUpdate, BtnDelete} from './styles'

type propsPhases = {
    id: number
    title: string
    amount: number
    description: string
    header: number
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
    minWidth: 700,
  },
});

const TablePhases:React.FC = (props: any) => {
  let match = useRouteMatch('/panel-de-usuario/actualizar-proyecto/:campania')
  let matchUrl: any = match
  let campaingId = matchUrl.params.campania
  let token = window.sessionStorage.getItem('token')
  let Phase = new Phases(token)
  const classes = useStyles();
  const [IsLoading, setIsLoading] = React.useState(true)
  const [LoadPhases, setLoadPhases] = React.useState()

  const getPhases = (campID: number) => {
    Phase.listPhases(campID)
        .then(resp => {
            setLoadPhases(resp.data.data) 
        })
        .catch(err => {
            console.error(err)
        })
        .then(()=>{
            setIsLoading(false)
        })
  }

  const onSend =(e: any)=>{
      let phaseId: number = e.id
      let headId: number = e.header
      props.getPhase(phaseId, headId)
  }

  const onDelete =(e: any)=>{
      let phaseId: number = e.id
      let headId: number = e.header
      props.getPhase(phaseId, headId)
  }

  React.useEffect(()=>{
    getPhases(campaingId)
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
            !IsLoading && LoadPhases ? (LoadPhases.map((phase: any)=>{
                return(
                    <StyledTableRow key={phase.id}>
                        <StyledTableCell align="right">{phase.id}</StyledTableCell>
                        <StyledTableCell align="right">{phase.title}</StyledTableCell>
                        <StyledTableCell align="right">
                                <BtnUpdate type="button" onClick={e=>onSend(phase)}> <EditIcon /></BtnUpdate>
                                <BtnDelete type="button" onClick={e=>onDelete(phase)}> <DeleteIcon /></BtnDelete>
                        </StyledTableCell>
                    </StyledTableRow>

                ) 
                    })):('Loading...!')
        }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const mapStateToProps = (state: any) => ({
    phase: state.phase
}) 

const mapActionToProps = {
    getPhase
}

export default connect(mapStateToProps, mapActionToProps)(TablePhases)
