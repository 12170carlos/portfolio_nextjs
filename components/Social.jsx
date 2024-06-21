import Link from "next/link"

import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const socials = [
  {
    icon: <FaGithub/>,
    path:"https://github.com/12170carlos"
  },
  {
    icon: <FaLinkedinIn/>,
    path:"https://www.linkedin.com/in/carlosalvarado2706/"
  },
  {
    icon: <FaTwitter/>,
    path:"https://x.com/ken18alvarado"
  }
]

const Social = ({containerStyles, iconStyles}) => {
  return(

  <div className={containerStyles}>
    {socials.map((item, index) => {
      return (
        <Link key={index} href={item.path} legacyBehavior>
          <a target="_blank" rel="noopener noreferrer" className={iconStyles}>
          {item.icon}
          </a>
        </Link>
      )
    })}
  </div>
  ) 
  
}

export default Social