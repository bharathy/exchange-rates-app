import { bindActionCreators } from 'redux';
import * as ratesAction from '../actions/rates';

const mapDispatchToProps = (dispatch) => bindActionCreators(ratesAction, dispatch);

export default mapDispatchToProps;