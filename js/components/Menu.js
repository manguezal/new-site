import React, {Component} from 'react';
import LanguageSwitcher from './LanguageSwitcher';


export default class Menu extends Component{
  
  render(){
    return (
        <div className="menu">
            <div className="container">
                <nav>
                <a href="/" className="manguezal-logo-small">Manguez.al</a>
                <a href="#" className="menu-toggler">Menu</a>
                
                <div className="menu-group">
                    <a href="#welcome">Sobre</a>
                    <a href="#startups">Startups</a>
                    <a href="events.html">Eventos</a>
                    <a href="https://medium.com/comunidade-empreendedora-manguezal" target="_blank">Blog</a>
                    <a href="#newsletter">Newsletter</a>
                </div>
                <LanguageSwitcher />
                </nav>
            </div>
        </div>
      )
  }
}