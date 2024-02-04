import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  chat: require('./chat-reducer').reducer,
  auth: require('./auth-reducer').reducer,
  app: require('./app-reducer').reducer,
});

export default RootReducer;
