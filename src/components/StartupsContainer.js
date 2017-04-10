import React, {Component} from 'react';
import StartupImageWrapper from './StartupImageWrapper';
import $ from 'jquery';


export default class StartupsContainer extends Component{
    
    constructor(){
        super();
        this.state = {startups: {startupsIn: [], coworking: [], fossGroups: []}};
    }


    componentWillMount(){
        $.ajax('sources/startups.json')
            .then(this.filterStartups.bind(this))
            .catch(this.onError);
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
        let startupsIn = this.state.startups.startupsIn.map(startup => <StartupImageWrapper data={startup}/>);
        let coworking  = this.state.startups.coworking.map(startup => <StartupImageWrapper data={startup}/>);
        let fossGroups = this.state.startups.fossGroups.map(startup => <StartupImageWrapper data={startup}/>);

        return (
            <div className="content content-startups"  id="startups">
                <div className="container">

                    <div className="gallery gallery-startups-in">
                        <h2>Startups Cadastradas</h2>
                        {startupsIn}
                    </div>

                    <div className="gallery gallery-coworking-spaces">
                        <h2>Coworking spaces</h2>
                        {coworking}
                    </div>

                    <div className="gallery gallery-foss-groups">
                        <h2>FOSS Groups</h2>
                        {fossGroups}
                    </div>
                </div>
            </div>
        )
    }
}