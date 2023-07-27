import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class CS extends Component {
    render() {
        return (
            <Grid className="product-management">
                <Cell col={12}>
                    <h1 style={{ textAlign: 'center', fontStyle: 'italic' }}>Customer Success Methodology</h1>
                </Cell>
                </Grid>
            )
    }
}
export default CS;