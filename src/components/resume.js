import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import TechSkills from './techskills';
// import ResumeProjects from './resumeprojects';
import Fenix from './fenix';
import Mccorvey from './mccorvey';
import Experience from './experience';
import OldExperience from './oldexperience';
import ResumeUpload from './resumeupload';
import L3Comm from './l3comm';
import Techtorch from './techtorch';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell className="resume-right-col" col={12}>
                        <ResumeUpload />
                        <h1>Grant Posell</h1>
                        {/* <h2>Summary</h2>
                        <Summary />  */}
                        <hr style={{ borderTop: '3px solid #003973' }} />
                        <h2>Education</h2>
                        <Education
                            endMonth="December"
                            endYear={2021}
                            schoolName="American University"
                            degree="•	M.S. in Business Analytics "
                        />
                        <Education
                            endMonth="July"
                            endYear={2018}
                            schoolName="University of Texas"
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
                        <h2 style={{ marginBottom: '0px' }}>Technical Skills</h2>
                        <TechSkills
                            projecttool="Project Tools"
                            projecttools="Monday.com, Microsoft Project, Smartsheet, Asana, Atlassian JIRA,  and Slite"
                            communicationtool="Communication Tools"
                            communicationtools="Zoom, Microsoft Teams, Google Meet, and Slack"
                            prototype="Prototyping Tools"
                            prototyping="Balsamiq, Figma"
                            language="Languages"
                            languages="HTML, CSS, JavaScript, and R"
                            framework="Front End Framework"
                            frameworks="ReactJS"
                            library="Library"
                            libraries="Bootstrap, Material UI, AJAX, and REST APIs"
                            database="Database"
                            databases="Google Firebase, MySQL, AWS S3, and MongoDB"
                            serverside="Server-Side"
                            serversides="Node.js"
                            versioncontrol="Version Control"
                            versioncontrols="GitHub, Team Foundation Server (TFS), GitLab"
                        />
                        <hr style={{ borderTop: '3px solid #003973' }} />
                        <h2>Experience</h2>
                        <Techtorch
                            startMonth="December"
                            startYear={2022}
                            endMonth="July"
                            endYear={2023}
                            jobName="TechTorch"
                            jobPosition1="Customer Success Director"
                            jobDescription1="•	Product User Subject Matter Expert (SME) of the TechTorch SaaS product."
                            jobDescription2="•	Spearheading the creation of the Customer Success office by researching, documenting, and implementing Customer Success best practices taught by Client Success, Gainsight and more."
                            jobDescription3="•	Developing content in the platform for client use cases. "
                            jobDescription4="•	Troubleshooting product bugs with customers and coordinating ticket resolution with Engineering using Loom. "
                            jobDescription5="•	Creating customer demo environments to trial the TechTorch platform."
                            jobDescription6="•	Developing sales outreach plans with Dripify campaigns, HubSpot, and LinkedIn Sales Navigator."
                            jobDescription7="•	Presenting demo accounts and PowerPoints to prospective customers. "
                        />
                        <L3Comm
                            startMonth="February"
                            startYear={2021}
                            endMonth="December"
                            endYear={2022}
                            jobName="Layer 3 Communications"
                            jobPosition1="Business Process Developer"
                            jobDescription1="•	Implementing Monday.com for all of Layer 3 Communications, certified as a Solutions Architect SME, and coordinating training seminars for all stakeholders."
                            jobDescription2="•	Built a Marketing promotional website front-end with HTML, CSS, and JavaScript."
                            jobDescription3="•	Conducted internal stakeholder meetings to document GitHub repositories via VSCode, GIT and Terminal"
                            jobDescription4="•	Utilized Microsoft Project and Microsoft Visio to build out an Advanced Services Product Roadmap. "
                            jobDescription5="•	Facilitating Prototyping, Process Workflow, Product Management, and Customer Relations for Layer 3 Communications Managed Services Products in the Western Region. "
                        />
                        <Mccorvey
                            startMonth="January"
                            startYear={2020}
                            endMonth="November"
                            endYear={2020}
                            jobName="McCorvey Sheet Metal Works L.P."
                            jobPosition1="Product Developer"
                            jobDescription1="•	Product Owner over technology suites within McCorvey Companies."
                            jobDescription2="•	Prototyping, creating, and testing web application solutions in JavaScript Stack."
                            jobDescription3="•	Architecting Web Solutions to improve employee workflows."
                            jobDescription4="•	Coordinating information gathering sessions with the Executive Vice President, Operations, Recruiting, HR, and Accounting to facilitate the build out of the Avionte Applicant Tracking System."
                            jobDescription5="•	Architected Company Database in Airtable to be connected with the Applicant Tracking System and Paycom."
                            jobDescription6="•	Curating product launches and facilitating employee training sessions on upgrades to software."
                        />
                        <Fenix
                            startMonth="October"
                            startYear={2019}
                            endMonth="January"
                            endYear={2020}
                            jobName="Fenix Power"
                            jobPosition1="Chief Operations Officer"
                            jobDescription1="•	Founding Member from ChargeShare purchased by Fēnix Power."
                            jobDescription2="•	Technology startup focused on building battery and charging solutions for Electric Vehicles."
                            jobDescription3="•	Managed Web Developer, Industrial Designer and overall operations of the startup."
                            jobDescription4="•	Built out technical processes and worked with customers on their orders."
                        />
                        <Experience
                            startMonth="May"
                            startYear={2018}
                            endMonth="September"
                            endYear={2019}
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