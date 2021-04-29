import {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button } from '@material-ui/core'
import AddIcon from '../Images/iconAdd.svg'
import DelIcon from '../Images/iconDelete.svg'
import {NavLink} from 'react-router-dom'
import './pages.scss'



const useStyles = makeStyles(theme => ({
    textfield: {
        width:'100%',
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(2)
    },
    addbutton: {
        marginTop: theme.spacing(3)
    }
}))



const CreateModel = () => {

    const classes = useStyles()




    var initialSchemaVal = { name:'', type:'', dummyExample:''}

    const [schemaArr, setSchemaArr] = useState([initialSchemaVal])

    const addSchemaField = () => {
        const schemaArrVar = [...schemaArr]
        schemaArrVar.push(initialSchemaVal)
        setSchemaArr(schemaArrVar)
    }

    var delSchemaField = fid => {
        const schemaArrVar = [...schemaArr]
        schemaArrVar.splice(fid, 1)
        setSchemaArr(schemaArrVar)
    }




    return (
        <div className='container createmodel_container'>
            <h1 className='formHeader'>Create Model</h1>
            <TextField className={classes.textfield} id="http-type" label="Model Name ..." variant="outlined" />
            
            <h2 className='formHeader'>
                Schema
                <img onClick={addSchemaField} className='crudIcon' src={AddIcon} alt='add icon'/>
            </h2>
            
            {schemaArr.map((schema, fid) => {
                return (
                    <div className='d-flex justify-content-between' key={fid}>
                        <TextField className={classes.textfield} id="schemaName" label="Schema Name ..." variant="outlined" />
                        <TextField className={classes.textfield} id="schemaType" label="Schema Type ..." variant="outlined" />
                        <TextField className={classes.textfield} id="dummyExample" label="Schema Dummy Example ..." variant="outlined" />
                        <img onClick={() => delSchemaField(fid)} className='crudIcon' src={DelIcon} alt='delete icon'/>
                    </div>
                )
            })}

            <NavLink to="/adddocs">
                <Button variant="contained" color="primary" className={classes.addbutton}>ADD MODEL</Button>  
            </NavLink>
                      
        </div>
    )
}

export default CreateModel