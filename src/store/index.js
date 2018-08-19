import { createStore } from 'redux';

const initialState = {
  weather_report: ''
};

const reducer = (state = initialState, action) => {
  //console.log('reducer', action);

  switch (action.type) {
    case 'GET_WEATHER':
      return Object.assign({}, state, {
        weather_report: action.weather_report
      });
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
