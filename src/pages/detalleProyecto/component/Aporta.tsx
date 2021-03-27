import React, { useEffect,useState } from 'react'
import {Row, Col} from 'react-styled-flexboxgrid'
import ReactPlayer from 'react-player'
import LineProgress from '../../../components/LineProgress'
import Modal from '@material-ui/core/Modal'
import {useForm} from 'react-hook-form'
import {store} from 'react-notifications-component'

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { useDispatch, useSelector } from "react-redux";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Avatar from '@material-ui/core/Avatar';
import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {MdLocationOn} from 'react-icons/md';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LinkIcon from '@material-ui/icons/Link';
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Moment from 'react-moment';
import { useHistory } from "react-router-dom";
import {Encrypted} from '../../../userEncrypted'
import {Payment} from '../../../userPayments'

import {Article, SectionDetails, Picture, 
    DivPrincipal,
    DivPortada,
    TilePortada,
    TitleVideo1,
    DivTitlevideo,
    Porcentaje,
     Img,
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
     Input,
     DivSociable,
     ButtonEnlace,
     BotonCopiar,
     DivSeparador,
     Texto,
     LinkAzul,
     Go,
     ImgPortal,
     DivSin,
     DivSeparadorSinColor,
     LinkAzul2,
     ButtonBordeAzul,
     DivBorderSinColor,
     Texto2,
     Texto3,
     Autor,
     DivSeparador2,
     TitleDonacion,
     TitleAportaciones,
     TitleAportaciones2,
     SubTitleAportacion,
     TextoSubtitulo,
     TextoSubtitulo2,
     TextoDanger,
     H1,
     TxtRequire,
     RowCol,
     FormSend,
     RegistrarsedeAzul,
     InputPayment,
     InputPayVal,
     SelectPayment,
     BtnLeftPY,
     BtnRightPY,
     FormSendPay,
     BtnCloseSend,
     TxtPayment,
     WrapBtn,
     RowColPY,
     TxtRequirePY
    } from './styleDetallecomponent/styleDetalle';
import { isConstructorDeclaration } from 'typescript';

    function TabPanel(props : any) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box p={3}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      function a11yProps(index : any) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }

interface IAporta {
    nroAporte:number,
    aporte:{
        id:number,
        title:string,
        description:string,
        amount:string,
        expected_delivery:string,
        user:0,
        all_cities:any,
        pick_up_locally:any,
        header:number,
        cities:any
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
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
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

const Aporta: React.FC<IAporta> = (props) => {
   
    const classes = useStyles();   
    const history = useHistory();
    const { authenticated } = useSelector((stateSelector: any) => {  return stateSelector.user;  });
    const [modalStyle] = React.useState(getModalStyle)
    let SendEncrypt = new Encrypted()
    let payments = new Payment()
    let support_donate: any = props.aporte.amount
    let token: any = window.sessionStorage.getItem('token')
    // const { authenticated } = useSelector((stateSelector: any) => {  return stateSelector.profile;  });
    const {current_user} = useSelector((state: any) => ({ current_user: state.user}))
    const {register, handleSubmit, errors} = useForm<FormData>({
        mode: 'onChange'
    })

    const onSubmit = handleSubmit(({email, amount, coin, cellphone}) => {
      let data_send = {
          lcpedidoid: props.aporte.header,
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
                  lcpedidoid: props.aporte.header,
                  lnmonto: amount,
                  lcmoneda: coin
              })
          }
          
      }).catch(err => {
          console.error(err)
      })
  })

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

    useEffect(() =>{
    },[current_user]);

    const [aporte1, setAporte1] = useState(false); 
    const [aporteError, SetAporteError] = useState(false);
    const [textError, SetTextError] = useState('');
    const [open, setOpen] = React.useState(false)
    const [EndOpen, setEndOpen] = React.useState(false)
    const [TcParameter, setTcParameter] = React.useState("")
    const [TcCommerce, setTcCommerce] = React.useState("")
    const [DataSend, setDataSend] = React.useState<FormPayment>()
    const [siguiente, SetSiguiente]= useState(0)

    const _onChangeform = (e: any) => {
      // const texfield = e.target.name;
      let textValue: any = parseInt(e.target.value);
      SetSiguiente(textValue.toFixed(2))
      // if (texfield === "txtEnviar") {
      //   console.info("SUPPORT VALUE")
      //   console.log(textValue)
      //   SetSiguiente(textValue)
      // }
      // SetSiguiente(e.target.value)
      // if (texfield === "txtEnviar") {
      //     if(textValue >= support_donate){
      //       SetAporteError(false);
      //       SetTextError('');
      //       // console.log(textValue);
      //       setAporte1(textValue)
      //       SetSiguiente(textValue)
      //     }else{
      //       SetAporteError(true);
      //       SetTextError('* La cantidad de apoyo para esta recompensa debe ser menos de 200 BS.')
      //     }
          
      // }

    };

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

    const sendToPay = (data_send: any) => {
        setTcParameter(data_send.tcParametros)
        setTcCommerce(data_send.tcCommerceID)
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

    const ClicAportando=()=>{   
      // if(!aporteError){
      //   console.log("cliccc bs", aporte1);
      //   alert('aportando.... ');
      //   setOpen(true)
      // }       
      if(siguiente >= support_donate){
        setOpen(true)
     }else{
      alert('ingrese un monto');
     }

    }

    const redirecionLoin=()=>{        
       history.push("/ingresar");
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
            <Col xs={6}>
                <H1>APORTE</H1>
                <TxtRequirePY>Todos los campos son requiridos.</TxtRequirePY>  
                <FormSend className={classes.root} onSubmit={onSubmit}>
                    <RowColPY>
                        <Col xs={8}>
                            <InputPayment htmlFor="first_name">Nombre</InputPayment>
                            <InputPayVal 
                                type="text"
                                name="first_name"
                                defaultValue={current_user.first_name} 
                                ref={register({required: true})} />
                            <p>{errors.first_name && 'este campo es requirido'}</p>
                        </Col>
                        <Col xs={8}>
                            <InputPayment htmlFor="last_name">Apellido</InputPayment>
                            <InputPayVal 
                                name="last_name" 
                                defaultValue={current_user.last_name} 
                                ref={register({required: true})} />
                        </Col>
                    </RowColPY>

                    <RowColPY>    
                        <Col xs={8}>
                            <InputPayment htmlFor="email">Email</InputPayment>
                            <InputPayVal 
                                type="eamil" 
                                name="email" 
                                defaultValue={current_user.email} 
                                ref={register({required: true})} />
                        </Col>
                        <Col xs={8}>
                            <InputPayment htmlFor="cellphone">Celular</InputPayment>
                            <InputPayVal 
                                type="text" 
                                name="cellphone" 
                                ref={register({required: true})} />
                        
                        </Col>
                    </RowColPY>
                        
                    <RowColPY>
                        <Col xs={12}>
                            <InputPayment htmlFor="amount">Monto</InputPayment>
                            <InputPayVal 
                                type="text" 
                                name="amount"
                                defaultValue={siguiente} 
                                ref={register({required: true})} />
                        </Col>
                        <Col xs={8}>
                            <InputPayment htmlFor="amount">Moneda</InputPayment>
                            <SelectPayment ref={register({required: true})} name="coin">
                                {Coin.map((option) => (
                                        <option key={option.id} value={option.id}>
                                        {option.value}
                                        </option>
                                    ))}
                            </SelectPayment>
                        </Col>
                    </RowColPY>

                    <Row>

                        <Col xs={6}>
                              <BtnLeftPY>
                                  <Button type="submit" variant="outlined" color="primary">
                                      ENVIAR
                                  </Button>
                              </BtnLeftPY>
                              
                          </Col>
                          <Col xs={6}>
                              <BtnRightPY>
                                  <Button type="button" variant="outlined" color="secondary" onClick={handleClose}>
                                      Cerrar
                                  </Button>
                              </BtnRightPY>
                              
                          </Col>

                    </Row>

                </FormSend>
            </Col>

            </Row>
            
        </Col>
        </Row>        

    </div>
  )
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

             <DivSeparador2>
                        <Col xs={12} sm={12} md={12} lg={12}>
                           <Col xs={12} sm={12} md={12} lg={12}>
                                    <TitleAportaciones>                                      
                                      {props.aporte.title}
                                    </TitleAportaciones>  
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                              <TitleAportaciones2>                                      
                                Aportar con {props.aporte.amount} o mas.
                              </TitleAportaciones2>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                    <SubTitleAportacion>
                                      {' Esta recompensa garante '}
                                    </SubTitleAportacion>  
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                              <Texto dangerouslySetInnerHTML={{__html:props.aporte.description}} />
                                      
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <Row>
                                  <Col xs={6} sm={6} md={6} lg={6}>
                                            <TextoSubtitulo>
                                            {'Entrega prevista'}
                                            </TextoSubtitulo>                                      
                                  </Col>
                                  <Col xs={6} sm={6} md={6} lg={6}>
                                       <Row end="lg">                                      
                                            <TextoSubtitulo>
                                                {'Envio:'}
                                            </TextoSubtitulo>
                                       </Row>
                                  </Col>        
                                </Row>             
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>     
                               <Row>
                                  <Col xs={6} sm={6} md={6} lg={6}>
                                        <TextoSubtitulo>                       
                                            <Moment format="DD/MM/YYYY">{props.aporte.expected_delivery}</Moment>
                                        </TextoSubtitulo>
                                      
                                  </Col>
                                  <Col xs={6} sm={6} md={6} lg={6}>                                      
                                       <Row end="lg">
                                         <TextoSubtitulo>
                                            {props.aporte.all_cities? 
                                             'Toda Bolivia'
                                              :null
                                            }
                                         </TextoSubtitulo>                                     
                                       </Row>
                                  </Col>
                                </Row>                          
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>     
                               <Row end="lg">                                  
                                    <TextoSubtitulo2>
                                        {props.aporte.pick_up_locally?
                                         '* incluye valor del envio'
                                         :  null
                                        }                                        
                                    </TextoSubtitulo2>                                                                                                    
                                </Row>                          
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                            <Row center='xs' >
                                
                            <TextField
                                id="outlined-number"
                                name="txtEnviar"                              
                                type="number"
                                placeholder="100.00"
                                error={aporteError}
                                onChange={_onChangeform}
                                style={{background:'#FFFFFF', width:'65%'}}
                                variant="outlined"
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
                              {current_user.authenticated ? (<ButtonBordeAzul onClick={ClicAportando} style={{width:'65%',height:'45px', background: '#F69939', color:'#FFFFFF', border: '1px solid #F69939',fontWeight: 'bold',borderRadius: '5px' }} >Aportar </ButtonBordeAzul>)                                                        
                              :(<ButtonBordeAzul onClick={redirecionLoin}  style={{width:'65%',height:'45px', background: '#F69939', color:'#FFFFFF', border: '1px solid #F69939',fontWeight: 'bold',borderRadius: '5px' }} >Ingresar</ButtonBordeAzul>)                                                        
                            }                            
                                
                            </Row>  
                          </Col>              

                        </Col>
                    </DivSeparador2>
                        
        </>
    )
}


export default Aporta