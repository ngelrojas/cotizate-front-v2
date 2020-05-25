import React from 'react'
import {Grid, Row} from 'react-styled-flexboxgrid'
import Loading from '../../../../components/loading'
import ModalCompany from '../modal-campany'
import {Table, Th, Td, BtnDelete, Activate, NotActivate} from './styles'
import {CompanyProfile} from '../../../../userCompany'

const ListCompanies: React.FC = () => {
    const [companies, setCompanies] = React.useState()
    const [isData, setIsData] = React.useState(true)
    let token = window.sessionStorage.getItem('token')
    const comProfile = new CompanyProfile(token)

    React.useEffect(() => {
        comProfile
            .getCompanyProfile()
            .then(resp => {
                if (resp.data.data.length === 0) {
                    setIsData(false)
                }
                setCompanies(resp.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <Grid>
            <Row>
                <Table>
                    <thead>
                        <tr>
                            <Th>EMPRESA</Th>
                            <Th>DIRECCION</Th>
                            <Th>EMAIL</Th>
                            <Th>PHONE</Th>
                            <Th>ACTIVADO</Th>
                            <Th>OPCIONES</Th>
                        </tr>
                    </thead>
                    {isData ? (
                        <tbody>
                            {companies ? (
                                companies.map((company: any) => (
                                    <tr>
                                        <Td>{company.name}</Td>
                                        <Td>{company.address}</Td>
                                        <Td>{company.email_company}</Td>
                                        <Td>{company.phone}</Td>
                                        <Td>
                                            {company.represent ? (
                                                <Activate />
                                            ) : (
                                                <NotActivate />
                                            )}
                                        </Td>
                                        <Td>
                                            <ModalCompany
                                                data_company={company}
                                            />

                                            <BtnDelete
                                                to={`eliminar/${company.id}`}
                                            >
                                                eliminar
                                            </BtnDelete>
                                        </Td>
                                    </tr>
                                ))
                            ) : (
                                <Loading message="cargando info" />
                            )}
                        </tbody>
                    ) : (
                        <tbody>
                            <tr>
                                <Td colSpan={5}>no existen datos</Td>
                            </tr>
                        </tbody>
                    )}
                </Table>
            </Row>
        </Grid>
    )
}

export default ListCompanies
