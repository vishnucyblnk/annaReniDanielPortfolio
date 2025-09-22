import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './StylePages.css';
import { bounceInRight } from 'react-animations';
import styled, { keyframes } from 'styled-components';


const bounceInRightAnimation = keyframes`${bounceInRight}`;

const AnimatedbounceInRightDiv = styled.div`
    animation: 3s ${bounceInRightAnimation} forwards;
`;

const WhatsappIcon = styled(AnimatedbounceInRightDiv)`
  animation-delay: 0.5s;
`;

const LinkedInIcon = styled(AnimatedbounceInRightDiv)`
  animation-delay: 1s;
`;

const GithubIcon = styled(AnimatedbounceInRightDiv)`
  animation-delay: 1.5s;
`;

const InstagramIcon = styled(AnimatedbounceInRightDiv)`
  animation-delay: 2s;
`;


function Sidebar() {
    return (
        <>
            <div className="sidebar p-3">
                <WhatsappIcon>
                    <Link className='linkIcon text-decoration-none ' to="https://wa.me/918590605934" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={50} />
                    </Link>
                </WhatsappIcon>
                <LinkedInIcon>
                    <Link className='linkIcon text-decoration-none ' to="https://www.linkedin.com/in/anna-reni-daniel-accountant" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={50} />
                    </Link>
                </LinkedInIcon>
                <InstagramIcon>
                    <Link className='linkIcon text-decoration-none ' to="https://www.instagram.com/anna.reni.daniel/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={50} />
                    </Link>
                </InstagramIcon>
            </div>
        </>
    )
}

export default Sidebar