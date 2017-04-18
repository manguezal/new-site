import React, {Component} from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import expect from 'expect';
import NewsletterForm from '../components/NewsletterForm';


describe('NewsletterForm',  () => {
  it('renders without problems', () =>{
    let  newsletterForm = ReactTestUtils.renderIntoDocument(<NewsletterForm />);
    expect(newsletterForm).toExist();
  });
});