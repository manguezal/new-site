import React, {Component} from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import expect from 'expect';
import LanguageSwitcher from '../components/LanguageSwitcher';


describe('LanguageSwitcher',  () => {
  it('renders without problems', () =>{
    var languageSwitcher = ReactTestUtils.renderIntoDocument(<LanguageSwitcher />);
    expect(languageSwitcher).toExist();
  });
});