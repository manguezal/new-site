import React, {Component} from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import expect from 'expect';
import StartupImageWrapper from '../js/components/StartupImageWrapper';


describe('StartupImageWrapper',  () => {
  it('renders without problems', () =>{
    var startupImageWrapper = ReactTestUtils.renderIntoDocument(<StartupImageWrapper />);
    expect(StartupImageWrapper).toExist();
  });
});