import { ModelCardContainer, ApiCard } from '../Components'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button } from '@material-ui/core'
import './pages.scss'

const useStyles = makeStyles(theme => ({
    textfield: {
        width:'100%',
        marginBottom: theme.spacing(2)
    },
    addbutton: {
        marginBottom: theme.spacing(2)
    }
}))


const AddDoc = () => {

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


    return (
        <div className='container' style={{marginTop:'3rem'}}>
            <form noValidate autoComplete="off">
                <TextField className={classes.textfield} id="project-name" label="Project Name ..." variant="outlined" />
                <TextField className={classes.textfield} id="project-desc" label="Project Description ..." variant="outlined" multiline />
                
                <h1 className='header'>MODELS</h1>
                <Button variant="outlined" className={classes.addbutton}>ADD MODELS</Button>
                <ModelCardContainer content={modelContent} />

                <h1 className='header'>APIs</h1>
                <Button variant="outlined" className={classes.addbutton}>ADD API</Button>
                <ApiCard />
                
            </form>
        </div>
    )
}

export default AddDoc