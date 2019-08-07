import { APP_THEME } from '../../actionTypes/index';

export const themeToggler = theme => {
  return {
    type: APP_THEME,
    payload: theme
  };
};