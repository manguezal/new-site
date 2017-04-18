import React, {Component} from 'react';
import StartupImageWrapper from './StartupImageWrapper';
import $ from 'jquery';
import {startups} from '../sources/startups'; 

const Translate = require('react-i18nify').Translate;


export default class StartupsContainer extends Component{
    
    constructor(){
        super();
        this.state = {startups: {startupsIn: [], coworking: [], fossGroups: []}};
        this.filterStartups(startups);
    }
    
    filterStartups(startupsData){

        let startups = startupsData.map((startup, i) => {
            startup.id = i;
            return startup;
        }) || [];

        this.state = {startups: 
                {
                    startupsIn: startups.filter(startup => startup.type == "startups-in"), 
                    coworking:  startups.filter(startup => startup.type == "coworking-spaces"), 
                    fossGroups: startups.filter(startup => startup.type == "foss-groups")
                }
            };
    }


    render(){        

        return (
            <div className="content content-startups"  id="startups">
                <div className="container">

                    <div className="gallery gallery-startups-in">
                        <h2><Translate value="startups_title_startups_registered" dangerousHTML={true}/></h2>
                        {this.state.startups.startupsIn.map(startup => <StartupImageWrapper key={startup.id} data={startup}/>)}
                    </div>

                    <div className="gallery gallery-coworking-spaces">
                        <h2><Translate value="startups_title_coworking_spaces" dangerousHTML={true}/></h2>
                        {this.state.startups.coworking.map(startup => <StartupImageWrapper key={startup.id} data={startup}/>)}
                    </div>

                    <div className="gallery gallery-foss-groups">
                        <h2><Translate value="startups_title_foss_groups" dangerousHTML={true}/></h2>
                        {this.state.startups.fossGroups.map(startup => <StartupImageWrapper key={startup.id} data={startup}/>)}
                    </div>
                </div>
            </div>
        )
    }
}