import {ModelCard} from '../index'
import './cards.scss'

const ModelCardContainer = ({content}) => {
    console.log(content)
    return (
        <div className='gray_container'>
            {content.map(({id,modelName,schemaArr}) => <ModelCard key={id} modelName={modelName} schemaArr={schemaArr} />)}            
        </div>
    )
}

export default ModelCardContainer