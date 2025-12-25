import React from 'react';
import { BsFiletypePdf } from 'react-icons/bs';
import { GoArrowDown } from "react-icons/go";
import { fadeInDown } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import './StylePages.css';
import { Link } from 'react-router-dom';

const fadeInDownAnimation = keyframes`${fadeInDown}`;
const AnimatedDiv = styled.div`
    animation: 2s ${fadeInDownAnimation};
`;

function About() {

    const resumePdf = 'https://drive.google.com/file/d/1dwC7GxvUqJ19XMbFObLrycyPyuQDnVWw/view?usp=sharing';
    
    

    return (
        <>
            <AnimatedDiv className='mb-4'>
                <h3 className='d-flex justify-content-start ' style={{ color: '#4b4b4b' }}>About Me</h3>


                <h6 className='text-black fs-5'>
                Hello! I'm <span className='fw-bold fs-4' style={{ color: '#4b4b4b' }}>ANNA RENI DANIEL</span> from Kerala, a dedicated and detail-oriented <span className='fw-bold' style={{ color: '#4b4b4b' }}>Accounting & Finance Professional</span>. I have hands-on experience of over 3 years in <span className='fw-bold' style={{ color: '#4b4b4b' }}>corporate accounting, taxation, financial reporting, and managing accounts payables and receivables</span>. I have worked with organizations like <span className='fw-bold' style={{ color: '#4b4b4b' }}>Gastronomy Legacy Fresh Foods Pvt Ltd and SKG Accountants & Consultants</span>, where I maintained accurate books of accounts, prepared financial statements, managed reconciliations, supported audits, and assisted in GST filings. Proficient in <span className='fw-bold' style={{ color: '#4b4b4b' }}>Tally Prime, QuickBooks, SAP (FICO, MM, SD), Excel, and SAGE – Peachtree</span>, I am committed to accuracy, efficiency, and supporting organizational growth through my analytical skills and attention to detail.
                </h6>



                <h3 className='d-flex justify-content-start' style={{ color: '#4b4b4b' }}>My Approach</h3>
                <h6 className='text-black fs-5'>
                My approach is centered on <span className='fw-bold' style={{ color: '#4b4b4b' }}>accuracy, efficiency, and continuous improvement</span> in every financial task. I focus on <span className='fw-bold' style={{ color: '#4b4b4b' }}>maintaining precise records, streamlining accounting processes, ensuring compliance with statutory requirements, and delivering actionable insights</span>. With hands-on experience in <span className='fw-bold' style={{ color: '#4b4b4b' }}>account reconciliations, financial reporting, GST filings, and ERP systems like Tally Prime, QuickBooks, and SAP</span>, I combine technical expertise with analytical thinking to support informed decision-making and contribute to organizational growth.
                </h6>



                <h3 className='d-flex justify-content-start' style={{ color: '#4b4b4b' }}>What's Next ?</h3>
                <h6 className='text-black fs-5'>
                I am now looking for <span className='fw-bold' style={{ color: '#4b4b4b' }}>opportunities where I can apply my 3+ years of accounting and finance experience</span> to contribute to organizational growth. I am eager to work with dynamic teams, take on challenging assignments, and leverage my expertise in <span className='fw-bold' style={{ color: '#4b4b4b' }}>corporate accounting, taxation, financial reporting, and ERP tools like Tally Prime, SAP, and QuickBooks</span>. If your organization is seeking a <span className='fw-bold' style={{ color: '#4b4b4b' }}>reliable, detail-oriented, and analytical finance professional</span>, I would be excited to connect and explore how I can add value to your team.
                </h6>



                <Link className="fs-4 bton p-2" to={resumePdf} target='_blank' rel="noopener noreferrer"><BsFiletypePdf/> Dowload / View Resume <GoArrowDown/></Link>

            </AnimatedDiv>
        </>

    )
}

export default About
