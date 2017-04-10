import React, {Component} from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import expect from 'expect';
import StartupsContainer from '../components/StartupsContainer';


describe('StartupsContainer',  () => {
  it('renders without problems', () =>{
    var startupsContainer = ReactTestUtils.renderIntoDocument(<StartupsContainer />);
    expect(startupsContainer).toExist();
  });
});