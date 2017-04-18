import React, {Component} from 'react';
import Menu from './Menu';
import StartupsContainer from './StartupsContainer';
import EventsWrapper from './EventsWrapper';
import NewsletterForm from './NewsletterForm';
import $ from 'jquery';
import '../scss/main.scss';

const Translate = require('react-i18nify').Translate;

export class Home extends Component{
    render(){

        return (
        <div className="mainWrapper">
            <Menu />
            <div className="content content-home" id="home">
                <div className="manguezal-logo"></div>
            </div>

            <div id="welcome" className=" content content-welcome"  id="welcome">
                <div className="container">
                <h2><Translate value="about_title" dangerousHTML={true}/></h2>
                
                <section>
                    <Translate value="about_content_p1" dangerousHTML={true}/>
                </section>
                
                <h2 className="centered-header">
                    <Translate value="about_second_title"/>
                </h2>
                    <Translate value="about_content_p2" dangerousHTML={true}/>
                </div>
            </div>
            <StartupsContainer />
            <div className="content content-eventos" id="events">
                <div className="container">
                <h2><Translate value="events_title"/></h2>
                <Translate value="events_content_p1" dangerousHTML={true}/>
                
                <EventsWrapper />
                </div>
            </div>

            <div className="content content-newsletter" id="newsletter">
                <div className="container">
                
                <h2><Translate value="newsletter_title"/></h2>
                <Translate value="newsletter_content_p1" dangerousHTML={true}/>
            
                <h2><Translate value="newsletter_title_2"/></h2>

                    <NewsletterForm />
                </div>
            </div>

            <div className="sitefooter">
                <div className="container">
                <div className="manguezal-logo">
                    <img src="img/logo-manguezal.svg" alt=""/>
                </div>

                <div>
                    <span><Translate value="footer_stoptalking_startdoing" dangerousHTML={true}/></span>
                </div>

                <div>
                    <span>
                    <a id="mail" href="javascript:">MANGUEZ.AL</a>- Recife/PE - <Translate value="footer_br"/>
                    </span>
                </div>

                <div className="cargo-logo">
                    <img src="img/logo-cargo.svg" alt=""/>
                </div>
                </div>
            </div>
        </div>
        )
    }
    }