const applicationCheck = (data) =>
  new Promise((resolve, reject) => {
    const { investment, net_worth, income, credit_score } = data;
    const percentAmount = net_worth * 0.03;
    if (investment >= 9000) reject({ message: 'Bad request' });
    if (
      (investment > income / 5) |
      (credit_score < 600) |
      (investment > percentAmount)
    )
      resolve({
        data: 'disqualified',
        message: "We are sorry but you don't meet the requirements to invest",
      });
    resolve({ data: 'success' });
  });

export default function restCall(params) {
  const { data, startType, successType, errorType, dispatch } = params;
  if (startType) {
    dispatch({ type: startType });
  }
  return applicationCheck(data)
    .then((resp) => {
      dispatch({
        type: successType,
        payload: { data: resp.data, message: resp.message },
      });
    })
    .catch((error) => {
      dispatch({ type: errorType, payload: error.message });
    });
}
