import React from 'react'

const Footer = (props) => {
  return (
     <footer style={{marginTop:"19%"}} className={`footer py-3 bg-${props.mode}`}>
     <div className="container">
       <span className="text-muted ">© Copyright TextUtils 2022</span>
     </div>
   </footer>
  )
}

export default Footer
