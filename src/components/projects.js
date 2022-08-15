import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategorgies() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    <div className="project-card">
                        {/* Project 1 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://download.logo.wine/logo/Fortinet/Fortinet-Logo.wine.png) center / cover' }}>Marketing EDR MSSP</CardTitle>
                            <CardText style={{ textAlign: 'justify' }}>
                                Layer 3 Communications is doing a marketing push with Fortinet to provide a product offering trial. This product was built using HTML, CSS, and JavaScript.
                            </CardText>
                            <CardActions border>
                                <a href="https://github.com/layer-3-communications/marketing-api">
                                    <Button colored>GitHub</Button>
                                </a>
                                <a href="https://marketing.layer3com.com/edrmssp.html">
                                    <Button colored>LiveDemo</Button>
                                </a>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                    <div className="project-card">
                        {/* Project 1 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://www.mgtconsulting.com/wp-content/uploads/2022/06/MicrosoftTeams-image-16.jpg) center / cover' }}>Managed Services Sales</CardTitle>
                            <CardText style={{ textAlign: 'justify' }}>
                                Working in the Managed Services department of Layer 3 Communications, my manager allocated me with the task to update Managed Services SKUs in Salesforce, build out onboarding and offboarding workflows, and build a presales website to inform Account Managers across the whole company. The website was prototyped with Balsamiq and built with HTML, CSS, JavaScript, Node.js, ReactJS, and Microsoft Azure. 
                            </CardText>
                            <CardActions border>
                                <a href="https://github.com/layer-3-communications/as-presales">
                                    <Button colored>GitHub</Button>
                                </a>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                    <div className="project-card">
                        {/* Project 3 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://media-exp1.licdn.com/dms/image/C4E0BAQFvb2Fm4Aoneg/company-logo_200_200/0/1546978340683?e=1666828800&v=beta&t=X6h0ibJxyxenrNv-SnrXmn0KeuTcY6dlYkeTK7O-Eo8) center / cover' }}>E3 Documentation</CardTitle>
                            <CardText style={{ textAlign: 'justify' }}>
                                Layer 3 Communications' Managed Services sells a product called Endpoint Experience Engine (E3). This product provides customers with an objective portral of their internet status by allowing customers to setup website tests that will be pinged by Raspberry PI 4 mini computers. While creating documentation for all of the Layer 3 Communications Github repositories, the E3 web interface required Documentation which I implemented and created training for customers. 
                            </CardText>
                            <CardActions border>
                                <a href="https://github.com/layer-3-communications/stormcrow">
                                    <Button colored>GitHub</Button>
                                </a>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    <div className="project-card">
                        {/* Project 1 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://www.vectorlogo.zone/logos/monday/monday-ar21.png) center / cover' }}>Monday Implementation</CardTitle>
                            <CardText style={{ textAlign: 'justify' }}>
                                Layer 3 Communications had a need for a Project Management tool. Given my SME experience in Smartsheet, MS Project, and Monday.com, I was chosen as the Solutions Architect to setup the whole platform for over 140+ employees. This required stakeholder meetings with Managers, training sessions for all employees, and getting Keyman buyin from Josh Bailey, COO of Layer 3 Communications.
                            </CardText>
                            <CardActions border>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                    <div className="project-card">
                        {/* Project 2 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://embed-ssl.wistia.com/deliveries/7acf28bc4779dc45d3d37db44d2a18e0.webp?image_crop_resized=1280x720) center / cover' }}>Avionte Implementation</CardTitle>
                            <CardText style={{ textAlign: 'justify' }}>
                                McCorvey Companies primarily hired me as a Product Developer to build out the hiring workflow processes for their construction and duct businesses. After reviewing Recruiter workflows and the Smartsheet Applicant Tracking Document, I lobbyed for an ATS SaaS. Given the approval, I architected the whole solution for 4,000+ employees and trained Recruiting on new workflows which lead to $4.5 million in saved 3rd party recruiting fees.   
                            </CardText>
                            <CardActions border>
                                
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    <div className="project-card">
                        {/* Project 2 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover' }}>Raven Resumes</CardTitle>
                            <CardText style={{ textAlign: 'justify' }}>
                             Raven Resumes is a business I built as a side business while working at Layer 3 Communications. Raven Resumes is a service that is the applicant's advocate, someone that does the research for you and gives you the advice that you need to succeed in your job search. We provide you with the tools, tips, latest industry updates, and advice on maneuvering the tricky landscape that is job hunting. This website is built with HTML, CSS, JavaScript, Next.js, and Squarespace Event Planner. 
                            </CardText>
                            <CardActions border>
                                <a href="https://github.com/grantposell/resumebuilder">
                                    <Button colored>GitHub</Button></a>
                                <a href="https://www.ravenresumes.com/">
                                    <Button colored>LiveDemo</Button></a>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                    <div className="project-card">
                        {/* Project 1 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover' }}>Take A Hike</CardTitle>
                            <CardText style={{ textAlign: 'justify' }}>
                                This is a hiking application that includes the weather for the given location that a consumer would be looking to go to. Our team included 4 members. This application includes HTML5, CSS3, Bootstrap, JavaScript, jQuery, AJAX calls, Hiking APIs, Google Firebase, and Google Maps API.
                            </CardText>
                            <CardActions border>
                                <a href="https://github.com/grantposell/waag">
                                    <Button colored>GitHub</Button></a>
                                <a href="https://grantposell.github.io/waag/">
                                    <Button colored>LiveDemo</Button></a>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                    <div className="project-card">
                        {/* Project 1 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover' }}>Classic Hangman</CardTitle>
                            <CardText style={{ textAlign: 'justify' }}>
                            Play a great game of Hangman: Cuisine Edition. Guess the right letters to know what is spelled. The words are common foods found in cultures all around the world.
                            </CardText>
                            <CardActions border>
                                <a href="https://github.com/grantposell/Hangman-Game">
                                    <Button colored>GitHub</Button></a>
                                <a href="https://grantposell.github.io/Hangman-Game/">
                                    <Button colored>LiveDemo</Button></a>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>

                </div>
            )

        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Product</Tab>
                    <Tab>Project</Tab>
                    <Tab>MISC</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategorgies()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Projects;