import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Process extends Component {
    render() {
        return (
            <Grid>
                <Cell col={8}>
                    <h2>Product Management Process</h2>
                    <h3>Inception</h3>
                    <p>Great ideas come from a lot of different experiences. Colleagues in the work place have an idea for a product, President of the Business invisions a strategic need, or an improvement is born out of pure neceessity.</p>
                    <p>Whether the idea is an improvement on an existing product or the birth of a new realization, one must do the proper due dilligence to understand what is needed to produce the most ideal outcome.</p>
                    <h4>Requirements Gathering</h4>
                    <p>There are three integral parts to Requirements Gathering that leads to the success or failure of product evolution. The important pieces to a succesful equation are:</p> 
                        <ul>
                            <li>The Keyman</li>
                            <li>The Inceptor</li>
                            <li>The Stakeholders</li>
                        </ul>
                    <h4>The Keyman</h4>
                    <p>
                    "The Keyman" is a term that has beencoined in Construction. This phrase often describes the main point person who is the gatekeeper to whether or not a project can be started. This person or entity has the ability to start or kill projects on a whim. This person is often the Board of Directors, Executive Suite, or Venture Capital that determimes the strategy of the company. It's important to get their approval whenever working on a product that will make a significant impact on the business. 
                    </p>
                    <h4>The Inceptor</h4>
                    <p>"The Inceptor" is the person or entity that conceives a brilliant idea, new product line or project that will be worked on. This person generally has a vision for how the product or project should be carried out. This entity generally is charasmatic about the product and is highly invested. If your product satisfies this person, they will endorse the project to the end of the earth. Alternatively, this person can lobby against the product and make fulfillment very difficult.</p>
                    <h4>The Stakeholders</h4>
                    "The Stakeholders" are the people or entity that will be using the product or new addition. Get to know what they like, how they work, and what makes them the most efficient. Stakeholders are often vocal about things that they really like or really dislike similar to The Inceptor but these are the people that are affected the most by the change. Understanding how they work on a daily basis and what they prefer will help in finding the right product to suit their needs. 
                    <hr/>
                    <h3>Research</h3>
                    


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