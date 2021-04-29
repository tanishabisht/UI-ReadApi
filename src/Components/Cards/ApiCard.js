import './cards.scss'
import { makeStyles } from '@material-ui/core/styles'
import {Accordion, AccordionSummary, AccordionDetails, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import purple from '@material-ui/core/colors/purple'


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        marginBottom: theme.spacing(1),
        backgroundColor: '#7FA7F1',
        color: '#fff'
    }
}))



const ApiCard = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>

          <Accordion className={classes.heading}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" >
                <div className='api_header'>
                    <span style={{backgroundColor:'#618CDB'}} className='httpTypeColor'>GET</span>
                    <span>/user</span>
                    <span>To get list of Users</span>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <div className='api_body'>
                    <span>HEADERS</span>
                    <span><span style={{backgroundColor:'#618CDB'}} className='reqVal'>Authorizarion</span></span>
                    <span className='resBody'> [siids, sdjsjdsk, sdsldjk] asdsdw, kuwadhi asdsdw, kuwadhiadwedqw </span>
                </div>
            </AccordionDetails>
          </Accordion>

        </div>
    )
}

export default ApiCard