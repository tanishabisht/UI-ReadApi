import './cards.scss'
import LinkIcon from '../../Images/iconLink.svg'

const DocsCard = ({projName, projDesc, editLink}) => {
    return (
        <div className='docscard_container'>
            <h2>{projName}</h2>
            <p>{projDesc}</p>
            <p style={{textAlign:'right'}}><a href={editLink}><img className='linkIcon' src={LinkIcon} alt='link' /></a></p>
        </div>
    )
}

export default DocsCard