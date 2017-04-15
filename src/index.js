if (module.hot) {
  module.hot.accept('./test', () => {
    console.log('it works!')
  })
}

import React from 'react'
import ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Home } from './components/home'
import {en} from './locales/en'
import {pt} from './locales/pt'

const I18n = require('react-i18nify').I18n;

I18n.setTranslations({
  en: en,
  pt: pt 
});

let lang = navigator.language.toLowerCase();
I18n.setLocale( (lang !=="pt" && lang!== "pt-br")? "en" : "pt");

ReactDom.render(
  <AppContainer>
      <Home/>
  </AppContainer>,
  document.getElementById('wrapper')
);


if (module.hot) {
  module.hot.accept('./components/home', () => {
    ReactDom.render(
      <AppContainer>
          <Home/>
      </AppContainer>,
      document.getElementById('wrapper')
    );
  });
}
