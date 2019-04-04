import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Summary from './summary';
import Education from './education';
import TechSkills from './techskills';
import ResumeProjects from './resumeprojects';
import Experience from './experience';
import OldExperience from './oldexperience';
import ResumeUpload from './resumeupload';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <h2 style={{ color: 'black' }}>My Exerience</h2>
                        <hr style={{ borderTop: '3px solid #003973', width: '100%' }} />
                        <p style={{textAlign: 'justify', textIndent: '20px',}}>I am a Recruiter turned Full Stack Web Developer. My passion for coding and building new applications derives from my curiosity of the world. Working on projects in teams and constantly learning from mistakes brings me to be a better coder and person. I am a fast learner and eager to work on projects in rapid environments. I look forward to working with you in the future.</p>
                        <hr style={{ borderTop: '3px solid #003973', width: '100%' }} />
                        <h5>Phone</h5>
                        <p>(832) 530-8222</p>
                        <h5>Email</h5>
                        <p>grantposell@gmail.com</p>
                        <h5>Github</h5>
                        <p>https://www.github.com/grantposell
                        </p>
                        <h5>Address</h5>
                        <p>2827 Dunvale Road<br/>Apartment 6415<br />Houston, TX 77063 </p>
                        <hr style={{ borderTop: '3px solid #003973', width: '100%' }} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <ResumeUpload />
                        <h2>Summary</h2>
                        <Summary />
                        <hr style={{ borderTop: '3px solid #003973' }} />
                        <h2>Education</h2>
                        <Education
                        endMonth="July"
                        endYear={2018}
                        schoolName="University of Texas - Houston Coding Bootcamp"
                        degree="•	Certificate in Full Stack Web Development " 
                        />
                        <Education
                            endMonth="December"
                            endYear={2016}
                            schoolName="Texas A&M University"
                            degree="•	B.A. in Communication, Minor: Business"
                        />
                        <Education
                            endMonth="May"
                            endYear={2014}
                            schoolName="Blinn College"
                            degree="•	A.A. in Foreign Language "
                        />
                        <hr style={{ borderTop: '3px solid #003973' }} />
                        <h2 style={{marginBottom: '0px'}}>Technical Skills</h2>
                        <TechSkills
                            language="Languages"
                            languages="HTML, CSS, and JavaScript, JSON"
                            framework="Framework"
                            frameworks="ReactJS & Angular 6"
                            library="Library"
                            libraries="Bootstrap, AJAX, and REST APIs"
                            database="Database"
                            databases="Firebase, MySQL, and MongoDB"
                            serverside="Server-Side"
                            serversides="Node.js & PHP"
                            versioncontrol="Version Control"
                            versioncontrols="GitHub, Team Foundation Server (TFS), GitLab"
                        />
                        <hr style={{ borderTop: '3px solid #003973' }} />
                        <h2>Projects</h2>
                        <ResumeProjects
                        projectName="Stock Market Pets"
                        projectDescription1="•	Developed the social aspect of our application by coding the backend working with JavaScript, Node.js, MySQL, and MongoDB."
                        projectDescription2="•	The features that we created were the ability to find, select, add friends, and talk more over a platform forum."
                        />
                        <ResumeProjects
                        projectName="Hiking Application"
                        projectDescription1="•	Worked in a team to build a hiking application that uses HTML5, CSS3, JavaScript, Bootstrap, Google Maps RESTful APIs, Hike Project API, Open Weather API, and Google Firebase."
                        projectDescription2="•	This application can be found under WAAG in Github and was made to help people locate hiking trails in any given area."
                        />
                        <ResumeProjects
                        projectName="FareTrade"
                        projectDescription1="•	Worked in a team to build a platform by which locals can buy and sell local products. The application was built using HTML5, CSS3, JavaScript, jQuery, Bootstrap, Node.js, OAuth, MySQL, and deployed using Heroku. "
                        />
                        <hr style={{ borderTop: '3px solid #003973' }} />

                        <h2>Experience</h2>
                        <Experience
                            startMonth="May"
                            startYear={2018}
                            endYear="Present"
                            jobName="Insperity"
                            jobPosition1="Web Developer"
                            jobPosition1StartMonthDate="January"
                            jobPosition1StartYearDate={2019}
                            jobPosition1End="Current"
                            jobDescriptionA1="•	Initiated the build of a Recruiting dashboard for Recruitment Services."
                            jobDescriptionA2="•	Working with Legal, Compliance and DevOps to gain approval for dashboard."
                            jobDescriptionA3="•	Building the application with HTML5, CSS3, JavaScript, NodeJS, and Angular 6 with REST APIs."
                            jobPosition2="Sourcing Analyst"
                            jobPosition2StartMonthDate="May"
                            jobPosition2StartYearDate={2018}
                            jobPosition2End="Current"
                            jobDescription1="•	Evaluating, acquiring, and actively seeking out candidates for clients of ours who deal in small to medium sized companies."
                            jobDescription2="• 	Communicating with clients to understand their needs and contributes to  revenue generating projects."
                        />
                        <OldExperience
                            startMonth="January"
                            startYear={2017}
                            endMonth="May"
                            endYear={2018}
                            jobName="Connective Talent"
                            jobPosition1="Associate Recruiter"
                            jobDescription1="•	Utilizes Bullhorn CRM Software, Monster and LinkedIn with Boolean search strings to populate a list for Cold Calling."
                            jobDescription2="•	Creates conversation with candidates to understand their situation with the intent to help them in their careers." 
                        />
                        <hr style={{ borderTop: '3px solid #003973' }} />
                        <ResumeUpload />
                    </Cell>

                </Grid>
            </div>
        )
    }
}
export default Resume;