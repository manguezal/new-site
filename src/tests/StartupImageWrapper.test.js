import React, {Component} from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import expect from 'expect';
import StartupImageWrapper from '../components/StartupImageWrapper';


describe('StartupImageWrapper',  () => {
  it('renders without problems', () =>{
    let startupMockData = {
          "type": "startups-in",
          "alt_br": "Eventick",
          "alt_en": "",
          "link": "http://eventick.com.br/"};
        startupMockData.id = '1';

    let startupImageWrapper = ReactTestUtils.renderIntoDocument(<StartupImageWrapper key={startupMockData.id} data={startupMockData}/>);
    expect(StartupImageWrapper).toExist();
  });
});