import { makeStyles } from '@material-ui/core/styles'
import {Accordion, AccordionSummary, AccordionDetails} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import './cards.scss'


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        backgroundColor: '#7FA7F1',
        color: '#fff',
        margin: theme.spacing(1)
    }
}))



const ApiCard = ({id, httpType, link, info, reqHeader, reqVal, resBody, darkColor, lightColor}) => {

    const classes = useStyles()

    return (
        <div className={classes.root}>

          <Accordion className={classes.heading} style={{backgroundColor:`${lightColor}`}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" >
                <div className='api_header'>
                    <span style={{backgroundColor:`${darkColor}`}} className='httpTypeColor'>{httpType}</span>
                    <span>{link}</span>
                    <span>{info}</span>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <div className='api_body'>
                    <span>{reqHeader}</span>
                    <span><span style={{backgroundColor:`${darkColor}`}} className='reqVal'>{reqVal}</span></span>
                    <span className='resBody'>{resBody}</span>
                </div>
            </AccordionDetails>
          </Accordion>

        </div>
    )
}

export default ApiCard