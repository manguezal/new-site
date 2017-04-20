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
      
      $("body").on("click", (e)=>{

        debugger;
        let target = e.target.className;
        let sidebarStatus = target.indexOf("nav-item") > -1 || target.indexOf("menu-toggler") || target.indexOf("language-switcher") > -1; // se apertar em nav-item ou menu-togler, pede pra abrir 
        
        self.setState(prevState => ({isOpen: sidebarStatus})); // se pedir pra abrir

        console.log(target, sidebarStatus, this.state.isOpen);
       //se o target for .menu-togler ou nav-wrapper
       // - isOpened = true
       //else
       // isOpened = false

    });
  }

  hideMenuAndGo(e){
    e.stopPropagation();
    e.preventDefault();
    var section = e.target.getAttribute('href') || e.target.parentNode.getAttribute('href');
    Navigation.goTo(section);
    this.setState(prevState => ({ isOpen: false }));
  }

  render(){
    return (
        <div className="menu">
            <div className="container">
                <nav className={this.state.isOpen ? "nav-item is-open" : "nav-item"}> 
                <a href="#home" className="manguezal-logo-small" onClick={this.hideMenuAndGo.bind(this)}> Manguez.al</a>
                <a href="#menu" className="menu-toggler">&nbsp;</a>
                
                <div className="menu-group">
                    <a href="#welcome" onClick={this.hideMenuAndGo.bind(this)}><Translate value="nav_about"/></a>
                    <a href="#startups" onClick={this.hideMenuAndGo.bind(this)}><Translate value="nav_startups"/></a>
                    <a href="#events" onClick={this.hideMenuAndGo.bind(this)}><Translate value="nav_events"/></a>
                    <a href="#newsletter" onClick={this.hideMenuAndGo.bind(this)}><Translate value="nav_newsletter"/></a>
                    <a href="https://medium.com/comunidade-empreendedora-manguezal" target="_blank"><Translate value="nav_blog"/></a>
                </div>

                <LanguageSwitcher />
                </nav>
            </div>
        </div>
      )
  }
}