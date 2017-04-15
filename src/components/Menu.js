import React, {Component} from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import Navigation from './Navigation';
import $ from 'jquery';

const Translate = require('react-i18nify').Translate;

export default class Menu extends Component{

  constructor(){
      super();
      let self = this;
      this.state = {currentPage: '#home', isOpen: false};
      this.bindSidebarCallback();
  }

  handleClick(e){
    e.preventDefault();
    console.log(e.target.parentNode, e.target.getAttribute('href'));
    var section = e.target.getAttribute('href') || e.target.parentNode.getAttribute('href');
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
                <a href="#" className="menu-toggler" onClick={this.toggleMenu.bind(this)}>&nbsp;</a>
                
                <div className="menu-group">
                    <a href="#welcome" onClick={this.handleClick.bind(this)}><Translate value="nav_about"/></a>
                    <a href="#startups" onClick={this.handleClick.bind(this)}><Translate value="nav_startups"/></a>
                    <a href="#events" onClick={this.handleClick.bind(this)}><Translate value="nav_events"/></a>
                    <a href="#newsletter" onClick={this.handleClick.bind(this)}><Translate value="nav_newsletter"/></a>
                    <a href="https://medium.com/comunidade-empreendedora-manguezal" target="_blank"><Translate value="nav_blog"/></a>
                </div>

                <LanguageSwitcher />
                </nav>
            </div>
        </div>
      )
  }
}