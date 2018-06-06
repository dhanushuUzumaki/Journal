/* global describe it expect */
import React from 'react';
import { shallow } from 'enzyme';
import Hello from './index';

describe('Hello Component', () => {
  // make our assertion and what we expect to happen
  it('should render without throwing an error', () => {
    expect(shallow(<Hello hello="world" />).exists()).toBe(true);
  });
});
