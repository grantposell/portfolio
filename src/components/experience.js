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
                    <h4 style={{ marginTop: '0px', marginBottom: "0px", }}>{this.props.jobName}</h4>
                    <h6 style={{ marginTop: "0px",marginBottom: "0px", }}>{this.props.jobPosition1} ({this.props.jobPosition1StartMonthDate} {this.props.jobPosition1StartYearDate} - {this.props.jobPosition1End})</h6>
                        <p>
                        {this.props.jobDescriptionA1}<br />
                            {this.props.jobDescriptionA2}
                        <br />
                        {this.props.jobDescriptionA3}
                        <br />

                        </p>
                        <h6 style={{ marginTop: "0px",marginBottom: "0px", }}>{this.props.jobPosition2} ({this.props.jobPosition2StartMonthDate} {this.props.jobPosition2StartYearDate} - {this.props.jobPosition2End})</h6>
                    <p>{this.props.jobDescription1}<br />
                        {this.props.jobDescription2}<br /></p>
                </Cell>
            </Grid>
        )
    }
}
export default Experience;