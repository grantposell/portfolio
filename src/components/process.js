import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Process extends Component {
    render() {
        return (
            <Grid>
                <Cell col={8}>
                    <h2>Product Management Process</h2>
                    <h4>Inception</h4>
                    <p>Great ideas come from a lot of different experiences. Colleagues in the work place have an idea for a product, President of the Business invisions a strategic need, or an improvement is born out of pure neceessity.</p>
                    <p>Whether the idea is an improvement on an existing product or the birth of a new realization, one must do the proper due dilligence to understand what is needed to produce the most ideal outcome.</p>
                    <h4>Requirements Gathering</h4>
                    <p></p>
                    
                    <h4>Research</h4>


                </Cell>
                <Cell col={4}></Cell>
                <Cell col={8}>
                    <p>
                        Building a Web Application or Product starts with knowing the end user. An end user can be a consumer, client, or internal employee.
                        Any stakeholder has an idea of what they want in an end product
                    </p>
                </Cell>
                <Cell col={4}></Cell>
                <Cell col={8}></Cell>
                <Cell col={4}></Cell>
            </Grid>
        )
    }
}
export default Process;