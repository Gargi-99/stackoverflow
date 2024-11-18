import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-section">
                {/* <h3>PUBLIC</h3> */}
                <ul>
                    <li className="active">
                        <i class="fa-solid fa-house"></i>&nbsp;&nbsp;&nbsp;Home
                    </li>
                </ul>
            </div>

            <div className="sidebar-section">

                <ul>
                    <li><i class="fa-solid fa-earth-americas sidetext-icon"></i> &nbsp;&nbsp;&nbsp;Public</li>
                    <li className='sidetext'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Questions</li>
                    <li className='sidetext'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tags</li>
                    <li className='sidetext'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Users</li>

                </ul>
            </div>
            <div className="sidebar-section">

                <ul>
                    <li><i class="fa-solid fa-futbol sidetext-icon"></i>&nbsp;&nbsp;&nbsp;COLLECTIVES</li>
                    <li className='sidetext'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Explore Jobs</li>

                </ul>
            </div>

            <div className="sidebar-section">

                <ul>
                    <li><i className="fa-solid fa-toolbox sidetext-icon"></i>&nbsp;&nbsp;&nbsp;FIND JOBS</li>
                    <li className='sidetext'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jobs</li>
                    <li className='sidetext'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Companies</li>
                </ul>
            </div>

            <div className="sidebar-section">
                <ul>
                    <li><i className="fa-solid fa-layer-group sidetext-icon"></i>&nbsp;&nbsp;&nbsp;TEAMS</li>
                    <li className='sidetext'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ Create a team</li>

                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
