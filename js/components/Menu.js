import React, {Component} from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import Navigation from '../Navigation';

export default class Menu extends Component{


  constructor(){
      super();
      this.navigation = new Navigation() ;
  }
  
  render(){
    return (
        <div className="menu">
            <div className="container">
                <nav>
                <a href="/" className="manguezal-logo-small">Manguez.al</a>
                <a href="#" className="menu-toggler">Menu</a>
                
                <div className="menu-group">
                    <a href="#welcome" onClick={this.navigation.goTo("sobre", event)}>Sobre</a>
                    <a href="#startups" onClick={this.navigation.goTo("startups", event)}>Startups</a>
                    <a href="events.html" onClick={this.navigation.goTo("eventos", event)}>Eventos</a>
                    <a href="https://medium.com/comunidade-empreendedora-manguezal" target="_blank">Blog</a>
                    <a href="#newsletter"onClick={this.navigation.goTo("newsletter", event)}>Newsletter</a>
                </div>
                <LanguageSwitcher />
                </nav>
            </div>
        </div>
      )
  }
}