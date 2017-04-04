import React, {Component} from 'react';


export default class LanguageSwitcher extends Component{
  
  render(){
    return (
          <div className="language-switcher-wrapper">
            <span className="language-switcher">
              <span className="toggler"></span>
              <span className="lang lang-pt">Por</span>
              <span className="lang lang-en">Eng</span>
            </span>
          </div>
    )
  }
}