import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class ResumeProjects extends Component {
    render() {
        return (
            <Grid>
                <Cell col={8}>
                <h4 style={{ marginTop: '0px', marginBottom: "0px" }}>{this.props.projectName}</h4>
                <p>
                    {this.props.projectDescription1}<br/>
                    {this.props.projectDescription2}<br/>  
                </p>
                </Cell>
            </Grid>
        )
    }
}
export default ResumeProjects;