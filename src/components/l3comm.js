import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class L3Comm extends Component {
    render() {
        return (
            <Grid>
                <Cell col={8}>
                    <h4 style={{ marginTop: '0px', marginBottom: "0px" }}>{this.props.jobName}</h4>
                    <h6 style={{ marginTop: "0px" }}>{this.props.jobPosition1}<br />
                    </h6>
                    <p>{this.props.jobDescription1}<br />
                        {this.props.jobDescription2}<br />
                        {this.props.jobDescription3}<br />
                        {this.props.jobDescription4}<br />
                        {this.props.jobDescription5}<br />
                    </p>
                </Cell>
                <Cell col={4}>
                    <h4 style={{ marginTop: '0px', marginBottom: "0px", }}>{this.props.startMonth} {this.props.startYear} - {this.props.endMonth} {this.props.endYear}</h4>
                </Cell>
            </Grid>
        )
    }
}
export default L3Comm;