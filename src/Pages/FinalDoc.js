import { ModelCardContainer, ApiCardContainer } from '../Components'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button } from '@material-ui/core'
import {NavLink} from 'react-router-dom'
import './pages.scss'

const useStyles = makeStyles(theme => ({}))


const FinalDoc = () => {

    const classes = useStyles()


    const modelContent = [
        {
            id:0, 
            modelName: 'MODEL NAME 1',
            schemaArr:[{id:0, name:'name', type:'String', eg:'Tanisha'},{id:1, name:'name', type:'String', eg:'Tanisha'},{id:2, name:'name', type:'String', eg:'Tanisha'},{id:3, name:'name', type:'String', eg:'Tanisha'}]
        },
        {
            id:1, 
            modelName: 'MODEL NAME 2',
            schemaArr:[{id:0, name:'name', type:'String', eg:'Tanisha'},{id:1, name:'name', type:'String', eg:'Tanisha'},{id:2, name:'name', type:'String', eg:'Tanisha'},{id:3, name:'name', type:'String', eg:'Tanisha'}]
        }
    ]


    const apiContent = [
        {
            id:0,
            modelName: 'MODEL NAME 1',
            apiCalls: [
                {id:0, httpType:'GET', link:'/user', info:'To get list of Users', reqHeader:'HEADER', reqVal:'Authorization', resBody:'{id:ObjId(12324),username:tanisha}', darkColor:'#618CDB', lightColor:'#7FA7F1'},
                {id:1, httpType:'POST', link:'/user', info:'To add a new User', reqHeader:'URL PARAMS', reqVal:':id >> id of the user', resBody:'{id:ObjId(12324),username:tanisha}', darkColor:'#3CC299', lightColor:'#6DE0BD'},
                {id:2, httpType:'PUT', link:'/user/:id', info:'To get list of Users', reqHeader:'FILES', reqVal:'True', resBody:'{id:ObjId(12324),username:tanisha}', darkColor:'#C67535', lightColor:'#EDA063'},
                {id:3, httpType:'DELETE', link:'/user/:id', info:'To get list of Users', reqHeader:'URL QUERY', reqVal:'school=CPS/DPS', resBody:'{id:ObjId(12324),username:tanisha}', darkColor:'#B6334C', lightColor:'#E85B76'}
            ]
        },
        {
            id:1,
            modelName: 'MODEL NAME 2',
            apiCalls: [
                {id:0, httpType:'GET', link:'/user', info:'To get list of Users', reqHeader:'HEADER', reqVal:'Authorization', resBody:'{id:ObjId(12324),username:tanisha}', darkColor:'#618CDB', lightColor:'#7FA7F1'},
                {id:1, httpType:'POST', link:'/user', info:'To add a new User', reqHeader:'URL PARAMS', reqVal:':id >> id of the user', resBody:'{id:ObjId(12324),username:tanisha}', darkColor:'#3CC299', lightColor:'#6DE0BD'},
                {id:2, httpType:'PUT', link:'/user/:id', info:'To get list of Users', reqHeader:'FILES', reqVal:'True', resBody:'{id:ObjId(12324),username:tanisha}', darkColor:'#C67535', lightColor:'#EDA063'},
                {id:3, httpType:'DELETE', link:'/user/:id', info:'To get list of Users', reqHeader:'URL QUERY', reqVal:'school=CPS/DPS', resBody:'{id:ObjId(12324),username:tanisha}', darkColor:'#B6334C', lightColor:'#E85B76'}
            ]
        },
        {
            id:2,
            modelName: 'MODEL NAME 3',
            apiCalls: [
                {id:0, httpType:'GET', link:'/user', info:'To get list of Users', reqHeader:'HEADER', reqVal:'Authorization', resBody:'{id:ObjId(12324),username:tanisha}', darkColor:'#618CDB', lightColor:'#7FA7F1'},
                {id:1, httpType:'POST', link:'/user', info:'To add a new User', reqHeader:'URL PARAMS', reqVal:':id >> id of the user', resBody:'{id:ObjId(12324),username:tanisha}', darkColor:'#3CC299', lightColor:'#6DE0BD'},
                {id:2, httpType:'PUT', link:'/user/:id', info:'To get list of Users', reqHeader:'FILES', reqVal:'True', resBody:'{id:ObjId(12324),username:tanisha}', darkColor:'#C67535', lightColor:'#EDA063'},
                {id:3, httpType:'DELETE', link:'/user/:id', info:'To get list of Users', reqHeader:'URL QUERY', reqVal:'school=CPS/DPS', resBody:'{id:ObjId(12324),username:tanisha}', darkColor:'#B6334C', lightColor:'#E85B76'}
            ]
        }
    ]


    return (
        <div className='container' style={{marginTop:'3rem'}}>
            <h1 className='header'>Project Name</h1>
            <p style={{textAlign:'justify'}} >Project Description inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia</p>
            
            <h1 className='header'>MODELS</h1>
            <ModelCardContainer content={modelContent} />

            <h1 className='header'>APIs</h1>
            {apiContent.map(({id,modelName,apiCalls}) => <ApiCardContainer key={id} modelName={modelName} apiCalls={apiCalls} />)}

        </div>
    )
}

export default FinalDoc