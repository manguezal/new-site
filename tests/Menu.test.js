import React, {Component} from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import expect from 'expect';
import Menu from '../js/components/Menu';


describe('Menu',  () => {
  it('renders without problems', () =>{
    var menu = ReactTestUtils.renderIntoDocument(<Menu />);
    expect(menu).toExist();
  });
});