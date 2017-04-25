import React, {Component} from 'react';


export default class StartupImageWrapper extends Component{
    render(){
        return (
            <div className="item">
                <a href={this.props.data.link} target="_blank">
                <img src={this.props.data.src} alt={this.props.data.alt_br} style={{width:this.props.data.width + "px" || ""}} /></a>
            </div>
        )
    }
}