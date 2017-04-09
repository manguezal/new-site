import React, {Component} from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import expect from 'expect';
import EventsWrapper from '../js/components/EventsWrapper';


describe('EventsWrapper',  () => {
  it('renders without problems', () =>{
    let  eventsWrapper = ReactTestUtils.renderIntoDocument(<EventsWrapper />);
    expect(eventsWrapper).toExist();
  });
});