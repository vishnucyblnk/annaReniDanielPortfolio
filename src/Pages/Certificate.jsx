import React from 'react'
import CertiCard from '../Components/CertiCard';
import { Row, Col } from 'react-bootstrap';
import './StylePages.css';
import { zoomInDown } from 'react-animations';
import styled, {keyframes} from 'styled-components';
const zoomInDownAnimation = keyframes`${zoomInDown}`;
const AnimatedDiv = styled.div`
    animation: 2s ${zoomInDownAnimation};
`;


function Certificate() {

    const allProject = [
        {
            projectName: 'Accounting Software',
            projectDesc: [
            "Tally Prime 1.1 – Certified",
            "QuickBooks – Certified",
            "SAGE – Peachtree – Certified",
            "SAP FICO – Credential ID: ASS001/PRM/FI2104",
            "SAP MM – Credential ID: ASS001/PRM/MM2002",
            ],
            
        },
        {
            projectName: 'Taxation & Finance',
            projectDesc: [
            "GST Training Programme – Certificate No: GST/271/7366",
            "GCC VAT Training Programme – Certificate No: VAT/271/7366",
            ],
            
        },
        {
            projectName: 'Other Skills & Tools',
            projectDesc: [
            "Excel – Certified",
            "Ms Office",
            "Core Skills: Corporate Accounting, Financial Reporting, Accounts Payable & Receivable, Bank Reconciliation, Audits, Variance Analysis"
            ],
            
        }
        
    ]
    
    return (
        <Row className='fs-5 text-black g-3 mb-4'>    
            <AnimatedDiv><h3 style={{color:'#4b4b4b'}}>Certifications & Skills That Shaped My Expertise</h3></AnimatedDiv>
            {
                allProject.map((eachProject) => (
                    <Col sm={12} md={12} lg={12}  key={eachProject.projectName}>
                        <AnimatedDiv className='projects p-2 rounded'>
                                <CertiCard eachProject={eachProject} />
                        </AnimatedDiv>
                    </Col>
                ))
            }   
        </Row>
        
    )
}

export default Certificate


