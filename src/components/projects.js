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
                    {/* Project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover' }}>Jim's Yarn Barn</CardTitle>
                        <CardText>
                            Lorem Ipsum
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover' }}>ChargeShare Network</CardTitle>
                        <CardText>
                            Lorem Ipsum
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover' }}>Personal Portfolio</CardTitle>
                        <CardText>
                            Lorem Ipsum
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover' }}>Angular Project #1</CardTitle>
                        <CardText>
                            Lorem Ipsum
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover' }}>Angular Project #2</CardTitle>
                        <CardText>
                            Lorem Ipsum
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover' }}>Angular Project #3</CardTitle>
                        <CardText>
                            Lorem Ipsum
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover' }}>Vue Project #1</CardTitle>
                        <CardText>
                            Lorem Ipsum
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover' }}>Vue Project #2</CardTitle>
                        <CardText>
                            Lorem Ipsum
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover' }}>Vue Project #3</CardTitle>
                        <CardText>
                            Lorem Ipsum
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover' }}>Mongo Project #1</CardTitle>
                        <CardText>
                            Lorem Ipsum
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover' }}>Mongo Project #2</CardTitle>
                        <CardText>
                            Lorem Ipsum
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover' }}>Mongo Project #3</CardTitle>
                        <CardText>
                            Lorem Ipsum
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>MongoDB</Tab>
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