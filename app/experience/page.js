import Navigation from "./../_components/_navigation/navbar"
import Head from 'next/head'

export default function Experience() {
    return(
      <>
        <Navigation/>
        <div className="text-blue-grey mx-20 my-5">
          <Head>
            <title>Experience</title>
          </Head>
          <div>
            <h1>Summary</h1>
            <p className="w-4/5">Ashleigh has over 6 years of experience working with clients in analysis, design, development, and customization; 5 years working specifically with Java 8 and Cúram by Merative, 1.5 years with React/NodeJS. </p>
          </div>

          <div>
            <h1>Skills</h1>
            <ul className="columns-2 list-disc list-inside w-3/4">
              <li>Java EE, JavaScript, React, Node.js, Next.js, REST APIs</li>
              <li>Oracle and MS SQL Server relational databases</li>
              <li>Source control via Git and TortoiseSVN</li>
              <li>JIRA, Agile methodologies</li>
              <li>Technical design and documentation</li>
              <li>Automated testing via JUnit 4</li>
            </ul>
          </div>

          <div>
            <h1>Professional Experience</h1>

            <h2>December 2017 - Present, Software Engineer - Merative (Previously IBM Watson Health)</h2>
            <ul className="list-disc list-inside indent-4">
              <li>Supporting implementation of Cúram by Merative V7 projects and upgrades to V8, comprised of a React front end communicating with a Java backend through REST APIs</li>
              <li>Documenting and implementing technical designs for batch processes and interfacing with external government systems</li>
              <li>Developing automated Junit test suites to ensure basic functionality, lowering the amount of necessary manual testing </li>
              <li>Writing and executing test cases for Quality Assurance</li>
              <li>Hosting knowledge transfer sessions</li>
              <li>Supporting pursuit of new business by providing engineering estimates for proposal bids and working on proofs-of-concept</li>
              <li>Mentoring new hires through the Cúram certification process</li>
              <li>Running daily defect triage meetings with the client business and technical teams</li>
              <li>Led development of a hackathon project integrating the AWS Textract OCR solution with the Cúram product as a potential fix for a client bottleneck </li>
            </ul>

            <h2>January 2016 –  December 2017, Associate Programmer Analyst - DXC Technology</h2>
            <ul className="list-disc list-inside indent-4">
              <li>Supported development of VB.net and VB classic web applications for clients in the insurance industry</li>
              <li>Communicated with clients for debugging purposes</li>
              <li>Created technical design documents, including flow charts and diagrams</li>
              <li>Unit testing, error analysis and debugging</li>
            </ul>
          </div>

          <div>
            <h1>Education</h1>

            <h2>Qualifications</h2>
            <p>Bachelor of Science in Computer Engineering, Clemson University, Clemson SC, USA</p>

            <h2>Certifications</h2>
            <ul>
              <li>IBM Certified Developer: Cúram SPM V7.X</li>
              <li>IBM Certified Associate Business Process Analyst - Cúram SPM V7.X</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
  