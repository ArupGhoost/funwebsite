import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

function Component() {
    return (
        <>
          <div className='main'>
            <h1>Best Forest Images</h1>

      </div>
      <div >
      <input type='text' placeholder='Search'/>
      <button type='button'><SearchIcon  style={{fontSize:'.5rem'}}/></button>
      </div>   
        </>
    )
}

export default Component
