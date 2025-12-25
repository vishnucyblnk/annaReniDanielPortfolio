import React from 'react'
import AcadCard from '../Components/AcadCard';
import { Row, Col } from 'react-bootstrap';
import './StylePages.css';
import { zoomInDown } from 'react-animations';
import styled, {keyframes} from 'styled-components';
const zoomInDownAnimation = keyframes`${zoomInDown}`;
const AnimatedDiv = styled.div`
    animation: 2s ${zoomInDownAnimation};
`;


function Academic() {

    const allProject = [
        {
            projectName: 'Accounting Software',
            projectDesc: [
            "CMA (In Progress) – Indian Institute of Commerce, Lakshya, Kottayam",
            "Integrated Diploma in Corporate Accounting with SAP – Accountants Service Society, Cochin, Kerala",
            "B.Com (Computer Application) – MG University, Catholicate College, Pathanamthitta",
            "Higher Secondary – St John's School, Thumpamon, Pathanamthitta, Kerala",
            "SSLC – St John's School, Thumpamon, Pathanamthitta, Kerala",
            ],  
        },
        
    ]
    
    return (
        <Row className='fs-5 text-black g-3 mb-4'>    
            <AnimatedDiv><h3 style={{color:'#4b4b4b'}}>Education That Drives My Career</h3></AnimatedDiv>
            {
                allProject.map((eachProject) => (
                    <Col sm={12} md={12} lg={12}  key={eachProject.projectName}>
                        <AnimatedDiv className='projects p-2 rounded'>
                                <AcadCard eachProject={eachProject} />
                        </AnimatedDiv>
                    </Col>
                ))
            }   
        </Row>
        
    )
}

export default Academic

