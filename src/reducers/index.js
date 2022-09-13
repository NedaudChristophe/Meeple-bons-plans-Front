import { combineReducers } from 'redux';

import dealReducer from './deal';
import userReducer from './user';
//import shopReducer from './shop';

// Le combineReducers sert a diviser le state et le reducer et de faire correspondre l'un a l'autre
const rootReducer = combineReducers({
  deal: dealReducer,
  user: userReducer,
  //shop: shopReducer,
});

export default rootReducer;
