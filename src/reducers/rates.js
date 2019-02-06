import { UPDATE_DATEPICKER, 
    UPDATE_BASECURRENCY, 
    FETCH_RATES, 
    FETCH_RATES_SUCCESS,
    FETCH_RATES_FAILURE } from '../actions/actionConstants';

const initialState = {
    date: '',
    currency: '',
    rates: []
};

const rateReducer =(state = initialState, action) => {
    switch(action.type) {
        case UPDATE_DATEPICKER:
            return { ...state,
                date: action.date
            }
         case UPDATE_BASECURRENCY:
            return { ...state,
                currency: action.currency
            }
        case FETCH_RATES_SUCCESS:
            return { ...state,
                rates: action.rates,
                success: action.success,
                error: action.error
            }
        case FETCH_RATES_FAILURE:
            return { ...state,
                error: action.errorMessage,
                rates: {}
            }
        default:
            return state;
    }
}

export default rateReducer;