import React, { useEffect,useState } from 'react'
import {Row, Col} from 'react-styled-flexboxgrid'
import ReactPlayer from 'react-player'
import LineProgress from '../../../components/LineProgress'
import {useForm} from 'react-hook-form'
import {store} from 'react-notifications-component'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltTwoToneIcon from '@material-ui/icons/ThumbUpAltTwoTone';
import { useDispatch, useSelector } from "react-redux";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarksTwoToneIcon from '@material-ui/icons/BookmarksTwoTone';
import { IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {MdLocationOn} from 'react-icons/md';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LinkIcon from '@material-ui/icons/Link';
import {copiarTextoToPapelera } from '../../../lib/FuncionesGenerales';
import TabDetalle from './TabDetalle';
import Aporta from './Aporta';
import Reportar from './Reportar';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProyectosRecomendados from './ProyectosRecomendados'

import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import * as Action from '../../../redux/actions/detalleProyectoActions';
import {Encrypted} from '../../../userEncrypted'
import {Payment} from '../../../userPayments'

  
import {Article, SectionDetails, Picture, 
    DivPrincipal,
    DivPortada,
    TilePortada,
    TitleVideo1,
    DivTitlevideo,
    Porcentaje,
     Contenedor,
     AlcanceText,
     Alcanzado,
     NumberMontoMeta,
     Aportetitle,
     AporteNumber,
     TileDias,
     Div1,
     DivCod,
     TileCode,
     BotonAportar,
     DivTitle,
     DivSociable,
     ButtonEnlace,
     BotonCopiar,
     DivSeparador,
     Texto,
     LinkAzul,
     Go,
     Br,
     Title,
     ImgPortal,
     DivSin,
     DivSeparadorSinColor,
     LinkAzul2,
     ButtonBordeAzul,
     Autor,
     DivSeparador2,
     TitleDonacion,
     H1,
     TxtRequire,
     RowCol,
     FormSend,
     RegistrarsedeAzul,
     InputPayment,
     InputPayVal,
     SelectPayment,
     BtnLeft,
     BtnRight,
     FormSendPay,
     BtnCloseSend,
     TxtPayment
    } from './styleDetallecomponent/styleDetalle';


interface IDetalle {
    data: {
        id:number,
        title:string,
        video_main:string,
        slug:string,
        description:string,
        public_at:string,
        status:number,
        flag:number,
        profile_ca:number,
        currency:number,
        short_url:string,
        slogan_campaing:string,
        header:{
            id:number,
            qty_day_left:number,
            amount:string,
            amount_reached:string,
            percent_reached:string,
            role:number,
            code_campaing:string,
            user:{
                first_name:string,
                last_name:string
            },
            category:{
                id:number,
                name:string,
                slug:string,
                description:string,
                img_banner:string,
                img_icon:string
            },
            city:{
                id:number,
                name:string,
                slug:string,
                short_name:string,
                code_name:string,
                description:string,
                countries:{
                    id:number,
                    name:string,
                    slug:string,
                    short_name:string,
                    code_name:string,
                    description:string
                }
            }
        },
        profile:{
            id:number,
            cinit:string,
            address:string,
            number_address:String,
            neightbordhood:string,
            cellphone: string,            
            telephone:string,
            description:string,
            complete:any,
            rs_facebook:any,
            rs_twitter:any,
            rs_linkedin:any,
            rs_another:any,
            current_position:string,
            headline:string,
            birthdate:string,
            photo:string,
            user:{
                id:number,
                first_name:string,
                last_name:string,
                email:string
            },
            countries:{
                id:number,
                name:string,
                slug:string,
                short_name:string,
                code_name:string,
                description:string
            },
            cities:{
                id:number,
                name:string,
                slug:string,
                short_name:string,
                code_name:string,
                description:string,
                countries:{
                    id:number,
                    name:string,
                    slug:string,
                    short_name:string,
                    code_name:string,
                    description:string
                }
            }
        }
    }
}

type FormData = {
    first_name: string
    last_name: string
    email: string
    header: number
    amount: number
    status_payment: number
    method_payment: number
    coin: number
    cellphone: number
}

function getModalStyle() {
    const top = 50
    const left = 50

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    paper: {
        position: 'absolute',
        width: '50%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[1],
        padding: theme.spacing(2, 4, 3),
    },
  }));

const Coin = [
    {"id": 1, value: "USD"},
    {"id": 2, value: "BOB"}
]

interface FormPayment {
    lcpedidoid: number
    lnmonto: number
    lcmoneda: number
}

const Detalle: React.FC<IDetalle> = (props) => {
    const classes = useStyles();
    let SendEncrypt = new Encrypted()
    const dispatch = useDispatch();
    const { authenticated,id } = useSelector((stateSelector: any) => {  return stateSelector.user;  });
    const [modalStyle] = React.useState(getModalStyle)
    const [open, setOpen] = React.useState(false)
    const [EndOpen, setEndOpen] = React.useState(false)
    const [TcParameter, setTcParameter] = React.useState("")
    const [TcCommerce, setTcCommerce] = React.useState("")
    const [DataSend, setDataSend] = React.useState<FormPayment>()

    let payments = new Payment()
    let token: any = window.sessionStorage.getItem('token')
    const {
        proyectosDetalle, aportes, statusAportes, statusLike, statusSave,proyectosRec,profiles
      } = useSelector((stateSelector: any) => {
        return stateSelector.detalleProyecto;
      });
    let idProyectoHeader:number;
        idProyectoHeader= props.data.header.id; 
    // const { authenticated } = useSelector((stateSelector: any) => {  return stateSelector.profile;  });
    const {current_user} = useSelector((state: any) => ({ current_user: state.user}))
    const {register, handleSubmit, errors} = useForm<FormData>({
        mode: 'onChange'
    })

    const onSubmit = handleSubmit(({email, amount, coin, cellphone}) => {
        let data_send = {
            lcpedidoid: props.data.header.id,
            lcemail: email,
            lntelefono: cellphone,
            lnmonto: amount,
            lcmoneda: coin
        }

        SendEncrypt.EncryptData(data_send).then(resp => {
            if(resp.data.data.tcCommerceID){
                sendToPay(resp.data.data)
                setEndOpen(true)
                setDataSend({
                    lcpedidoid: props.data.header.id,
                    lnmonto: amount,
                    lcmoneda: coin
                })
            }
            
        }).catch(err => {
            console.error(err)
        })
    })

    const handleSendPayment = () => {

        payments.CreatePayment(DataSend, token)
            .then(resp => {
                if(resp.data.data === true){
                    Notifications('Los datos de su Aporte fueron Guardados.', 'success')
                    setEndOpen(false)
                    setOpen(false)
                }
            })
            .catch(err => {
                console.error(err)
                Notifications('Tuvimos un problema al guardar sus datos.', 'error')
            })
    }

    const copiarLink =(data: string)=>{       
        copiarTextoToPapelera(data);
    }
    useEffect(() =>{      
        dispatch(Action.obtnerAportes(props.data.header.id));
        dispatch(Action.obtnerFases(props.data.header.id));
        dispatch(Action.obtenerActualizaciones(props.data.header.id));
        dispatch(Action.obtnerComentario(props.data.header.id));
        dispatch(Action.obtenerProyectosRecomendados('tecnologia')); //quemado categoria/ slug
        if(authenticated){
            dispatch(Action.obtenerLike(props.data.header.id));
            dispatch(Action.obtenerSave(props.data.header.id)); //headerid
        }
       
   },[]);

    const sendToPay = (data_send: any) => {
        setTcParameter(data_send.tcParametros)
        setTcCommerce(data_send.tcCommerceID)
    }

//     useEffect(() =>{
//         dispatch(Action.obtnerAportes(props.data.header.id));
//         dispatch(Action.obtnerFases(props.data.header.id));
//    },[]);
   const support_donate:number = 5.00

   const [siguiente, SetSiguiente]= useState(support_donate)

   const _onChangeSiguiente = (e: any) => {
        const texfield = e.target.name;
        let textValue:any = parseInt(e.target.value);
        if (texfield === "txtSiguiente") {
            SetSiguiente(textValue.toFixed(2));
        }  
   };

///proyectos finalizados temporal aqui cambiar por  recomendados--------------------
   const {
    proyectosDestacados,
    featuredProjects,
    proyectosFinalizados,
    finalizedProjects,
    causasSociales,
    listCausasSociales,
    categoriasStatus
  } = useSelector((stateSelector: any) => {
    return stateSelector.home;
  });

  useEffect(() => {   
  }, [featuredProjects,proyectosFinalizados,finalizedProjects,categoriasStatus]);

//----------------------------------------------------------------------------------
const [dispositivoMovil, setDispositivoMovil] = useState(false);


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const verificarDispositivo =() =>{
    if( navigator.userAgent.match(/Android/i)
          || navigator.userAgent.match(/iPhone/i)
          || navigator.userAgent.match(/BlackBerry/i)
          || navigator.userAgent.match(/Windows Phone/i)){
                 setDispositivoMovil(true);
        }else{
          setDispositivoMovil(false);
        }
  }
  useEffect(() => {        
    verificarDispositivo();
      console.log('disposiito :',dispositivoMovil);
  }, [dispositivoMovil]);
//------------------------------------------------------------
    
   const handleSubmitnex =()=>{
           
       if(siguiente >0){
          setOpen(true)
       }else{
        alert('ingrese un monto');
       }       
   }

   const handleClose = () => {
       setOpen(false)
       setTcCommerce('')
       setTcParameter('')
   }

   const handleCloseEnd = () => {
        setEndOpen(false)
        setTcCommerce('')
        setTcParameter('')
    }

   const onchangeLike = ()=> {
        if(statusLike){
            dispatch(Action.onchangeLike(false, props.data.header.id));           
        }else{
            dispatch(Action.onchangeLike(true, props.data.header.id));          
        }
   }

   const onchangeSave = ()=> {
       if(statusSave){
           dispatch(Action.onchangeSave(false, props.data.header.id)); //es idheader
       }else{
           dispatch(Action.onchangeSave(true, props.data.header.id)); //es idheades
       }
    
  }

  useEffect(()=>{    
  },[statusLike, statusSave, authenticated])

  useEffect(()=>{    
     dispatch(Action.obtenerRedesProyecto(props.data.profile.id, props.data.profile_ca));
  },[])
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

  const EndPay = (
      <div style={modalStyle} className={classes.paper}>
          <Row>
              <Col xs={12}>
                  <TxtPayment>
                        <h3>Por favor verifique que todos sus datos y aportaciones estan correctos.</h3>
                        <h4>para realizar la aportacion, sera rediccionado a la pagina de PAGO FASIL.</h4>
                  </TxtPayment>
                
              </Col>

          </Row>
          <Row>
              <Col xs={12}>
                <Row center="xs">
                    <Col xs={6}>
                        {TcCommerce ? (
                            <FormSendPay action="https://checkout.pagofacil.com.bo/es/pay" method="post" name="formularioPago" target="_blank">
                                <input type="hidden" name="tcCommerceID" defaultValue={TcCommerce} />
                                <input type="hidden" name="tcParametros" defaultValue={TcParameter} />
                                <Button type="submit" variant="outlined" color="primary" onClick={handleSendPayment}>
                                    Realizar Pago
                                </Button>
                            </FormSendPay>
                        ):('')}
                    </Col>
                    <Col xs={6}>
                        <BtnCloseSend>
                            <Button type="button" variant="outlined" color="secondary" onClick={handleCloseEnd}>
                                Cerrar
                            </Button>
                        </BtnCloseSend>
                        
                    </Col>                    
                </Row>
              </Col>
          </Row>
              

      </div>
  )

  const body = (
    <div style={modalStyle} className={classes.paper}>
        <Row>
        <Col xs={12}>
            <Row center="xs">
            <Col xs={8}>
                <H1>DONACION</H1>
                <TxtRequire>Todos los campos son requiridos.</TxtRequire>  
                <FormSend className={classes.root} onSubmit={onSubmit}>
                    <RowCol>
                        <Col xs={6}>
                            <InputPayment htmlFor="first_name">Nombre</InputPayment>
                            <InputPayVal 
                                type="text"
                                name="first_name"
                                defaultValue={current_user.first_name} 
                                ref={register({required: true})} />
                            <p>{errors.first_name && 'este campo es requirido'}</p>
                        </Col>
                        <Col xs={6}>
                            <InputPayment htmlFor="last_name">Apellido</InputPayment>
                            <InputPayVal 
                                name="last_name" 
                                defaultValue={current_user.last_name} 
                                ref={register({required: true})} />
                        </Col>
                    </RowCol>

                    <RowCol>    
                        <Col xs={6}>
                            <InputPayment htmlFor="email">Email</InputPayment>
                            <InputPayVal 
                                type="eamil" 
                                name="email" 
                                defaultValue={current_user.email} 
                                ref={register({required: true})} />
                        </Col>
                        <Col xs={6}>
                            <InputPayment htmlFor="cellphone">Celular</InputPayment>
                            <InputPayVal 
                                type="text" 
                                name="cellphone"
                                defaultValue={props.data.profile.cellphone} 
                                ref={register({required: true})} />
                        
                        </Col>
                    </RowCol>
                        
                    <RowCol>
                        <Col xs={6}>
                            <InputPayment htmlFor="amount">Monto</InputPayment>
                            <InputPayVal 
                                type="text" 
                                name="amount"
                                defaultValue={siguiente}
                                placeholder="10.00"
                                ref={register({required: true})} />
                        </Col>
                        <Col xs={6}>
                            <InputPayment htmlFor="amount">Moneda</InputPayment>
                            <SelectPayment ref={register({required: true})} name="coin">
                                {Coin.map((option) => (
                                        <option key={option.id} value={option.id}>
                                        {option.value}
                                        </option>
                                    ))}
                            </SelectPayment>
                        </Col>
                    </RowCol>

                    <RowCol>
                        <Col xs={6}>
                            <BtnLeft>
                                <Button type="submit" variant="outlined" color="primary">
                                    ENVIAR
                                </Button>
                            </BtnLeft>
                            
                        </Col>
                        <Col xs={6}>
                            <BtnRight>
                                <Button type="button" variant="outlined" color="secondary" onClick={handleClose}>
                                    Cerrar
                                </Button>
                            </BtnRight>
                            
                        </Col>
                        
                    </RowCol>

                </FormSend>
            </Col>

            </Row>
            
        </Col>
        </Row>        

    </div>
  )

  useEffect(()=>{
    dispatch(Action.obtnerAportes(props.data.header.id));
    dispatch(Action.obtnerFases(props.data.header.id));
  },[statusLike, statusSave])

    return (
        <>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-payment-cotizate"
            aria-describedby="modal payment with free contribution-cotizate">
            {body}
        </Modal>

        <Modal
            open={EndOpen}
            onClose={handleCloseEnd}
            aria-labelledby="modal-payment-cotizate"
            aria-describedby="modal payment with free contribution-cotizate">
            {EndPay}
        </Modal>

        <Col xs={12} sm={12} md={12} lg={12} >     
          <DivPrincipal> 
           <Row center="xs">
                            <Col xs={12} sm={12} md={12} lg={12}>
                               <DivPortada>
                                  <TilePortada> 
                                     {props.data.title}
                                    </TilePortada>
                                </DivPortada>  
                            </Col>
                        </Row>
           <Row start="lg">   
                <Col xs={12} sm={6} md={6} lg={6}> 
                    <SectionDetails>
                            <Article>
                                <Picture>                       
                                    <ReactPlayer width={'99.9%'} url={props.data.video_main} />                    
                                </Picture>
                                <Row >                                                
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                    <DivTitlevideo>
                                        <Row>                                                            
                                                <Col xs={6} sm={6} md={6} lg={6}>                                                                           
                                                    <TitleVideo1>{props.data.header.category.name}</TitleVideo1>                                              
                                                </Col>                                                          
                                                <Col xs={6} sm={6} md={6} lg={6}>                                          
                                                    <TitleVideo1> <MdLocationOn /> {props.data.header.city.name}{' - '} {props.data.header.city.countries.name} </TitleVideo1>
                                                </Col>                               
                                        </Row>
                                        </DivTitlevideo>
                                    </Col>
                                
                                </Row>
                            </Article>          
                    </SectionDetails>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}>
                    <Contenedor>
                        <Row>   
                        <Col xs={8} sm={8} md={8} lg={6}>                   
                                <Row start="lg">
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                    <Alcanzado>                                    
                                            <AlcanceText> {'ALCANZADOS BS: '}{props.data.header.amount_reached} </AlcanceText>                                    
                                        </Alcanzado>  
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={4} sm={4} md={4} lg={6}>                    
                                <Row end="lg">
                                    <Col xs={12} sm={12} md={12} lg={12}>   
                                    <Alcanzado>                               
                                        <NumberMontoMeta> {'Meta: '}{props.data.header.amount} Bs</NumberMontoMeta>
                                    </Alcanzado>                          
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <Row start="lg">
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                        <Porcentaje>
                                        <LineProgress bgcolor={'#7CC142'} completed={'50'} />                                
                                        </Porcentaje>                            
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <Row start="lg">
                                    <Col xs={12} sm={12} md={12} lg={12}>                                
                                    <AporteNumber>{10}</AporteNumber> <Aportetitle>{'Aportadore'}</Aportetitle>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <Row start="lg">
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                        <Div1>
                                            <TileDias>{'FALTAN'} {props.data.header.qty_day_left} {' DIAS'}</TileDias> 
                                        </Div1>                               
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <Row start="lg">
                                    <Col xs={6  } sm={6} md={6} lg={6}>
                                        <Div1>
                                            {authenticated? 
                                            <IconButton onClick={onchangeLike} >
                                            {statusLike?  <ThumbUpAltIcon />: <ThumbUpAltOutlinedIcon /> }
                                            </IconButton>
                                            : 
                                            <IconButton  >
                                                <ThumbUpAltTwoToneIcon />
                                            </IconButton>
                                            }
                                        </Div1>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6}>
                                    <Div1>
                                            {authenticated? 
                                                <IconButton onClick={onchangeSave} >
                                                    {statusSave?  <BookmarkIcon />: <BookmarkBorderIcon /> } 
                                                </IconButton>
                                                :
                                                <IconButton >
                                                    <BookmarksTwoToneIcon />    
                                                </IconButton>
                                            }
                                        </Div1>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row start="lg">
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <Row start="lg">
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                        <DivCod>
                                            <TileCode>{'COD: '}{props.data.header.code_campaing}</TileCode> 
                                        </DivCod>                               
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        </Contenedor>
                            <Row  >
                                <Col xs={12} sm={12} md={12} lg={12}>
                                    <Row center='xs' >

                                            <BotonAportar >Aportar</BotonAportar>   
                                    </Row>
                                </Col>
                            </Row>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12}>
            <Row start="lg">
                <Col xs={12} sm={6} md={6} lg={6}>
                  <DivSeparador>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <DivTitle>
                        {'COMPARTE EN TUS REDES SOCIALES'   }
                        </DivTitle>  
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12}> 
                      <DivSociable> 
                      <Row>
                          <Col xs={12} sm={12} md={6} lg={4}>
                            {profiles.rs_facebook &&
                                <Go  to={{ pathname: `${profiles.rs_facebook}` }} target="_blank" >
                                   <FacebookIcon style={{width:"22%" }} /> {' '} 
                                </Go>
                             }
                             {profiles.rs_linkedin &&
                                <Go  to={{ pathname: `${profiles.rs_linkedin}` }} target="_blank" >
                                    <LinkedInIcon style={{width:"22%" }} />  {' '} 
                                </Go>
                             }
                             {profiles.rs_twitter &&
                                <Go  to={{ pathname: `${profiles.rs_twitter}` }} target="_blank" >
                                    <TwitterIcon style={{width:"22%" }} />  {' '} 
                                </Go>
                             }        
                             {profiles.rs_another &&
                                <Go  to={{ pathname: `${profiles.rs_another}` }} target="_blank" >
                                    <LinkIcon style={{width:"22%" }} />  
                                </Go>
                             }
                          </Col> 
                          <Col xs={12} sm={12} md={6} lg={4}>
                              <Row end="lg">                                
                                  <ButtonEnlace>{props.data.short_url}</ButtonEnlace>                                
                              </Row>
                          </Col>
                          <Col xs={12} sm={12} md={6} lg={4}>
                              <Row end="lg">
                                <BotonAportar onClick={()=> copiarLink(props.data.short_url)} style={{width:"50%", background: "#1383C5"}} >Copiar</BotonAportar>
                              </Row>
                          </Col>
                        </Row>
                      </DivSociable>
                    </Col>     
                    
                  </DivSeparador>  
            
                  <TabDetalle  decripcion={props.data.description} />                                                                                              
           
                 <Reportar />

                </Col>
                <Col xs={12} sm={6} md={6} lg={6}>                      
                    <DivSeparador>
                    <Col xs={12} sm={12} md={12} lg={12}>
                     <Row> 
                        <Col xs={12} sm={3} md={3} lg={3}>
                            <Row center='xs' >
                               <div className={classes.root}>
                                 <Avatar alt="Remy Sharp" src="https://hipertextual.com/files/2015/11/albert-einstein-retrato-scaled.jpg" className={classes.large} />
                               </div>
                            </Row>
                        </Col>
                        <Col xs={12} sm={9} md={9} lg={9}>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                
                                <Autor>
                                 {props.data.profile.user.first_name}{' '}{props.data.profile.user.last_name}
                                </Autor>
                                
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                
                                  <LinkAzul to="/descripcion" style={{fontSize:"12px"}}>{'3 proyectos creados'}</LinkAzul> {' '}
                                
                                  <LinkAzul to="/descripcion" style={{fontSize:"12px"}} >{'2 proyectos apoyados'}</LinkAzul> {' '}                                
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <div style={{marginTop:"2%", marginBottom:"2%"}} > 
                                   {props.data.profile.rs_facebook? <> 
                                      <Go  to={{ pathname:  `${props.data.profile.rs_facebook}` }} target="_blank" >
                                         <FacebookIcon style={{marginLeft:'2%' }} /> {' '}
                                      </Go>
                                    </>: null
                                    }
                                   {props.data.profile.rs_twitter? <>  
                                      <Go  to={{ pathname:  `${props.data.profile.rs_twitter}` }} target="_blank" >
                                         <TwitterIcon style={{marginLeft:'2%'  }} />  {' '} 
                                      </Go>
                                   </>: null
                                   }
                                   {props.data.profile.rs_linkedin? <>  
                                       <Go  to={{ pathname:  `${props.data.profile.rs_linkedin}` }} target="_blank" >
                                         <LinkedInIcon style={{marginLeft:'2%'  }} />  {' '} 
                                       </Go>
                                   </>: null 
                                   }
                                    {props.data.profile.rs_another? <>  
                                       <Go  to={{ pathname:  `${props.data.profile.rs_another}` }} target="_blank" >
                                         <LinkIcon style={{marginLeft:'2%'  }} />  {' '} 
                                       </Go>
                                   </>: null 
                                   }
                                </div>
                            </Col>                          
                        </Col>

                      </Row>   
                       <Col xs={12} sm={12} md={12} lg={12}>
                            <Row center='xs' >
                                <div style={{marginTop:"2%", marginBottom:"2%", width:'100%'}} > 
                                <ButtonBordeAzul style={{width:'39%',height:'40px', background: '#F69939', color:'#FFFFFF', border: '1px solid #F69939',fontWeight: 'bold',borderRadius: '5px' }} >Siguiendo </ButtonBordeAzul>
                                <ButtonBordeAzul style={{ width:'39%', height:'40px', background: '#FFFFFF', color:'#F69939', border: '1px solid #F69939',fontWeight: 'bold',borderRadius: '5px' }} >Contacto</ButtonBordeAzul>
                                </div>
                            </Row>  
                        </Col>                                                                            
                    </Col>                    
                  </DivSeparador> 
                  <DivSeparador2>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <Col xs={12} sm={12} md={12} lg={12}>
                                <Row center='xs' >
                                    <TitleDonacion>
                                        Donacion 
                                    </TitleDonacion>                                    
                                </Row>  
                        </Col> 
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <Row center='xs' >
                                
                            <TextField
                                id="outlined-number"
                                name="txtSiguiente"
                                value={siguiente}
                                onChange={_onChangeSiguiente}
                                type="number"
                                style={{background:'#FFFFFF', width:'65%', paddingBottom :'2px'}}
                                variant="outlined"
                                placeholder="5.00"
                                InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        Bs.
                                      </InputAdornment>
                                    ),
                                  }}
                                />
                            
                            </Row>  
                          </Col> 
                          <Col xs={12} sm={12} md={12} lg={12}>
                            <Row center='xs' >     
                                {current_user.authenticated ? (
                                    <ButtonBordeAzul style={{width:'65%',height:'45px', background: '#F69939', color:'#FFFFFF', border: '1px solid #F69939',fontWeight: 'bold',borderRadius: '5px' }} onClick={handleSubmitnex}>Aportar </ButtonBordeAzul>
                                ):(
                                    <RegistrarsedeAzul to="ingresar" style={{width:'65%',height:'45px', background: '#F69939', color:'#FFFFFF', border: '1px solid #F69939',fontWeight: 'bold',borderRadius: '5px' }} >Ingresar </RegistrarsedeAzul>
                                )}                           
                                                                                        
                            </Row>  
                          </Col>                
                          </Col>   
                   </DivSeparador2> 
                        {aportes.map((value: any, index: any) => (
                            <Aporta aporte={value} nroAporte={index} />
                        ))}                                       
                </Col>
            </Row>           
           </Col>
           </Row>

           {proyectosRec?
                <div style={{ background:'#F9F0E8'}}>     
                  <Br/>        
                    <Title>RECOMENDADOS </Title>
                    <div style={{ padding:'5px'}} >
                        <Carousel  responsive={responsive} showDots={dispositivoMovil} arrows={dispositivoMovil}  >
                            {proyectosRec.map((value : any, index : number) =>(
                                <ProyectosRecomendados key={index} data={value} />
                            ))}                                    
                        </Carousel>
                    </div>               
                </div>   
             : null }

        </DivPrincipal>
          <Br/>
        </Col>  
        </>
    )
}

export default Detalle