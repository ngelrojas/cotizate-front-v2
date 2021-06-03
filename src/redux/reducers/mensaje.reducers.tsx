import * as Actions from "../actions/mensajeActions";

const initialState = {
    showing  : false,
    options: {
        anchorOrigin    : {
            vertical  : 'top',
            horizontal: 'center'
        },
        autoHideDuration: 6000,
        message         : "Hi",
        variant         : null
    }
};

const message = function (state = initialState, action : any) {
    switch ( action.type )
    {
        case Actions.SHOW_MESSAGE:
        {
            return {
                showing  : true,
                options: {
                    ...initialState.options,
                    ...action.options
                }
            };
        }
        case Actions.HIDE_MESSAGE:
        {
            return {
                ...state,
                showing: null
            };
        }
        default:
        {
            return state;
        }
    }
};

export default message;
