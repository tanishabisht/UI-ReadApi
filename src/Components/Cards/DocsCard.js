import './cards.scss'
import LinkIcon from '../../Images/iconLink.svg'
import {NavLink} from 'react-router-dom'

const DocsCard = ({projName, projDesc, editLink}) => {
    return (
        <div className='docscard_container'>
            <h2>{projName}</h2>
            <p>{projDesc}</p>
            <p style={{textAlign:'right'}}><NavLink to="/finaldoc"><img className='linkIcon' src={LinkIcon} alt='link' /></NavLink></p>
        </div>
    )
}

export default DocsCard