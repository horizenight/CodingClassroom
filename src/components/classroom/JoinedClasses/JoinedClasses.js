import { Avatar } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import config from '../../../config';
import { useLocalContext } from '../../../context/context';
import './styles.css'
const basePath = config.appBasePath || "/";

const JoinedClasses = ({ classData }) => {
    const { loggedInMail } = useLocalContext();
  return (
    <li className="joined__list">
    <div className="joined__wrapper">
      <div className="joined__container">
        <div className="joined__imgWrapper" />
        <div className="joined__image" />
        <div className="joined__content">
          <Link className="joined__title" to={`${basePath}room/:${classData.className}/:${loggedInMail}`}>
            <h2>{classData.className}</h2>
          </Link>
          <p className="joined__owner">{classData.owner}</p>
        </div>
      </div>
      <Avatar
        className="joined__avatar"
        src="https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/s75-c-fbw=1/photo.jpg"
      />
    
    </div>
   </li>
  )
}

export default JoinedClasses