import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Summary from './summary';
import Education from './education';
import TechSkills from './techskills';
import ResumeProjects from './resumeprojects';
import Experience from './experience';
import OldExperience from './oldexperience';
import Skills from './skills';
import ResumeUpload from './resumeupload';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                                alt="avatar"
                                style={{ height: '200px' }}
                            />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Grant Posell</h2>
                        <h4 style={{ color: 'grey' }}>Full Stack Web Developer</h4>
                        <hr style={{ borderTop: '3px solid #003973', width: '100%' }} />
                        <p>I am a Recruiter turned Full Stack Web Developer. My passion for coding and building new applications derives from my curiosity of the world. Working on projects in teams and constantly learning from mistakes brings me to be a better coder and person. I am a fast learner and eager to work on projects in rapid environments. I look forward to working with you in the future.</p>
                        <hr style={{ borderTop: '3px solid #003973', width: '100%' }} />
                        <h5>Address</h5>
                        <p>2827 Dunvale Road<br/>Apartment 6415<br />Houston, TX 77063 </p>
                        <h5>Phone</h5>
                        <p>(832) 530-8222</p>
                        <h5>Email</h5>
                        <p>grantposell@gmail.com</p>
                        <h5>Github</h5>
                        <p>https://www.github.com/grantposell
                        </p>
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
                            jobPosition2="Sourcing Analyst"
                            jobPosition2StartMonthDate="May"
                            jobPosition2StartYearDate={2018}
                            jobPosition2End="Current"
                            jobDescription1="•	Evaluating, acquiring, and actively seeking out candidates for clients of ours who deal in small to medium sized companies."
                            jobDescription2="• 	Communicates with clients to understand their needs and contributes to  revenue generating projects."
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
                        <h2>Skills</h2>
                        <Skills
                            skill="Javascript"
                            progress={100}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={80}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={50}
                        />
                        <Skills
                            skill="ReactJS"
                            progress={25}
                        />
                        <ResumeUpload />
                    </Cell>

                </Grid>
            </div>
        )
    }
}
export default Resume;