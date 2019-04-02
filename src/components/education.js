import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                <p>{this.props.endMonth} {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px', marginBottom: '0px'}}>
                    {this.props.schoolName}</h4>
                    <h6 style={{marginTop: '0px', marginBottom: '0px'}}>{this.props.degree}</h6>
                </Cell>
            </Grid>
        )
    }
}
export default Education;