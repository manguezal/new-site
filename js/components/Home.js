import React, {Component} from 'react';
import Menu from './Menu';
import StartupImageWrapper from './StartupImageWrapper';
import EventsWrapper from './EventsWrapper';

export default class Home extends Component{
    render(){
        return (
    <div className="mainWrapper">
        <Menu />
        <div className="content content-home"  id="content-home">
            <div className="manguezal-logo"></div>
        </div>

        <div id="welcome" className=" content content-welcome"  id="content-welcome">
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

        <div className="content content-startups"  id="content-startups">
            <div className="container">
            <h2>Startups Cadastradas</h2>
            <div className="gallery gallery-startups-in">
                <StartupImageWrapper />
                <div className="item">
                <a href="http://sequaz.com/" target="_blank"><img src="/img/manguez_files/sequaz.png" alt="" /></a>
                </div>
                <div className="item">
                <a href="http://conecta.la/" target="_blank"><img src="/img/manguez_files/conecta.png"  alt="" /></a>
                </div>
                <div className="item">
                <a href="http://www.surfguru.com.br/" target="_blank"><img src="/img/manguez_files/surfguru.png"  alt="" /></a>
                </div>
                <div className="item">
                <a href="http://www.bidcorp.com.br/" target="_blank"><img src="/img/manguez_files/bidcorp.png"  alt="" /></a>
                </div>
                <div className="item">
                <a href="http://www.mobiclub.com.br/" target="_blank"><img src="/img/manguez_files/mobiclub.png"  alt="" /></a>
                </div>
                <div className="item">
                <a href="http://www.pycursos.com/" target="_blank"><img src="/img/manguez_files/pycursos.png"  alt="" /></a>
                </div>
                <div className="item">
                <a href="http://www.inlocomedia.com/" target="_blank"><img src="/img/manguez_files/in_loco_media.png"  alt="" /></a>
                </div>
                <div className="item">
                <a href="http://guava.com.br/" target="_blank"><img src="/img/manguez_files/guava.png"  alt="" /></a>
                </div>
                <div className="item">
                <a href="http://www.estuarioti.com.br/" target="_blank"><img src="/img/manguez_files/estuario.png"  alt="" /></a>
                </div>
                <div className="item">
                <a href="http://www.idealizza.com.br/" target="_blank"><img src="/img/manguez_files/idealizza.png"  alt="" /></a>
                </div>
                <div className="item">
                <a href="http://www.duit.cc/" target="_blank"><img src="/img/manguez_files/duit.png" alt="duit" /></a>
                </div>
                <div className="item">
                <a href="http://www.say2me.com.br/" target="_blank"><img src="/img/manguez_files/say2me.png" alt="" /></a>
                </div>
                <div className="item">
                <a href="http://www.mobipass.com.br/" target="_blank"><img src="/img/manguez_files/mobipass.png" alt="" /></a>
                </div>
                <div className="item">
                <a href="http://www.robolivre.org/" target="_blank"><img src="/img/manguez_files/robolivre.png" alt="" /></a>
                </div>
                <div className="item">
                <a href="http://prodeaf.net/" target="_blank"><img src="/img/manguez_files/prodeaf.png" alt="" /></a>
                </div>
                <div className="item">
                <a href="http://www.coeus.com.br/" target="_blank"><img src="/img/manguez_files/coeus.png" alt="" /></a>
                </div>
                <div className="item">
                <a href="http://www.30ide.as/" target="_blank"><img src="/img/manguez_files/30ideas.png" alt="" /></a>
                </div>
                <div className="item">
                <a href="http://www.vinta.com.br" target="_blank"><img src="/img/manguez_files/vintasoftware.png" alt="" /></a>
                </div>
                <div className="item">
                <a href="http://www.labcodes.com.br" target="_blank"><img src="/img/manguez_files/labcodes.png" alt="" /></a>
                </div>
                <div className="item">
                <a href="http://colab.re" target="_blank"><img src="/img/manguez_files/colab.png" alt="" /></a>
                </div>
                <div className="item">
                <a href="http://vamoz.com.br" target="_blank"><img src="/img/manguez_files/vamoz.png" alt="Vamoz - Sua agenda completa" /></a>
                </div>
                <div className="item">
                <a href="http://www.minutofeedback.com.br" target="_blank"><img src="/img/manguez_files/minuto_feedback.png" alt="Minuto Feedback" /></a>
                </div>
                <div className="item">
                <a href="https://siro.io" target="_blank" title="SIRO - Motor de Reservas + Channel Manager"><img src="/img/manguez_files/siro.png" alt="SIRO" /></a>
                </div>
                <div className="item">
                <a href="http://avisa.la/" target="_blank" title="Avisa.lá - Seu site caiu? Seja o primeiro a saber!">
                    <img src="/img/manguez_files/avisala.png" alt="Avisa.lá - Seu site caiu? Seja o primeiro a saber!"/>
                </a>
                </div>
                <div className="item">
                <a href="http://eventplatz.com" target="_blank"><img src="/img/manguez_files/eventplatz.png" alt="EventPlatz - Busca e oferta de espaços para todo tipo de evento." /></a>
                </div>
                <div className="item">
                <a href="https://www.faturasimples.com.br" target="_blank"><img src="/img/manguez_files/faturasimples.png" alt="Fatura Simples - Fatura Simples é uma aplicação web para simplificar a gestão e automação de Cobranças e Faturas (NFS-e)." /></a>
                </div>
                <div className="item">
                <a href="http://www.even3.com.br" target="_blank"><img src="/img/manguez_files/even3.png" alt="Even3 - Organização de git  acadêmicos simples e inteligente." /></a>
                </div>
                <div className="item">
                <a href="http://www.howtool.com.br" target="_blank"><img src="/img/manguez_files/howtool.png" alt="" /></a>
                </div>
                <div className="item">
                <a href="http://geteloquent.com" target="_blank"><img src="/img/manguez_files/eloquent.png" alt="Eloquent Studio" /></a>
                </div>
                <div className="item">
                <a href="http://teenow.com.br" target="_blank"><img src="/img/manguez_files/teenow.png" alt="TeeNOW" /></a>
                </div>
                <div className="item">
                <a href="http://www.mesainc.com.br" target="_blank"><img src="/img/manguez_files/mesainc.png" alt="Mesa Inc." /></a>
                </div>
                <div className="item">
                <a href="http://www.lotebox.co" target="_blank"><img src="/img/manguez_files/lotebox.png" alt="Lotebox" /></a>
                </div>
                <div className="item">
                <a href="http://www.coteaqui.com.br" target="_blank"><img src="/img/manguez_files/coteaqui.png" alt="coteaqui" /></a>
                </div>
                <div className="item">
                <a href="http://www.elpescador.com.br" target="_blank">
                    <img src="/img/manguez_files/elpescador.png" alt="El Pescador - Phishing Educativo"/>
                </a>
                </div>
                <div className="item">
                <a href="http://www.babylife.me" target="_blank">
                    <img src="/img/manguez_files/babylifeme.png" alt="Babylife.me - Diário do Bebê Online"/>
                </a>
                </div>
                <div className="item">
                <a href="http://www.findup.com.br" target="_blank">
                    <img src="/img/manguez_files/findup.png" alt="FindUP - Técnicos de Informática a um clique."/>
                </a>
                </div>
                <div className="item">
                <a href="http://concretid.com" target="_blank">
                    <img src="/img/manguez_files/concretid.png" alt="ConcretID"/>
                </a>
                </div>
                <div className="item">
                <a href="http://www.geekdoctor.com.br" target="_blank">
                    <img src="/img/manguez_files/geekdoctor.png" alt="GeekDoctor - Educação Médica"/>
                </a>
                </div>
                <div className="item">
                <a href="http://www.octorb.com" target="_blank">
                    <img src="/img/manguez_files/octorb.png" alt="Octorb"/>
                </a>
                </div>
                <div className="item">
                <a href="http://www.comunikapp.com" target="_blank">
                    <img src="/img/manguez_files/comunika.png" alt="Comunika Interação Educacional"/>
                </a>
                </div>
                <div className="item">
                <a href="http://jimbo.com.br" target="_blank">
                    <img src="/img/manguez_files/jimbo.png" alt="Jimbo - Sua nova maneira de entrevistar candidatos"/>
                </a>
                </div>
                <div className="item">
                <a href="http://www.fastsolucoes.com.br" target="_blank">
                    <img src="/img/manguez_files/fast.png" alt="FAST - Soluções Tecnológicas"/>
                </a>
                </div>
                <div className="item">
                <a href="http://www.flowup.me" target="_blank">
                    <img src="/img/manguez_files/flowup.png" alt="Flowup Gestão"/>
                </a>
                </div>
                <div className="item">
                <a href="http://www.mksim.com.br" target="_blank">
                    <img src="/img/manguez_files/mksim.png" alt="MKSim"/>
                </a>
                </div>
                <div className="item">
                <a href="http://99gas.com/?utm_source=manguezal-site&utm_medium=logo&utm_campaign=logo" target="_blank">
                    <img src="/img/manguez_files/99gas.png" alt="99gás"/>
                </a>
                </div>
                <div className="item">
                <a href="http://pubclub.com.br/?utm_source=manguezal-site&utm_medium=logo&utm_campaign=logo" target="_blank">
                    <img src="/img/manguez_files/pubclub.png" alt="99gás"/>
                </a>
                </div>
                <div className="item">
                <a href="http://www.buscarpecas.com.br" target="_blank">
                    <img src="/img/manguez_files/buscarpecas.png" alt="Buscar Peças - Achar sua peça nunca foi tão fácil!"/>
                </a>
                </div>
                <div className="item">
                <a href="http://www.roadmaps.com.br" target="_blank">
                    <img src="/img/manguez_files/roadmaps.png" alt="Roadmaps - Desenvolvimento de apps web/mobile"/>
                </a>
                </div>
                <div className="item">
                <a href="http://www.wecarecorp.com.br" target="_blank">
                    <img src="/img/manguez_files/wecare.png" alt="Wecare - Torne seus funcionários mais ativos e motivados"/>
                </a>
                </div>
                <div className="item">
                <a href="http://www.alfaia.co" target="_blank">
                    <img src="/img/manguez_files/alfaia.png" alt="Alfaia - Inovação, tecnologia e estratégia para sua empresa"/>
                </a>
                </div>
                <div className="item">
                <a href="http://www.bananadigital.xyz" target="_blank">
                    <img src="/img/manguez_files/banana.png" alt="Banana Digital - Aprenda a Inovar"/>
                </a>
                </div>
                <div className="item">
                <a href="http://www.interage.in/" target="_blank">
                    <img src="/img/manguez_files/interage.png" alt="Interage - agile software house"/>
                </a>
                </div>
                <div className="item">
                <a href="http://www.acqio.com.br/" target="_blank">
                    <img src="/img/manguez_files/acqio.png" alt="Acqio - Pagamento do seu jeito"/>
                </a>
                </div>
                <div className="item">
                <a href="http://www.reduxtel.com.br/" target="_blank">
                    <img src="/img/manguez_files/redux.png" alt="Redux"/>
                </a>
                </div>
                <div className="item">
                <a href="http://kotoba.com.br/" target="_blank">
                    <img src="/img/manguez_files/kotoba.com.br-logo.png" alt="Kotobá - Japonês Simples"/>
                </a>
                </div>
                <div className="item">
                <a href="http://mobixtec.com/" target="_blank">
                <img src="/img/manguez_files/mobix.png" alt="" /></a>
                </div>
                
                <div className="item">
                <a href="http://peekfy.com/" target="_blank">
                    <img src="/img/manguez_files/peekfy.png" alt="Peekfy -  Descubra e guarde suas roupas favoritas em um só lugar"/>
                </a>
                </div>
            </div>
            <div className="gallery gallery-coworking-spaces">
                <h2>Coworking Spaces</h2>
                <div className="item">
                <a href="http://recife.impacthub.net/" target="_blank">
                <img src="/img/manguez_files/impact-hub-recife.png" alt="" /></a>
                </div>
                <div className="item">
                <a href="https://www.facebook.com/NosCoworkingRecife/" target="_blank">
                <img src="/img/manguez_files/nos-coworking.png" alt="" /></a>
                </div>
            </div>
            <div className="gallery gallery-foss-groups">
                <h2>FOSS Groups</h2>
                <div className="item">
                <a href="http://pycon.pug.pe/" target="_blank"><img className="pug" src="/img/manguez_files/pugpe.png" alt="" /></a>
                </div>
                <div className="item">
                <a href="http://frevoonrails.com.br" target="_blank" title="We are a team of talented entrepreneurs, designers and hackers prepared to turn your ideas into eloquent products.">
                <img className="Frevo on Rails" src="/img/manguez_files/frevo-on-rails-manguezal.png" alt="" /></a>
                </div>
                <div className="item">
                <a href="http://openredu.cin.ufpe.br/" target="_blank"><img src="/img/manguez_files/openredu.png"  alt="" /></a>
                </div>
            </div>
            </div>
        </div>

        <div className="content content-eventos">
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

        <div className="content content-newsletter" id="content-newsletter">
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