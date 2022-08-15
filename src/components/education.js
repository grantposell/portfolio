import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
    render() {
        return(
            <Grid>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px', marginBottom: '0px'}}>{this.props.degree} - {this.props.schoolName}</h4>
                </Cell>
                <Cell col={4}>
                {/* <p>{this.props.endMonth} {this.props.endYear}</p> */}
                </Cell>
            </Grid>
        )
    }
}
export default Education;