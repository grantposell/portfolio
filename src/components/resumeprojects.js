import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class ResumeProjects extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                </Cell>
                <Cell col={8}>
                <h4 style={{ marginTop: '0px', marginBottom: "0px" }}>{this.props.projectName}</h4>
                <p>
                    {this.props.languages}<br/><br/>  
                </p>
                </Cell>
            </Grid>
        )
    }
}
export default ResumeProjects;