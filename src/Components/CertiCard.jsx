import React from 'react';
import { Link } from 'react-router-dom';
import './StyleComp.css';

function CertiCard({eachProject}) {
    const {projectName, projectDesc ,projectTools} = eachProject
  return (
    <div div className='d-flex flex-column justify-content-between h-100'>
        <div className='d-flex flex-column justify-content-around h-100'>
            <h3 className='pt-2 fw-bold text-decoration-underline' style={{color:'#4b4b4b'}}>{projectName}</h3>
            <h6 className='fs-6 text-black fw-normal fst-italic'>{projectTools}</h6>
            {/* projectDesc rendering */}
            {Array.isArray(projectDesc)
          ? projectDesc.map((desc, index) => (
              <h3 key={index} className="fs-5 text-black ">
                {desc}
              </h3>
            ))
          : <h3 className="fs-4 text-black fw-normal">{projectDesc}</h3>
        }
            </div>
    </div>
  )
}

export default CertiCard