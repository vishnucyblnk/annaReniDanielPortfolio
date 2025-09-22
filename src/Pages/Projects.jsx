import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import { Row, Col } from 'react-bootstrap';
import './StylePages.css';
import { zoomInDown } from 'react-animations';
import styled, {keyframes} from 'styled-components';
import HmsImage from '../Images/HmsImage.png';
const zoomInDownAnimation = keyframes`${zoomInDown}`;
const AnimatedDiv = styled.div`
    animation: 2s ${zoomInDownAnimation};
`;


function Projects() {

    const allProject = [
        {
            projectName: 'Junior Accountant',
            projectTools: `Gastronomy Legacy Fresh Foods Pvt Ltd, Bengaluru | (Aug 2024 - Aug 2025)`,
            projectDesc: [
            "- Maintained accurate books of accounts including General Ledger, Journals, and Trial Balance",
            "- Prepared financial statements such as Profit & Loss, Balance Sheet, and Cash Flow Reports",
            "- Managed Accounts Payable & Receivable, vendor settlements, and reconciliations",
            "- Conducted bank reconciliations, expense tracking, and variance analysis",
            "- Supported internal and statutory audits with schedules and documentation",
            "- Recognized for strong analytical skills, reliability, and dedication to timelines"
            ],
            
        },
        {
            projectName: 'Account Assistant',
            projectTools: `SKG Accountants & Consultants, Pathanamthitta | (Aug 2022 – Jun 2024)`,
            projectDesc: [
      "- Handled day-to-day accounting activities, bookkeeping, and reconciliations",
      "- Assisted in GST Filings (GSTR 1, GSTR 3B), ensuring compliance with statutory requirements",
      "- Supported finance operations with a client-focused and service-oriented approach",
      "- Collaborated with senior accountants to streamline accounting processes",
      "- Gained hands-on experience in financial reporting and client support, noted for professionalism and reliability"
    ],
        },
        
        
    ]
    
    return (
        <Row className='fs-5 text-black g-3 mb-4'>    
            <AnimatedDiv><h3 style={{color:'#4b4b4b'}}>Experience That Shaped Me</h3></AnimatedDiv>
            {
                allProject.map((eachProject) => (
                    <Col sm={12} md={12} lg={6}  key={eachProject.projectName}>
                        <AnimatedDiv className='projects p-2 rounded'>
                                <ProjectCard eachProject={eachProject} />
                        </AnimatedDiv>
                    </Col>
                ))
            }   
        </Row>
        
    )
}

export default Projects

