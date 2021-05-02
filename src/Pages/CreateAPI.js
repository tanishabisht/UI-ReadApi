import {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import {NavLink} from 'react-router-dom'
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



const CreateAPI = () => {

    const classes = useStyles()

    const [reqField, setReqField] = useState('')
    const handleReqFieldChange = e => setReqField(e.target.value)

    return (
        <div className='container' style={{marginTop:'3rem', height:'75vh'}}>
            <h1 className='formHeader'>Create API</h1>
            
            <FormControl variant="outlined" className={classes.textfield}>
                <InputLabel id="http-type">HTTP Type ...</InputLabel>
                <Select labelId="http-type" label='HTTP Type ...' 
                    value={reqField} onChange={handleReqFieldChange} >
                    <MenuItem value={'get'}>GET</MenuItem>
                    <MenuItem value={'post'}>POST</MenuItem>
                    <MenuItem value={'put'}>PUT</MenuItem>
                    <MenuItem value={'patch'}>PATCH</MenuItem>
                    <MenuItem value={'delete'}>DELETE</MenuItem>
                </Select>
            </FormControl>

            <TextField className={classes.textfield} id="link" label="Link ..." variant="outlined" />

            <FormControl variant="outlined" className={classes.textfield}>
                <InputLabel id="reqField">Request Type ...</InputLabel>
                <Select labelId="reqField" label='Request Type ...' // id="reqField"
                    value={reqField} onChange={handleReqFieldChange} >
                    <MenuItem value={'files'}>Files</MenuItem>
                    <MenuItem value={'params'}>Params</MenuItem>
                    <MenuItem value={'queries'}>Queries</MenuItem>
                    <MenuItem value={'header'}>Header</MenuItem>
                    <MenuItem value={'body'}>Body</MenuItem>
                </Select>
            </FormControl>

            <TextField className={classes.textfield} id="reqVal" label="Request Value ..." variant="outlined" multiline />
            <TextField className={classes.textfield} id="reqBody" label="Response Body ..." variant="outlined" multiline />
            <NavLink to="/adddocs">
                <Button variant="contained" color="primary" className={classes.addbutton} >ADD API</Button>  
            </NavLink>          
        </div>
    )
}

export default CreateAPI