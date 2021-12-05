import {List as Listd} from 'antd'



export default function Ifbl_handler_list_item(props)
{

    const {data} = props;

    return(
        <Listd.Item
        key = {data.$extid}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    margin: 15,
                                    gap: '15px',
                                    backgroundColor: '#474e5c',
                                   
                                }}

                            >

                                <p style={{ margin: 15 }}>
                                    {data.HANDLERNAME}
                                </p>

                                <p style={{ margin: 15 }}>
                                    {data.ACTIONCODE}
                                </p>
                                <p
                                    style={{
                                        overflowX: 'scroll',
                                        width: 300,
                                        maxHeight: 200,
                                        overflowY: 'scroll',
                                        margin: 15
                                    }}
                                >
                                    {data.ERRORMSG}
                                </p >
                                <p style={{ margin: 15 }}>
                                    {data.APPJOBID}
                                </p>
                            </Listd.Item>

    )

}