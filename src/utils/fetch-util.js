const applicationCheck = (data) => {
  // You should implement a mock fetch call for your backend communication. This call should
  // have the same interface as the real fetch and return a promise wrapped response object.
  // The response should return disqualify message (Lorum Ipsem is fine) if the Investment Amount
  // is more than 1/5th of their Yearly Income, or their Estimated Credit is below 600, or their
  // Investment a=Amount is more than 3% of their Total Net Worth. Otherwise it
  // should return a positive qualification flag. A `Bad Request` response should be returned
  // for any Investment Amount above $9,000,000.
  const { investment, investment_type, net_worth, income, credit_score } = data;
};
export default function restCall(params) {
  const { data, startType, successType, errorType, dispatch } = params;
  if (startType) {
    dispatch({ type: startType });
  }
  // return applicationCheck(data)
  //   .then((resp) => {
  //     dispatch({ type: successType, payload: resp.data });
  //   })
  //   .catch((error) => {
  //     if (error.response) {
  //       dispatch({ type: errorType, message: error.response.data.message });
  //     } else {
  //       dispatch({ type: errorType, message: error.message });
  //     }
  //   });
}
