import React,{useEffect} from 'react'
import { Row, Col} from 'react-styled-flexboxgrid'
import {TabPanel} from 'react-tabs'
import Bulletin from '../../components/bulletin'
import {Content, TabHead, TabLists, TabContent, Title} from './styles';

import Projects from "../home/component/projects";
import { useDispatch, useSelector } from "react-redux";
import * as Action from '../../redux/actions/homeAction';
import Grid from '@material-ui/core/Grid';

const ExploreProject: React.FC = () => {
    const { proyectosDestacados, featuredProjects, proyectosFinalizados,finalizedProjects,causasSociales,listCausasSociales,categoriasStatus 
    } = useSelector((stateSelector: any) => {  return stateSelector.home; });

    const dispatch = useDispatch();
    useEffect(() => {        
      dispatch(Action.proyectosDestacados(5));
      dispatch(Action.proyectosFinalizados(7));
      dispatch(Action.causasSociales(1));
    },[]);

    return (
        <Content>
            <Grid>
                <Row>
                    <Col lg={12}>
                        <Row center="lg">
                            <Col lg={6}>
                                <Title>EXPLORAR PROYECTOS</Title>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <TabContent>
                        <TabLists>
                            <TabHead>PROYECTOS DESTACADOS</TabHead>
                            <TabHead>CAUSAS SOCIALES</TabHead>
                            <TabHead>PROYECOS FINALIZADOS</TabHead>
                        </TabLists>
                        <TabPanel>
                          <div style={{marginLeft:'35px',marginRight:'35px'}}>
                                <Grid container spacing={3}>
                                    {featuredProjects.map((value : any, index : number) =>(
                                        <Grid item xs={12} sm={6} md={4} lg={4} >
                                            <Projects  key={index} data={value} />
                                    </Grid>
                                    ))}       
                                </Grid>
                            </div>
                        </TabPanel>
                        <TabPanel>
                           <div style={{marginLeft:'35px',marginRight:'35px'}}>
                                <Grid container spacing={3}>
                                    {listCausasSociales.map((value : any, index : number) =>(
                                        <Grid item xs={12} sm={6} md={4} lg={4} >
                                            <Projects  key={index} data={value} />
                                    </Grid>
                                    ))}       
                                </Grid>
                            </div>
                        </TabPanel>
                        <TabPanel>
                              <div style={{marginLeft:'35px',marginRight:'35px'}}>
                                <Grid container spacing={3}>
                                    {finalizedProjects.map((value : any, index : number) =>(
                                        <Grid item xs={12} sm={6} md={4} lg={4} >
                                            <Projects  key={index} data={value} />
                                    </Grid>
                                    ))}       
                                </Grid>
                            </div>
                        </TabPanel>
                    </TabContent>
                </Row>
            </Grid>
        </Content>
    )
}

export default ExploreProject
