import {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import AddIcon from '../Images/iconAdd.svg'
import DelIcon from '../Images/iconDelete.svg'
import './pages.scss'



const useStyles = makeStyles(theme => ({
    textfield: {
        width:'100%',
        marginBottom: theme.spacing(2)
    },
    addbutton: {
        marginTop: theme.spacing(3)
    }
}))



const CreateModel = () => {

    const classes = useStyles()

    const [reqField, setReqField] = useState('')
    const handleReqFieldChange = e => setReqField(e.target.value)

    return (
        <div className='container' style={{marginTop:'3rem', height:'75vh'}}>
            <h1 className='formHeader'>Create Model</h1>
            <TextField className={classes.textfield} id="http-type" label="Model Name ..." variant="outlined" />
            <h2 className='formHeader'>Schema<img className='crudIcon' src={AddIcon} alt='add icon' /></h2>

            <FormControl variant="outlined" className={classes.textfield}>
                <InputLabel id="reqField">Request Field ...</InputLabel>
                <Select labelId="reqField" label='Request Field ...' // id="reqField"
                    value={reqField} onChange={handleReqFieldChange} >
                    <MenuItem value={'files'}>Files</MenuItem>
                    <MenuItem value={'params'}>Params</MenuItem>
                    <MenuItem value={'queries'}>Queries</MenuItem>
                    <MenuItem value={'header'}>Header</MenuItem>
                    <MenuItem value={'body'}>Body</MenuItem>
                </Select>
            </FormControl>

            <TextField className={classes.textfield} id="reqVal" label="Field Generated based on Request Field ..." variant="outlined" multiline />
            <TextField className={classes.textfield} id="reqBody" label="Response Body ..." variant="outlined" multiline />
            <Button variant="contained" color="primary" className={classes.addbutton} >ADD API</Button>            
        </div>
    )
}

export default CreateModel