/* global describe it expect */
import React from 'react';
import { shallow } from 'enzyme';
import App from './index';

describe('Hello Component', () => {
  // make our assertion and what we expect to happen
  it('should render without throwing an error', () => {
    expect(shallow(<App />).exists()).toBe(true);
  });

  it('should render Hello component', () => {
    expect(
      shallow(<App />)
        .find('Hello')
        .exists()
    ).toBe(true);
  });
});
