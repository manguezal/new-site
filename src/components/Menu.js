import React, {Component} from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import Navigation from './Navigation';
import $ from 'jquery';

export default class Menu extends Component{

  constructor(){
      super();
      let self = this;
      this.state = {currentPage: '#home', isOpen: false};
      this.bindSidebarCallback();
  }

  handleClick(e){
    e.preventDefault();
    var section = (e.target.getAttribute('href'));
    Navigation.goTo(section);
    this.setState(prevState => ({currentPage: section, isOpen: false }));
  }

  toggleMenu(e){
      e.preventDefault();
      this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  bindSidebarCallback(){
      let self = this;

      $(window).resize(function(){
          if($(this).width() <= 768)
            self.setState((previousState) => ({isOpen: false}));
      });
  }

  render(){
    return (
        <div className="menu">
            <div className="container ">
                <nav className={this.state.isOpen ? "is-open" : ""}> 
                <a href="#home" className="manguezal-logo-small" onClick={this.handleClick.bind(this)}> Manguez.al</a>
                <a href="#" className="menu-toggler" onClick={this.toggleMenu.bind(this)}>Menu</a>
                
                <div className="menu-group">
                    <a href="#welcome" onClick={this.handleClick.bind(this)}>Sobre</a>
                    <a href="#startups" onClick={this.handleClick.bind(this)}>Startups</a>
                    <a href="#eventos" onClick={this.handleClick.bind(this)}>Eventos</a>
                    <a href="#newsletter" onClick={this.handleClick.bind(this)}>Newsletter</a>
                    <a href="https://medium.com/comunidade-empreendedora-manguezal" target="_blank">Blog</a>
                </div>

                <LanguageSwitcher />
                </nav>
            </div>
        </div>
      )
  }
}