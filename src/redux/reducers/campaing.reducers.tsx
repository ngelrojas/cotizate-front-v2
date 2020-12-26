import {
    SET_CAMPAING,
    SET_ERRORS
} from '../types/campaing.types'

const InitCampaingState = {
    answer: false,
    campaing: {}, 
}

export default function(state = InitCampaingState, action: any) {
    console.info('REDUCER HERE')
    console.info(action)
    return {
        answer: true,
        campaing: action.payload
    }
    //switch (action.type) {
       
        //case SET_CAMPAING:
            //return{
                //answer: true,
                //...action.payload
            //} 

        //case SET_ERRORS:
            //return {
                //answer: false,
                //...action.errors
            //}

        //default:
            //return state 
    //}

//    if(action.type === SET_CAMPAING){
        //console.info('INSIDE SET CAMPAING')
        //console.info(action.payload)
        //return{
            //answer: true,
            //...action.payload
        //}
    //}else{
        //if(action.type === SET_ERRORS){
            //console.info('ERROR HERE')
            //console.info(action.errors)
        //}

        //return state
    //}
}
