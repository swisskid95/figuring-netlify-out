import { combineReducers } from 'redux';
import themeToggler from '../views/LandingPage/index.reducer';

const rootReducer = combineReducers({
  theme: themeToggler
});

export default rootReducer;
