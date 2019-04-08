import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';

class ResumeUpload extends Component {
    render() {
        return(
            <Grid>
                <Cell col={10}>
                </Cell>
                <Cell col={2}>
                <a href='./assets/images/Resume 2019.docx' download>
                <Button raised ripple colored style={{backgroundColor: '#003973'}}>Download
                </Button> </a>
                </Cell>
            </Grid>
            )
        }
    }
    export default ResumeUpload;