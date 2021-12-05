import {List as Listd} from 'antd'

export default function No_ifbl_list_item (props)
{

    const {data} = props;

    return(
        <Listd.Item
        key = {data.ORDERNUMBER}
        >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: 'row',
                                        justifyContent: 'space-around',
                                        backgroundColor: '#474e5c',
                                        margin: 15

                                    }}
                                >
                                    <p
                                        style={{}}
                                    >
                                        {data.ORDERNUMBER}
                                    </p>
                                    <p>{data.CREATIONTIME_TM}</p>

                                    <p>{data.PAKA_STATUS}</p>
                                </div>
                            </Listd.Item>

    )
}