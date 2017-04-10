if (module.hot) {
  module.hot.accept('./test', () => {
    console.log('it works!')
  })
}

import React from 'react'
import ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Home } from './components/home'

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
