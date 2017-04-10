import React, {Component} from 'react';
import $ from 'jquery';


export default class StartupsContainer extends Component{
    
    constructor(){
        super();
        $.ajax('sources/startups')
            .then((result) => {
                console.log(result);
            })
    }

    componentWillMount(){

    }
    render(){
        return (
            <div className="item">
                <a href="http://eventick.com.br/" target="_blank"><img src="/img/manguez_files/eventick.png" alt="Eventick" /></a>
            </div>
        )
    }
}