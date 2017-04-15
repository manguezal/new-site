import React, {Component} from 'react';
import Menu from './Menu';
import StartupsContainer from './StartupsContainer';
import EventsWrapper from './EventsWrapper';
import $ from 'jquery';
import '../scss/main.scss';

const I18n = require('react-i18nify').I18n;
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

                <div id="mc_embed_signup">
                    <form action="//startupweekend.us6.list-manage.com/subscribe/post?u=c5cf01f90d4c0de9181c43d79&amp;id=dd94269eb6" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                        <div id="mc_embed_signup_scroll">
                    
                    <div className="mc-field-group">
                        <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL"/>
                        <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" ><Translate value="newsletter_form_subscribe" dangerousHTML={true}/></button>
                        { /*<input type="submit" value={I18n.t('newsletter_form_subscribe')} name="subscribe" id="mc-embedded-subscribe" className="button"/> */}
                        </div>

                    </div>
                    <div id="mce-responses" className="clear">
                        <div className="response" id="mce-error-response" style={{display:'none'}}></div>
                        <div className="response" id="mce-success-response" style={{display:'none'}}></div>
                    </div>
                        <div style={{position: 'absolute', left: '-5000px'}}>
                        <input type="text" name="b_c5cf01f90d4c0de9181c43d79_dd94269eb6" tabIndex="-1" value=""/>
                        </div>
                        <div className="clear mc-submit">
                        </div>
                    </form>
                </div>

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