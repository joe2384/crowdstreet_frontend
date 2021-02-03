import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { funnelAction } from '../store/actions/action';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetch-api', () => {
  let store = null,
    actions = null;

  beforeEach(async () => {
    const initialState = {
      data: '',
      message: '',
      loading: false,
    };

    store = mockStore(initialState);

    actions = store.getActions();
  });

  it('should return correct action types for request error', async () => {
    await store.dispatch(funnelAction());
    expect(actions[0].type).toEqual('DATA_REQUEST_STARTED');
    expect(actions[1].type).toEqual('DATA_REQUEST_ERROR');
  });

  it('should return correct action types', async () => {
    const object = {
      investment: 20,
      investment_type: 'bond',
      net_worth: 1000,
      income: 100,
      credit_score: 700,
    };
    await store.dispatch(funnelAction(object));
    expect(actions[0].type).toEqual('DATA_REQUEST_STARTED');
    expect(actions[1].type).toEqual('DATA_REQUEST_FULFILLED');
  });

  it('should return "Disqualified" investment more the 20% of yearly income', async () => {
    const object = {
      investment: 40,
      investment_type: 'bond',
      net_worth: 1000,
      income: 100,
      credit_score: 700,
    };

    await store.dispatch(funnelAction(object));
    expect(actions[0].type).toEqual('DATA_REQUEST_STARTED');
    expect(actions[1].type).toEqual('DATA_REQUEST_FULFILLED');
    expect(actions[1].payload.data).toEqual('disqualified');
  });

  it('should return "Disqualified" investment more the 3% of net worth', async () => {
    const object = {
      investment: 100,
      investment_type: 'bond',
      net_worth: 1000,
      income: 1000,
      credit_score: 700,
    };

    await store.dispatch(funnelAction(object));
    expect(actions[0].type).toEqual('DATA_REQUEST_STARTED');
    expect(actions[1].type).toEqual('DATA_REQUEST_FULFILLED');
    expect(actions[1].payload.data).toEqual('disqualified');
  });

  it('should return "Disqualified" credit score less the 600', async () => {
    const object = {
      investment: 20,
      investment_type: 'bond',
      net_worth: 1000,
      income: 1000,
      credit_score: 500,
    };

    await store.dispatch(funnelAction(object));
    expect(actions[0].type).toEqual('DATA_REQUEST_STARTED');
    expect(actions[1].type).toEqual('DATA_REQUEST_FULFILLED');
    expect(actions[1].payload.data).toEqual('disqualified');
  });

  it('should return "success"', async () => {
    const object = {
      investment: 20,
      investment_type: 'bond',
      net_worth: 1000,
      income: 1000,
      credit_score: 600,
    };

    await store.dispatch(funnelAction(object));
    expect(actions[0].type).toEqual('DATA_REQUEST_STARTED');
    expect(actions[1].type).toEqual('DATA_REQUEST_FULFILLED');
    expect(actions[1].payload.data).toEqual('success');
  });
});
