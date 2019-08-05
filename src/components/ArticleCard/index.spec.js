import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArticleCard from './index.jsx';

configure({ adapter: new Adapter() });

describe('<ArticleCard />', () => {
  const props = {
    light: true
  };

  const prop = {
    light: false
  };
  it('should render light theme ArticleCard', () => {
    shallow(<ArticleCard {...props} />);
  });

  it('should render dark theme ArticleCard', () => {
    shallow(<ArticleCard {...prop} />);
  });
});
