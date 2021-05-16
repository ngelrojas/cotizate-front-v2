import React from 'react'
import {Row} from 'react-styled-flexboxgrid'
import Loading from '../../../../components/loading'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      }
    },
    table: {
        minWidth: 650,
    }
  }),
)

const ListProfile: React.FC = () => {
    const classes = useStyles();
    const [GetProfiles, setGetProfiles] = React.useState([])
    const [IsLoading, setIsloading] = React.useState(false)
    
    let profi:any = [
        {"id": 1, "title":"CEO"},
        {"id": 1, "title":"OWNER"},
        {"id": 1, "title":"DOCTOR"},
        {"id": 1, "title":"ARCHITECT"},
        {"id": 1, "title":"ENTERPROUNER"}
    ]

    const LoadProfiles = (profi: any) => {
        setGetProfiles(profi)
    }

    React.useEffect(()=>{
        LoadProfiles(profi)
    },[])

    return(
        <Row>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="caption table">
                <caption>perfiles creados.</caption>
                <TableHead>
                <TableRow>
                    <TableCell>Titulo</TableCell>
                    <TableCell align="right">cedula de Identidad</TableCell>
                    <TableCell align="right">Celular</TableCell>
                    <TableCell align="right">Ciudad</TableCell>
                    <TableCell align="right"></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {!IsLoading && GetProfiles ? (
                    GetProfiles.map((row:any) => {
                    return <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                            {row.title}
                        </TableCell>
                        <TableCell align="right">one</TableCell>
                        <TableCell align="right">two</TableCell>
                        <TableCell align="right">three</TableCell>
                        <TableCell align="right">
                            <Button variant="contained" color="primary" href="#contained-buttons">
                                a
                            </Button>
                            <Button variant="contained" color="secondary" href="#contained-buttons">
                                d
                            </Button>
                        </TableCell>
                    </TableRow>}
                    )):(
                        <TableRow>
                            <Loading message="cargando perfiles" />
                        </TableRow>
                    )
                }
                </TableBody>
            </Table>
            </TableContainer>

        </Row>
    )
}

export default ListProfile