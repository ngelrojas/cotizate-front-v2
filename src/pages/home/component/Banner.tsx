import React, {useState, useEffect} from 'react';
import {SectionBanner, ArticleBanner, Picture, Go,Img, Title } from '../styles/index'
import {Row, Col} from 'react-styled-flexboxgrid'
import { useHistory } from "react-router-dom";
import BannerArte from '../images/arte-con-texto.png';
import BannerEcologia from '../images/ecologia-con-texto.png';
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ReactPlayer from 'react-player/youtube'

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const Banner: React.FC = () => {
    const [content, setContent] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        
        
    }, []);
    const classes = useStyles();
    const [openVideo1, setOpenVideo1] = React.useState(false);
    const [openVideo2, setOpenVideo2] = React.useState(false);
  
  
  
    const handleClose1 = () => {
    setOpenVideo1(false);
    };
    const handleClose2 = () => {
     setOpenVideo2(false);
    };

    const handelopenvideo1 = () => {
    setOpenVideo1(true);
    };
   const handelopenVideo2=()=>{
    setOpenVideo2(true);
   }
    return (
    <>      
        <Row >
            <Col xs={12} sm={6} md={6} lg={6}>
            <Row center="xs">
                <SectionBanner>
                    <ArticleBanner>
                        <Picture  onClick={handelopenvideo1}>
                            {/* <Go to="/crowfounding"> */}
                                <Img
                                    src={BannerArte}
                                    alt="cotizate"
                                />
                            {/* </Go> */}
                        </Picture>
                    </ArticleBanner>
               </SectionBanner>
               </Row> 
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}>
            <Row center="xs">
                <SectionBanner>
                    <ArticleBanner>
                        <Picture onClick={handelopenVideo2}>
                            {/* <Go to="/cotizate"> */}
                                <Img
                                    src={BannerEcologia}
                                    alt="cotizate"
                                />
                            {/* </Go> */}
                        </Picture>
                    </ArticleBanner>
                 </SectionBanner>
                 </Row>   
            </Col>
        </Row>   

        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={openVideo1}
            onClose={handleClose1}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={openVideo1}>
            <div >
                 <ReactPlayer url='https://www.youtube.com/watch?v=NjFCVb0f2Vk' />
            </div>
            </Fade>
        </Modal>      
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={openVideo2}
            onClose={handleClose2}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={openVideo2}>
            <div >
            <ReactPlayer url='https://www.youtube.com/watch?v=kz6GON4ykNo' />
            </div>
            </Fade>
        </Modal>    
    </>
      
    )
}

export default Banner
