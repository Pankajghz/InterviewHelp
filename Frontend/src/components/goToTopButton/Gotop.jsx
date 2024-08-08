import React, {useEffect, useState} from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Gotop() {
    const [show , setShow] = useState(false);
    useEffect(
        ()=>{
            const handleScroll = () => {
                const currentScrollY = window.scrollY;
                if (currentScrollY > 0) {
                  setShow(true);
                } else {
                  setShow(false);
                }
              };
          
              window.addEventListener('scroll', handleScroll);
          
              return () => {
                window.removeEventListener('scroll', handleScroll);
              };
        }, []
    )

    const arrowStyle = {
        display: show == true ? 'block' : 'none'
    }
  return (
    <div style={arrowStyle} className='fixed bottom-4 right-4 bg-white border border-gray shadow rounded-full p-2'>
      <a href="#hero"><ArrowUpwardIcon/></a>
    </div>
  )
}
