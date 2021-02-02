const applicationCheck = (data) =>
  new Promise((resolve, reject) => {
    const { investment, net_worth, income, credit_score } = data;
    const percentAmount = net_worth * 0.03;
    if (investment && net_worth && income && credit_score) reject();
    if (investment > income / 5) resolve({ data: 'disqualification' });
    if (credit_score < 600) resolve({ data: 'disqualification' });
    if (investment > percentAmount) resolve({ data: 'disqualification' });
    resolve({ data: 'success' });
  });

export default function restCall(params) {
  const { data, startType, successType, errorType, dispatch } = params;
  if (startType) {
    dispatch({ type: startType });
  }
  return applicationCheck(data)
    .then((resp) => {
      dispatch({ type: successType, payload: resp.data });
    })
    .catch((error) => {
      dispatch({ type: errorType, message: 'Lorum Ipsem is fine' });
    });
}
