import React from 'react';
import './top.css';


const Top = () => {
    return ( 
        <div>
            <div>
                <p>
                    <strong>Add Appointment for Practitioner: <span className='common_color'>Jenny Wheeler</span></strong>
                </p>
            </div>
                <hr/>
            <div className='details_sidebar'>
                <div>
                    <p><strong> Appointment Details:</strong></p>
                    <p><strong>Created by: Arjith Sighu </strong></p>
                    <p><strong>Created on: 19/04/2004 19:38 PM </strong></p>
                </div>
            </div>
            
        </div>
     );
}
 
export default Top;