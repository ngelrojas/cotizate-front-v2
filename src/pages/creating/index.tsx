import React from 'react'
import {Grid, Row, Col} from 'react-styled-flexboxgrid'
import {Content, 
    RowCP, 
    ColCP, 
    GoE, GoC, RecEmp, RecCausa, DivEmp, DivCausa, H2, Words} from './styles'

const PageCreating: React.FC = () => {
    return (
        <Content>
            <Grid>
                <RowCP>
                    <Col>
                        <h1>Bienvenido a Cotizate creador</h1>
                        <br />
                        <h2> ¿Para qué estás haciendo crowdfunding? </h2>
                    </Col>
                </RowCP>
                <br />
                <Row around="xs">
                    <ColCP xs>

                    <GoE to="/panel-de-usuario/crear-emprendimiento">
                        <RecEmp>
                                <H2>Emprendimiento</H2>
                                <DivEmp>
                                <Words>
    Es una iniciativa innovadora para desarrollar 
    un proyecto de negocio que permita generar 
    valor para la comunidad y despertar el interés 
    para lograr apoyo económico para tu 
    emprendimiento. 
                                </Words>
                                </DivEmp>
                        </RecEmp>
                        
                            </GoE>
                    </ColCP>
                    <ColCP xs>

                    <GoC to="/panel-de-usuario/crear-causa-social">
                        <RecCausa>
                                <H2>Causa Social</H2>
                                <DivCausa>
                                <Words>
   Es un emprendimiento que busca satisfacer 
las necesidades de la sociedad, para resolver 
problemas de la comunidad, en los distintos 
segmentos sociales. Busca soluciones que 
mejoren y ayuden a la comunidad, pero sin 
ánimo de lucro económico.  
                                </Words>
                                </DivCausa>
                        </RecCausa>

                            </GoC>
                    </ColCP>
                </Row>
            </Grid>
        </Content>
    )
}
export default PageCreating
