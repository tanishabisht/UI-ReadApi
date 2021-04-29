import {ApiCard} from '../index'
import './cards.scss'

const ApiCardContainer = ({modelName, apiCalls}) => {


    return (
        <div className='gray_container'>
            <h2>{modelName}</h2>
            {apiCalls.map(({id,httpType,link,info,reqHeader,reqVal,resBody,darkColor,lightColor}) => <ApiCard key={id} id={id} httpType={httpType} link={link} info={info} reqHeader={reqHeader} reqVal={reqVal} resBody={resBody} darkColor={darkColor} lightColor={lightColor} />)}            
        </div>
    )
}

export default ApiCardContainer