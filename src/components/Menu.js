import React, {Component} from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import Navigation from './Navigation';
import $ from 'jquery';

const Translate = require('react-i18nify').Translate;

export default class Menu extends Component{

  constructor(){
    super();

    let self = this;
    this.state = {currentPage: '#home', isOpen: 0};
    this.bindSidebarCallback();

    $("body").on("click", (e) =>{

      let elements = ['nav-item', 'menu-toggler', 'language-switcher', "lang", "toggler"];
      let isClicked =  elements.reduce((counter, element) => counter + e.target.className.indexOf(element), elements.length);

      if(isClicked == 0)
        this.setState({isOpen: 0}); 
    });
  }

  handleClick(e){
    e.preventDefault();
    var section = e.target.getAttribute('href') || e.target.parentNode.getAttribute('href');
    Navigation.goTo(section);
  }

  toggleMenu(e){
    e.preventDefault();
     this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  bindSidebarCallback(){ 

    let self = this;

    $(window).resize(() => {
      if($(this).width() <= 768)
        self.setState((previousState) => ({isOpen: 0}));
    });
  }

  render(){
    return (
        <div className="menu">
            <div className="container ">
                <nav className={this.state.isOpen > 0 ? "nav-item is-open" : "nav-item"}> 
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