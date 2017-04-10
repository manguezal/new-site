import React, {Component} from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import Navigation from './Navigation';

export default class Menu extends Component{

  constructor(){
      super();
      this.state = {currentPage: '#home', isOpen: false};
      this.navigation = new Navigation();
  }

  handleClick(e){
    e.preventDefault();
    var section = (e.target.getAttribute('href'));
  }

  toggleMenu(e){
      e.preventDefault();
      this.setState(prevState => ({
        isOpen: !prevState.isOpen
      }));
  }
  
  render(){
    return (
        <div className="menu">
            <div className="container">
                <nav>
                <a href="#home" className="manguezal-logo-small"> onClick={this.handleClick}Manguez.al</a>
                <a href="#" className="menu-toggler" onClick={this.toggleMenu}>Menu</a>
                
                <div className="menu-group">
                    <a href="#welcome" onClick={this.handleClick}>Sobre</a>
                    <a href="#startups" onClick={this.handleClick}>Startups</a>
                    <a href="events.html">Eventos</a>
                    <a href="https://medium.com/comunidade-empreendedora-manguezal" target="_blank">Blog</a>
                    <a href="#newsletter" onClick={this.handleClick}>Newsletter</a>
                </div>
                <LanguageSwitcher />
                </nav>
            </div>
        </div>
      )
  }
}