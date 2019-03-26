import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startMonth} {this.props.startYear} - {this.props.endMonth} {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{ marginTop: '0px' }}>{this.props.jobName}</h4>
                    <h6>{this.props.jobPosition1}</h6>
                    <h6>{this.props.jobPosition2}</h6>
                    <p>{this.props.jobDescription1}<br/>
                        {this.props.jobDescription2}<br/></p>
                </Cell>
            </Grid>
        )
    }
}
export default Experience;