import React, {Component} from 'react';
import StartupImageWrapper from './StartupImageWrapper';
import $ from 'jquery';

const Translate = require('react-i18nify').Translate;


export default class StartupsContainer extends Component{
    
    constructor(){
        super();
        this.state = {startups: {startupsIn: [], coworking: [], fossGroups: []}};
    }


    componentWillMount(){
        $.ajax('sources/startups.json')
            .then(this.filterStartups.bind(this))
            .catch(this.onError.bind(this));
    }


    onError(e){
        console.log('houve um erro buscando startups', e);
    }
    
    filterStartups(startupsData){

        let startups = startupsData.startups.map((startup, i) => {
            startup.id = i;
            return startup;
        }) || [];

        let startupsIn  = startups.filter(startup => startup.type == "startups-in");
        let coworking   = startups.filter(startup => startup.type == "coworking-spaces");
        let fossGroups  = startups.filter(startup => startup.type == "foss-groups");

        this.setState(() => ({startups: {startupsIn, coworking, fossGroups}}));

    }


    render(){        
        let startupsIn = this.state.startups.startupsIn.map(startup => <StartupImageWrapper key={startup.id} data={startup}/>);
        let coworking  = this.state.startups.coworking.map(startup => <StartupImageWrapper key={startup.id} data={startup}/>);
        let fossGroups = this.state.startups.fossGroups.map(startup => <StartupImageWrapper key={startup.id} data={startup}/>);

        return (
            <div className="content content-startups"  id="startups">
                <div className="container">

                    <div className="gallery gallery-startups-in">
                        <h2><Translate value="startups_title_startups_registered" dangerousHTML={true}/></h2>
                        {startupsIn}
                    </div>

                    <div className="gallery gallery-coworking-spaces">
                        <h2><Translate value="startups_title_coworking_spaces" dangerousHTML={true}/></h2>
                        {coworking}
                    </div>

                    <div className="gallery gallery-foss-groups">
                        <h2><Translate value="startups_title_foss_groups" dangerousHTML={true}/></h2>
                        {fossGroups}
                    </div>
                </div>
            </div>
        )
    }
}