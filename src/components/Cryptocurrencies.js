import React, {useState} from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card,Row, Col, Input } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'
const Cryptocurrencies = () => {
    const { data: cryptoList, isFetching } = useGetCryptosQuery()
    const [cryptos, setCryptos] = useState(cryptoList?.data?.coins)
    console.log(cryptos)
    return (
        <>
        <Row gutter={[32,32]} className="crypto-card-container">
            {cryptos.map((currenncy)=>(
                <Col xs={24} sm={12} lg={6} className="crpto-card" key={currenncy.id}>
                    <Link to={`/crypto/${currenncy.id}`}>
                        <Card className="crypto-card" title={`${currenncy.rank}.${currenncy.name}`}
                        extra={<img className='crypto-image' src={currenncy.iconUrl}/>}
                        hoverable
                        >
                            <p>Price: {millify(currenncy.price)}</p>

                        </Card>
                    
                    </Link>

                </Col>
            ))}

        </Row>
        </>
    )
}

export default Cryptocurrencies
