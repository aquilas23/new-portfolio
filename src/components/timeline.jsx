import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>FULL STACK WEB DEVELOPER AT DEVMOUNTAIN <span> Aug 2020 - Nov 2020</span></h2> 
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>PRODUCTION COODINATOR, BOSTON SCIENTIFIC  <span>JANUARY 2018 – MAY 2020</span></h2>
                        <p>Responsibilities and Duties 
• Understands and adheres to safety policies and practices.
• Responsible for quality and adheres to manufacturing process requirements, the Boston Scientific Corporation Quality Policy and the Strategic Quality Process (SQP). 
• Builds product by following all processes in which certified (in their most current revision), and completes other assigned work, while meeting manufacturing goals a8nd metrics. 
• Gains basic understanding of Lean Manufacturing and related principles. 
• Willing to flex and rotate as necessary and work well with all group members, both within the team and cross-functionally. 
• Under the direction of other maintains accurate records such as Manufacturing Execution System (MES), Shop Floor Paperwork (SFP), training Records System (TRS), Product Data Management (PDM), Systems Application & Products (SAP) and Process Equipment Optimization (PEO). 
• Moderate mechanical aptitude. Able to learn how to set-up equipment to meet process specifications. 
• Assist and learn to take ownership and accountability to drive metrics by actively participating in Focused Factory cross-functional teams. 
• Understands and follows all BSC and site specific policies and procedures. 
• Responsible for attending and passing all core required BSC and site specific training (i.e. QS Basics, RTK, Lean Training, and Extrusion 101). 
• Demonstrate an understanding of the basic functions of SAP. 
• Demonstrate an understanding of the basic functions of MES. 
• Learns to plan and prepare the equipment to meet the customer’s requirements. 
• Provide Continuous Improvement suggestions.
</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>FULL STACK WEB DEVELOPER at SHALOM TECH GROUP LLC <span> JUNE 2018 – JANUARY 2020</span></h2>
                        <p>JUNE 2018 – JANUARY 2020
FULL STACK WEB DEVELOPER, SHALOM TECH GROUP MN
Front-end Web Developer
•	Develops and maintains company websites and web applications with a focus on front-end development
•	Determining the structure and design of web pages
•	Builds high-quality mockups and design different prototypes
•	Works in a multidisciplinary team with other professionals such as back-end developers and web designers
•	Develops features to enhance the user experience
•	Ensures web design is optimized for mobile devices
•	Optimizes web pages for maximum speed and scalability
•	Makes suggestions for better solutions to problems
•	Keeps abreast of latest and emerging technologies
•	Provides maintenance and staff support of existing websites and CMS systems
•	Occasionally supports customer service to assist customers with registration, login, or account issues

Back-end Web Developer

•	Develops and maintains company websites and web applications with a focus on server side web services and API’s
•	Works closely with front-end developers and other team members to meet project objectives
•	Utilizes standards based development processes
•	Daily use of full-stack web development languages, tools, and techniques
•	Provides maintenance and staff support of existing websites and CMS systems
•	Occasionally supports customer service to assist customers with registration, login, or account issues
•	Integrates between website data and other data sources, SQL server, and MySQL


</p>
                      </div>
                    </div>
                  </article>
                  {/* <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Primary and Higher Education <span>2003-2015</span></h2>
                        <p>I have completed my higher secondary education with major subjects as Physics,Chemistry & Maths with 91 merit. During my time at school, I have developed interest in solving complex problems of the fundamental physics which helped me to improve my understanding of any problem and also my mathematical skills to actually solve the problems.</p> 
                      </div>
                    </div>
                  </article> */}
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
