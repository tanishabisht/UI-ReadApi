import './cards.scss'
import EditIcon from '../../Images/iconEdit.svg'
import DeleteIcon from '../../Images/iconDelete.svg'

const ModelCard = ({modelName, schemaArr}) => {
    console.log(modelName ,schemaArr)
    return (
        <div className='modelcard_container'>

            <div className='heading'>
                <h2 style={{color:'#fff'}}>{modelName}</h2>
                <span>
                    <a href='#'><img className='crudIcon' src={EditIcon} alt='edit link' /></a>
                    <a href='#'><img className='crudIcon' src={DeleteIcon} alt='delete link' /></a>
                </span>
            </div>
            
            <table>
            <tbody>
                <tr>
                    <th>NAME</th>
                    <th>TYPE</th>
                    <th>DUMMY EXAMPLE</th>
                </tr>
                {schemaArr.map(({id,name,type,eg}) => <tr key={id}>
                    <td>{name}</td>
                    <td>{type}</td>
                    <td>{eg}</td>
                </tr>)}
            </tbody>
            </table>
        </div>
    )
}

export default ModelCard