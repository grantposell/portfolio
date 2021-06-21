import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class TechSkills extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                <p>
                    {this.props.language}:<br/> 
                    {this.props.library}:<br/>
                    {this.props.database}:<br/>
                    {this.props.projecttool}:<br/> 
                    {this.props.prototype}:<br/> 
                    {this.props.framework}:<br/>
                    {this.props.serverside}:<br/> 
                    {this.props.versioncontrol}:<br/>    
                </p>
                </Cell>
                <Cell col={8}>
                <p>
                    {this.props.languages}<br/>
                    {this.props.libraries}<br/>
                    {this.props.databases}<br/>
                    {this.props.projecttools}<br/> 
                    {this.props.prototyping}<br/> 
                    {this.props.frameworks}<br/>
                    {this.props.serversides}<br/> 
                    {this.props.versioncontrols}<br/> 
                </p>
                </Cell>
            </Grid>
        )
    }
}
export default TechSkills;