import '../App.css';
import { Button,Accordion ,AccordionSummary ,AccordionDetails,Typography  } from '@mui/material'
import { useState, useEffect } from 'react';
import { List as Listd, Select as Selectd } from 'antd';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Ifbl_handler_list_item from '../Components/ifbl_handler_list_item';
import No_ifbl_list_item from '../Components/no_ifbl_list_item';



export default function Ifbl() {

    const axios = require('axios').default;


    const [handler_error_list, update_handler_error_list] = useState([]);
    const [no_ifbl, update_no_ifbl] = useState([]);
    const [handler_count, setHandlerCount] = useState([])


    let tempSet = new Set();
    const { Option } = Selectd;
    let filterListChildren = [];

    return (
        <header className='App-header'>
            <div className="App">
                <Button
                    variant='contained'
                    onClick={() => {
                        axios.get('http://localhost:26951/api/IfblPrd?action=handler_error')
                            .then((response) => {
                                update_handler_error_list(response.data);

                                tempSet.clear();
                                filterListChildren = [];
                               
                                for (let i = 0; i < response.data.length; i++) {
                                    tempSet.add(response.data[i].HANDLERNAME);
                                }

                                
                                let count = 1;
                                tempSet.forEach((value) =>
                                {
                                    filterListChildren.push(<Option key={count}>{value}</Option>);
                                    count++;
                                })

                            }).catch((error) => {
                                console.log(error);
                            })
                        axios.get('http://localhost:26951/api/IfblPrd?action=no_ifbl')
                            .then((response) => {
                                update_no_ifbl(response.data);

                            }).catch((error) => {
                                console.log(error);
                            })

                            axios.get('http://localhost:26951/api/IfblPrd?action=handler_count')
                            .then((response) => {
                                setHandlerCount(response.data)

                            }).catch((error) => {
                                console.log(error);
                            })

                    }}

                >
                    Click Here To Fetch IFBL Data
      </Button>
                <ifbl_handler_list_item data = {handler_error_list[0]} />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}
                >
                    <p
                        style={{
                            alignSelf: 'start',

                        }}
                    >Handler Error Count: {handler_error_list.length}</p>
                    <p
                        style={{
                            alignSelf: 'end',

                        }}

                    >No IFBL Count: {no_ifbl.length}</p>
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        fontSize: 15,
                        alignItems: 'center'

                    }}
                >
                    <p
                        style={{ alignSelf: 'center' }}

                    >Handler Error</p>
                    <Listd
                        style={{
                            display: 'flex',
                            overflowY: 'scroll',
                            maxHeight: 300,
                            width: '75%',
                            margin: 20,
                            alignSelf: 'center'
                        }}

                        dataSource={handler_error_list}
                        renderItem={item =>
                            <Ifbl_handler_list_item data = {item} />
                        }
                    />
                    <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        
                        id="panel1a-header">
                        
                        <p>
                            Handlers Count
                        </p>
                        </AccordionSummary>
                        <AccordionDetails>
                            
                          {handler_count.map(item =>{
                              return <div
                              style = {{display: 'flex', flexDirection: 'row', gap: 15}}
                              ><p>{item.HANDLERNAME}: </p><p>  {item.ERRORNUMBER}</p></div>
                          })}

                        </AccordionDetails>


                    </Accordion>

                    
                    <p
                        style={{ alignSelf: 'center' }}
                    >No IFBL</p>

                    <Listd
                        style={{
                            overflow: 'scroll',
                            height: 300,
                            width: '75%',
                            margin: 25,
                            alignSelf: 'center'

                        }}

                        dataSource={no_ifbl}
                        renderItem={item =>

                            <No_ifbl_list_item data = {item} />
                            
                        }
                    />
                </div>
                                    

            </div>



        </header>

    );

}
