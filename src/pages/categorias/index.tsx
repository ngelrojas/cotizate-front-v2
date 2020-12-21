import React,{useState,useEffect} from 'react'
// import {Grid} from 'react-styled-flexboxgrid'
import {Content, Contentbody, Title} from './styles'
import Portal from './componentes/Portal'
import * as Action from '../../redux/actions/categoriaActions';
import { useDispatch, useSelector } from "react-redux";
import Category from './componentes/Category';
import {Row, Col, Grid} from 'react-styled-flexboxgrid';


import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';


import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase'

import Projects from '../home/component/projects';



const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      paddingBottom: '14px',
      paddingTop: '14px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      
      },
    },
  }))(InputBase);

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
      
    },
  }));

    

interface Icateg {
    location:any
}


const Categorias: React.FC<Icateg>  = (props) => {
    const dispatch = useDispatch();
    const { nombre, idCategoria, slug } = props.location.state;
    console.log("parametro :", nombre , "  id : ",idCategoria , "  slug : ",slug );
    const { statusCategorias, listaCateg } = useSelector((stateSelector: any) => {
        return stateSelector.categorias;
      });
    useEffect(()=>{
        dispatch(Action.obtenerCategorias(slug));
    },[]);

    const classes = useStyles();
  
    const [tipo, setTipo] = useState('');
    const handleChange = (event : any) => {
        setTipo(event.target.value);
        // console.log((event.target.value));
        dispatch(Action.filtrarCategorias(event.target.value));
    };

    return (
        <>
        <Content>
          <Portal />  
        </Content>
        <Contentbody> 
        <br/>
            <Row center="xs">
            <Col   xs={12} sm={6} md={6}  lg={6}>               
                <Row center="xs">
                  <Title>Ordenar Por:</Title>
                   <FormControl className={classes.margin} >  
                {/* <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel> */}      
                        <NativeSelect
                        id="demo-customized-select-native"
                        value={tipo}
                        onChange={handleChange}
                        input={<BootstrapInput />}
                        >
                        <option aria-label="None" value="Todos">Todos</option>
                        <option value={1}>Recientes</option>
                        <option value={5}>Destacados</option>
                        <option value={7}>Finalizados</option>
                        </NativeSelect>
                    </FormControl>
                </Row>
             </Col>
             <Col   xs={12} sm={6} md={6}  lg={6}> 
                <Row center="xs">
                <TextField id="outlined-search"
                    // label="Search field" 
                    type="search"
                    variant="outlined" 
                    style={{width:'90%'}}
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="end">
                            <SearchIcon />
                          </InputAdornment>
                        ),
                      }}
                  
                   />
                </Row>
                </Col>
            </Row>
  
      
         
           <br/>

           <Row center="xs">
                  {listaCateg.map((value : any, index : number) =>(
                     <Col  key={index} xs={12} sm={6} md={4} lg={4}>                   
                              <Category key={index} data={value} />                                                        
                     </Col>
                  ))}                                            

            </Row>      
     
           </Contentbody>

        </>
    )
}

export default Categorias