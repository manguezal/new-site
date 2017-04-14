import React, {Component} from 'react';
import Menu from './Menu';
import StartupsContainer from './StartupsContainer';
import EventsWrapper from './EventsWrapper';
import $ from 'jquery';
import T from 'i18n-react';

import '../scss/main.scss';


export class Home extends Component{

    componentWillMount(){
        
    }


    render(){
        return (
    <div className="mainWrapper">
        <Menu />
        <div className="content content-home"  id="home">
            <div className="manguezal-logo"></div>
        </div>

        <div id="welcome" className=" content content-welcome"  id="welcome">
            <div className="container">
            <h2>About</h2>
            
            <p>
                MANGUEZAL é uma comunidade de startups do Recife para apoiar práticas 
                colaborativas e aprendizagem de tecnologia, design e empreendedorismo 
                em todo o ecossistema de inicialização.
            </p>

            <p>
                Nossos principais objetivos são: (1) promover discussões de alto nível, 
                eventos e uma programação educacional aprendendo por fazer para atender 
                às necessidades de empreendedores de alto potencial e avançar no 
                ecossistema de inicialização em Recife; (2) dar visibilidade aos nossos 
                startups iniciais apresentando-os a investidores anjos e fundos de capital
                de risco e (3) estimular o intercâmbio entre as startups do Recife e 
                outras startups ao redor do mundo.
            </p>

            <h2 className="centered-header">
                ❤ ORGULHOSAMENTE FEITO EM RECIFE ❤
            </h2>

            <p>
                Recife tem sido historicamente um berço para muito bons programadores, 
                designers, artistas e empresários. Nos últimos 20 anos, enviamos muitos 
                engenheiros para empresas como IBM e Microsoft e, mais recentemente, para 
                o Google e Facebook. Apesar de tudo isso famoso, ainda não fizemos o nosso 
                capítulo na história da Internet. Perdemos boas fases de internet e 
                simplesmente assistimos a empresas como aquelas acima para nascerem e 
                crescerem. Recife definitivamente precisa fazer mais internet. Excitante, 
                Recife está finalmente fazendo algumas. Não só há um monte de novos 
                empresários que vêm com educação de fundo diferente da tecnologia, mas também 
                novos caras tecnológicos estão muito mais preparados e empreendedorismo é 
                muitas vezes a sua primeira escolha.
            </p>
            <p>
                Se você tem uma Startup e seu produto ou serviço é majoritariamente codificado 
                em Recife, por favor preencha <a href="#">este formulário</a> e vamos 
                orgulhosamente mostrar-nos para as pessoas em todos os lugares saberem do que 
                é feita a internet em Recife. As startups do Recife e seus empreendedores 
                precisam ser conhecidos!
            </p>
            </div>
        </div>
        <StartupsContainer />
        <div className="content content-eventos" id="eventos">
            <div className="container">
            <h2>Eventos</h2>

            <p>
                Esta é a lista de eventos acontecendo em Recife. 
                Os eventos do Manguezal são organizados pela comunidade. 
            </p>
            <p>
                Adicione seu evento ao calendário juntando-se ao nosso Slack e 
                divulgue-o no canal #events.
            </p>
            
            <EventsWrapper />
            </div>
        </div>

        <div className="content content-newsletter" id="newsletter">
            <div className="container">
            <h2>Fique por dentro</h2>
            <p>
                MANGUEZAL é uma comunidade aberta, se você quiser participar, envie-nos um 
                pedido de pull no nosso repositório github: https://github.com/manguezal/manguezal.github.com
            </p>

            <h2>Newsletter</h2>

            <div id="mc_embed_signup">
                <form action="//startupweekend.us6.list-manage.com/subscribe/post?u=c5cf01f90d4c0de9181c43d79&amp;id=dd94269eb6" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                    <div id="mc_embed_signup_scroll">
                
                <div className="mc-field-group">
                    <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL"/>
                    <input type="submit" value="Assinar" name="subscribe" id="mc-embedded-subscribe" className="button"/></div>

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
                <span>PARE DE FALAR.<br/>COMECE A FAZER</span>
            </div>

            <div>
                <span>
                <a id="mail" href="javascript:">MANGUEZ.AL</a>- Recife/PE - BRAZIL
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