import React, { Component } from 'react';
import Typed from 'react-typed';
import { Grid, Cell } from 'react-mdl';



class LandingPage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src={require('../images/profile.jpeg')}
                            alt="avatar"
                            className="avatar-img" />
                        <div className="banner-text">
                            <h1><Typed strings={['Product Developer','Full Stack Web Developer','Product Management']} typeSpeed={100} backSpeed={100} smartBackspace = {true} loop = {true}>
                            </Typed></h1>
                            <hr />
                            <br/>
                            <p>HTML/CSS | JavaScript | React | NodeJS | MongoDB | MySQL | Firebase</p>
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/grantposell/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/* Github */}
                                <a href="https://github.com/grantposell" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default LandingPage;