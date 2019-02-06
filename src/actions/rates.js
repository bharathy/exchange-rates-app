import { UPDATE_DATEPICKER, UPDATE_BASECURRENCY, FETCH_RATES, FETCH_RATES_SUCCESS, FETCH_RATES_FAILURE} from './actionConstants';

const RATES_BASE_API = 'http://data.fixer.io/api/';
const ACCESS_KEY = '003ead15136dc55d7c626f8597fc92e1';

/* DATEPICKER ACTIONS */
export function updateDatePicker(date) {
	return (dispatch) => {
		dispatch({
			type: UPDATE_DATEPICKER,
			date
		});
	}
}

/* BASE CURRENCY ACTIONS */
export function updateBaseCurrency(currency) {
	return (dispatch) => {
		dispatch({
			type: UPDATE_BASECURRENCY,
			currency: currency
		});
	}
}

/* RATEs ACTIONS */
export function fetchRates(date, currency) {
	return (dispatch) => {
		const embedded_api = `${RATES_BASE_API}${date}?access_key=${ACCESS_KEY}&base=${currency}`;

		return fetch(embedded_api)
		.then(function(response) {
			return response.json();
		}).then(function(data) {
			dispatch({
				type: FETCH_RATES_SUCCESS,
				rates: data.rates,
				success: data.success,
				error: (data.error) ? data.error.type : null
			});
		}).catch(function(error) {
			console.log("inside error" +error)
			dispatch({
				type: FETCH_RATES_FAILURE,
				errorMessage: error.message
			});
		});
	}
}

