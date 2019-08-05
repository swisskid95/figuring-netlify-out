import { combineReducers } from 'redux';
import themeToggler from '../views/LandingPage/index.reducer';
import loginReducer from '../views/LoginPage/login.reducer';
const rootReducer = combineReducers({
  theme: themeToggler,
  user: loginReducer
});

export default rootReducer;
