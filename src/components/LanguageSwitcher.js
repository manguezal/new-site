import React, {Component} from 'react';
const I18n = require('react-i18nify').I18n;

export default class LanguageSwitcher extends Component{
   
   constructor(props) {
    super(props);
    this.state = {isPortuguese: true};
  };

  handleClick() {
    this.setState(prevState => ({
      isPortuguese: !prevState.isPortuguese
    }), () => this.setLocale());

    
  };

  setLocale(){
    I18n.setLocale(this.state.isPortuguese ? 'pt' : 'en', true);
  }

  toggleState(){
    let cssClass = "toggler ";
    cssClass += (this.state.isPortuguese) ? 'toggler-is-portuguese' : 'toggler-is-english';
    
    return cssClass;
  }

  render(){
    return (
          <div className="language-switcher-wrapper">
            <span className="language-switcher" onClick={this.handleClick.bind(this)}>
              <span className={this.toggleState()}></span>
              <span className="lang lang-pt">Por</span>
              <span className="lang lang-en">Eng</span>
            </span>
          </div>
    );
  };
}