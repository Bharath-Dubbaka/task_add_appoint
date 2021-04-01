import React from 'react';
import DashBoard from './DashBoard';
import Top from './Top';


const Combined = () => {
    return ( 
        <div>
            <Top/>
            <hr/>
            <DashBoard/>
        </div>
     );
}
 
export default Combined;