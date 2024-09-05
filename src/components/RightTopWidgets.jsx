import React from 'react'
import Navbar from './Navbar.jsx'
import AboutText from './AboutText.jsx'
import Aside from './Aside.jsx'

const RightTopWidgets = () => {
  return (
    <div className='w-[720px] h-[316px] top-[96px] left-[922px] flex bg-[#363C43]'>
        <div>
            <Aside/>
        </div>
       <div>
       <Navbar/>
       <AboutText/>
       </div>
    </div>
  )
}

export default RightTopWidgets