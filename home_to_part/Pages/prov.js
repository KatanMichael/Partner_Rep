import '../App.css';
import { Button,Accordion ,AccordionSummary ,AccordionDetails  } from '@mui/material'


export default function ProvScreen(props)
{

    return (
        <header className='App-header'>
            <div className="App">
            <Button
            variant='contained'

            onClick = {()=>{
                alert("Hello!")
            }}
            >
                Fetch Prov Data
            </Button>

            </div>

            </header>
    )

}