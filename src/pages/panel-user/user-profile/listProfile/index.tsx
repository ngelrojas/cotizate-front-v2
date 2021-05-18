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
import Button from '@material-ui/core/Button'
import {ButtonUpdate} from '../styles'
import {PersonalProfile} from '../../../../userProfile'

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
    const url_general: string = '/dashboard-de-usuario/perfiles-de-usuario'
    const classes = useStyles();
    let token = window.sessionStorage.getItem('token')
    let profilePersonal = new PersonalProfile(token)
    const [GetProfiles, setGetProfiles] = React.useState([])
    const [IsLoading, setIsloading] = React.useState(true)

    const LoadProfiles = () => {
        profilePersonal.listProfilePersonal()
            .then(resp => {
                setGetProfiles(resp.data.data)
            }).catch(err => {
                console.error(err)
            }).then(()=>{
                setIsloading(false)
            })
    }

    React.useEffect(()=>{
        LoadProfiles()
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
                            {row.headline ? row.headline:''}
                        </TableCell>
                        <TableCell align="right">{row.cinit ? row.cinit:''}</TableCell>
                        <TableCell align="right">{row.cellphone ? row.cellphone:''}</TableCell>
                        <TableCell align="right">{row.cities.name ? row.cities.name:''}</TableCell>
                        <TableCell align="right">
                            <ButtonUpdate variant="contained" color="primary" href={`${url_general}/actualizar-perfil-${row.id}`}>
                                a
                            </ButtonUpdate>
                            <Button variant="contained" color="secondary" href={`${url_general}/eliminar-perfil-${row.id}`}>
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