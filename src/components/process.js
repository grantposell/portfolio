import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Process extends Component {
    render() {
        return (
            <Grid>
                <Cell col={8}><h3>The End User</h3></Cell>
                <Cell col={4}></Cell>
                <Cell col={8}>
                    <p>
                        Building a Web Application or Product starts with knowing the end user. An end user can be a consumer, client, or internal employee.
                        Any stakeholder has an idea of what they want in an end product 
                    </p>
                </Cell>
                <Cell col={4}></Cell>
                <Cell col={8}><h3></h3></Cell>
                <Cell col={4}></Cell>
            </Grid>
        )
    }
}
export default Process;