import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Summary extends Component {
    render() {
        return(
            <Grid>
                <Cell col={12}>
                <p>{this.props.mysummary}</p>
                </Cell>
            </Grid>
            )
        }
    }
    export default Summary;