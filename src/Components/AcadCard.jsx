import React from 'react';
import { Link } from 'react-router-dom';
import './StyleComp.css';

function AcadCard({eachProject}) {
    const {projectName, projectDesc ,projectTools} = eachProject
  return (
    <div div className='d-flex flex-column justify-content-between h-100'>
        <div className='d-flex flex-column justify-content-around h-100'>
            <h6 className='fs-6 text-black fw-normal fst-italic'>{projectTools}</h6>
            {/* projectDesc rendering */}
            {Array.isArray(projectDesc)
          ? 
          <ul className="mt-2">
            {projectDesc.map((desc, index) => (
              <li key={index} className="fs-4 fw-bold text-black ">
                {desc}
              </li>
            ))}
          </ul> 
          : <h3 className="fs-4 text-black fw-normal">{projectDesc}</h3>
        }
            </div>
    </div>
  )
}

export default AcadCard