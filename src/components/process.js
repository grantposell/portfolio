import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Process extends Component {
    render() {
        return (
            <Grid className="product-management">
                <Cell col={12}>
                    <h1 style={{ textAlign: 'center', fontStyle: 'italic' }}>My PM Process inspired by PMI</h1>
                </Cell>

                <div style={{ margin: '20px', }}>
                    <Grid>
                        <Cell col={2}></Cell>
                        <Cell col={8}>
                            <h3 style={{ textDecoration: 'underline' }}>Summary</h3>
                            <p style={{ textAlign: 'justify' }}>It's no secret that Product Management and Project Management are different. Product Management includes a creation cycle that leads to a product while project management deals with human capital that promotes a particular outcome. The great part about these are that they can be used together and under the right circumstances produce amazing results. Given my experience with Web Development, Product Management, and Project Management, I have developed basic guidelines that I bring to the table in any scenario. Finally, my guidelines have been inspired by PMBOK and ProdBOK so similarities should be expected.</p>
                            <hr />
                            <h3 style={{ textDecoration: 'underline' }}>Inception</h3>
                            <h4>Abstract</h4>
                            <p style={{ textAlign: 'justify' }}>Great ideas come from a lot of different experiences. Colleagues in the work place have an idea for a product, the President of the Business invisions a strategic need, or an improvement is born out of pure necessity.</p>
                            <p style={{ textAlign: 'justify' }}>Whether the idea is an improvement on an existing product or the birth of a new realization, one must do the proper due dilligence to understand what is needed to produce the most ideal outcome.</p>
                            <h4>Requirements Gathering</h4>
                            <p style={{ textAlign: 'justify' }}>There are three integral parts to Requirements Gathering that leads to the success or failure of product evolution. The important pieces to a succesful equation are:</p>
                            <ul>
                                <li>The Keyman</li>
                                <li>The Inceptor</li>
                                <li>The Stakeholders</li>
                            </ul>
                            <h5>The Keyman</h5>
                            <p style={{ textAlign: 'justify' }}>
                                "The Keyman" is a term that was coined in Construction. This phrase often describes the main point person who is the gatekeeper to whether or not a project can be started. This person or entity has the ability to start or kill projects on a whim. This person is often the Board of Directors, Executive Suite, or Venture Capital that determimes the strategy of the company. It's important to get their approval whenever working on a product that will make a significant impact on the business.
                            </p>
                            <h5>The Inceptor</h5>
                            <p style={{ textAlign: 'justify' }}>"The Inceptor" is the person or entity that conceives a brilliant idea, new product line or project that will be worked on. This person generally has a vision for how the product or project should be carried out. This entity generally is charasmatic about the product and is highly invested. If your product satisfies this person, they will endorse the project to the end of the earth. Alternatively, this person can lobby against the product and make fulfillment very difficult.</p>
                            <h5>The Stakeholders</h5>
                            <p style={{ textAlign: 'justify' }}>
                            "The Stakeholders" are the people or entity that will be using the product or new addition. Get to know what they like, how they work, and what makes them the most efficient. Stakeholders are often vocal about things that they really like or really dislike similar to The Inceptor but these are the people that are affected the most by the change. Understanding how they work on a daily basis and what they prefer will help in finding the right product to suit their needs.</p>
                            <hr />
                            <h3 style={{ textDecoration: 'underline' }}>Research</h3>
                            <h4>Preparation</h4>
                            <p style={{ textAlign: 'justify' }}>Researching a product, processes, and new ideas starts with three different questions:</p>
                            <ul>
                                <li>Who is the expert or leader in this product, process, or new idea?</li>
                                <li>How can we utilise what they have done to get to where they are now?</li>
                                <li>How can we be bettter at the product, process or new idea?</li>
                            </ul>
                            <h4>The Art</h4>
                            <p style={{ textAlign: 'justify' }}>
                                Working in Recruiting and reading The Art of War by Sun Tsu taught me that in order to beat your opponent, one must know the opponent holistically. In order to know your opponent, one must research critical pieces that position you to be in a strategic spot to have the advantage. This is done by understanding how the entity functions, where their practices arise, and what are weak points that can be optimized. </p>
                            <p style={{ textAlign: 'justify' }}>Simply expressed, the Product Manager or entity carrying out the project must first understand what they need to look for in order to find the right materials. Next, find who does it the best. Want to be better at HR or Project Management, look to the Society of Human Resources Managers or the Project Management Institute. They have the experience that has built the best individuals in the industry and they have set products that they highly endorse. These products will then give you the needed information to understand how your product will need to meet and exceed expectations of these other products. Products are made to be the best by building off of solutions that pioneered the way.</p>
                            <h4>Building the Search String</h4>
                            <p style={{ textAlign: 'justify' }}>Getting all the information you need is pretty easy to do with the advent of Internet 2.0 and the ability to get information at our fingertips. The hard part is to decipher what is needed to build the best product, improve a process or achieve a grand idea.</p>
                            <p style={{ textAlign: 'justify' }}>In recruiting, we always called this "Building the Search String" because we would build up a huge database of terms or definitions then cut it down to get to the right search. In this case, the optimal search would be to make sure you have the right informationt to make the best decisions to make, change or revise a product.</p>
                            <h4>Criteria</h4>
                            <p style={{ textAlign: 'justify' }}>We have now gathered important information to help build, change or revise a product. We now need to cut down our information by using a method to decipher what is needed. In my past experience, teams have used a Weighted Decision Matrix to allocate values to important facets of a process or product, evaluate the information by assigning them a value from 1-5, and then adding up the values and multiplying by the weighting to then get a total score. At the end of the process, you will know what product, process, or piece of information to use regardless of bias.
                            </p>
                            <hr />
                            <h3 style={{ textDecoration: 'underline' }}>Selection</h3>
                            <p style={{ textAlign: 'justify' }}>Once you have evaluated all of the information, products, or processes with the Weighted Decision Matrix, it will be evident what needs to be added to the organization. The key part in moving forward with a decision means that the core three integral parties need to be consulted before proceeding. These are the core questions that you must ask before continuing:</p>
                            <ul>
                                <li>Does the product, process or end result fulfill the vision of The Inceptor?</li>
                                <li>Does The Keyman approve of the project, see it as a need, and willing to endorse the change?</li>
                                <li>Does the product, process or end result reflect the Stakeholders concerns and address them?</li>
                            </ul>
                            <p style={{ textAlign: 'justify' }}>If all of these core questions are answered with a "yes", it will appear that you are on track to a successful implemention.</p>
                            <hr />
                            <h3 style={{ textDecoration: 'underline' }}>Implementation</h3>
                            <h4>Planning</h4>
                            <p style={{ textAlign: 'justify' }}>Implementing the new product, process, or idea requires a plan for how it will be released to the Stakeholders. In every release, the requirements for the product will need to be verified before it starts going out and then a crucial part of the rollout is training the people needed for the product to be successful. Alternatively, building a product for external stakeholders such as consumers will require preparation videos for them as well such as videos for a Learning Management System. Releases to consumers can often be done in two main ways: A staggered release or a bulk launch.</p>
                            <p style={{ textAlign: 'justify' }}>Both release types will include focus group testing to refine the product for the end user. The part that differiates the two are whether or not everyone gets access when the product is launched to the stakeholder. Staggered releases include releasing the product to a limited group of people to control any bugs that may occur while bulk launches are sent out to everyone in the Stakeholder group.</p>
                            <h4>Training</h4>
                            <p style={{ textAlign: 'justify' }}>Prior to the launch of the product, the team that is responsible for the product will need to convey the necessary information needed to the end user in order to make sure the launch is successful. A common practice is building step by step videos for processes within the product. These videos will generally last between 30 seconds to 3 minutes depending on feature.These videos serve a function to train internal employees as well as consumers who are adopting the product.</p>
                            <h4>Roll Out</h4>
                            <p style={{ textAlign: 'justify' }}>The launch day is here! You have made it! This day will not define your product. Some products get mass adoption day one but their systems fail them and often there are issues. Other products see gradual success and don't face any major issues. It just depends on how much you and your counterparts prepare for this day and how the product is rolled out to the Stakeholders.</p>
                            <hr />
                            <h3 style={{ textDecoration: 'underline' }}>Evaluation</h3>
                            <p style={{ textAlign: 'justify' }}>In every product launch there is a measure to show whether or not if a product was successful. Key metrics that generally determine this success are found in adoption by consumers, retention rate, and referrals by current users. Important facets that display issues are consumers abandoning the platform, high consumer bounce rate, and low consistency use. Many of these items can be redeemed by understanding the end user and making changes accordingly. Many changes like these can often be caught in focus testing a product but can be redeemed by simply using consumers to get feedback and update the product before further damage is done.</p>
                            <hr />
                            <h3 style={{ textDecoration: 'underline' }}>Improve or Deprecate</h3>
                            <p style={{ textAlign: 'justify' }}>In every product lifecycle there is a time when a company decides to either improve upon a product or deprecate it. The deciding factor comes whether there are development costs that outweigh the nearest benefit or if their is a product that requires less time and money to migrate to for business improvementment. Many times companies will change SaaS providers because of better features and similar pricing options. Alternatively, green field products built internally are often invested in by a company and their development department.</p>
                            <hr />
                            <h3 style={{ textDecoration: 'underline' }}>Resources</h3>
                            <ul>
                                <li>Product Management - ProdBOK</li>
                                <li>Project Management Institute - PMBOK</li>
                            </ul>
                        </Cell>
                        <Cell col={4}></Cell>
                    </Grid>
                </div>

            </Grid>
        )
    }
}
export default Process;