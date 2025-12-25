import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { MdOutlineLocalPhone } from "react-icons/md";
import logoImage from '../Images/VNB_LOGO.png';
import './StyleComp.css';
import { TbUserCode } from "react-icons/tb";
import { PiCertificate } from "react-icons/pi";
import { HiAcademicCap } from "react-icons/hi2";
import { BsTools } from "react-icons/bs";

function Header(){

    const navList = [
        {
            linkName: 'Home',
            linkTo: '/',
            linkSymbol: <AiOutlineHome className="fill-blue" />
        },
        {
            linkName: 'About',
            linkTo: '/About',
            linkSymbol: <BsPerson className="fillColor" />
        },
        {
            linkName: 'Experience',
            linkTo: '/Projects',
            linkSymbol: <BsTools className="fillColor" />
        },
        {
            linkName: 'Certificates & Skills',
            linkTo: '/Certificate',
            linkSymbol: <PiCertificate className="fillColor" />
        },
        {
            linkName: 'Academics',
            linkTo: '/Academic',
            linkSymbol: <HiAcademicCap className="fillColor" />
        },
        {
            linkName: 'Contact',
            linkTo: '/Contact',
            linkSymbol: <MdOutlineLocalPhone className="fillColor" />
        }
    ]

    var showMenu = () => {
        var bar = document.getElementsByClassName("bar");
        var ham = document.getElementsByClassName("NavbarLinks");
        bar[0].classList.toggle("barOne");
        bar[1].classList.toggle("barTwo");
        bar[2].classList.toggle("barThree");
    
        ham[0].classList.toggle("showNavbar");
      };
    
      var hideMenu = () => {
        var bar = document.getElementsByClassName("bar");
        var ham = document.getElementsByClassName("NavbarLinks");
        bar[0].classList.remove("barOne");
        bar[1].classList.remove("barTwo");
        bar[2].classList.remove("barThree");
        ham[0].classList.remove("showNavbar");
      };
  
  return (
    <nav className={'Navbar'}>

    <Link to={'/'}><img  className='Logo' src={logoImage} alt="logo-pic" id="logoImage"  /></Link>
      <div className="Hamburger" onClick={showMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

        <ul className="NavbarLinks">
            {
                navList.map((eachItem) => (
                    <li onClick={hideMenu} key={eachItem.linkTo}>
                        <Link className="liChild gap-2" to={eachItem.linkTo}>
                            {eachItem.linkSymbol} {eachItem.linkName} 
                        </Link>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default Header


