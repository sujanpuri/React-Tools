import React from 'react'
import { useState } from 'react'

const Selection = () => {
    const [select, setSelect] = useState(null);

  return (
    <div>
        <h2>selection:</h2>
        <div>
            Select Your place:  
            {/* The selected option is set to the state select */}
            <select onChange={(e=>{setSelect(e.target.value)})}> 
                <option value="Bhadrapur">Bhadrapur</option>
                <option value="Birtamod">Birtamod</option>
                <option value="Kanepokhari">Kanepokhari</option>
            </select>
            <br/>   
            selected: {select}
        </div>
    </div>
  )
}

export default Selection