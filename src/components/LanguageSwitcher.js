import React, {Component} from 'react';

export default class LanguageSwitcher extends Component{
   
   constructor(props) {
    super(props);
    this.state = {isPortuguese: true};
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    this.setState(prevState => ({
      isPortuguese: !prevState.isPortuguese
    }));
  };

  toggleState(){
    let cssClass = "toggler ";
    cssClass += (this.state.isPortuguese) ? 'toggler-is-portuguese' : 'toggler-is-english';
    
    return cssClass;
  }

  render(){
    return (
          <div className="language-switcher-wrapper">
            <span className="language-switcher" onClick={this.handleClick}>
              <span className={this.toggleState()}></span>
              <span className="lang lang-pt">Por</span>
              <span className="lang lang-en">Eng</span>
            </span>
          </div>
    );
  };
}