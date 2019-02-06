const mapStateToProps = (state) => ({
	currency: state.currency,
	date: state.date,
	rates: state.rates,
	error: state.error,
	success: state.success
});

export default mapStateToProps;
