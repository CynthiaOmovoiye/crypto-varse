import React, {useState, useEffect} from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card,Row, Col, Input } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'
const Cryptocurrencies = ({simplified}) => {
    const count = simplified ? 10:100
    const { data: cryptoList, isFetching } = useGetCryptosQuery(count)
    const [cryptos, setCryptos] = useState([])

    const handleChange =(e)=>{
        const filteredData = cryptoList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(e.target.value.toLowerCase()))  
        setCryptos(filteredData)
    }
    useEffect(() => {
        setCryptos(cryptoList?.data?.coins)
     
      

    }, [cryptoList])
    if (isFetching) return 'Loading'
    return (
        <>
        
        {!simplified && (<div className="search-crypto">
            <Input placeholder="Search Cryptocurrency" onChange={handleChange}/>
        </div>)}
        <Row gutter={[32,32]} className="crypto-card-container">
            {cryptos?.map((currenncy)=>(
                <Col xs={24} sm={12} lg={6} className="crpto-card" key={currenncy.id}>
                    <Link to={`/crypto/${currenncy.id}`}>
                        <Card className="crypto-card" title={`${currenncy.rank}.${currenncy.name}`}
                        extra={<img className='crypto-image' src={currenncy.iconUrl} alt="cyptoimage"/>}
                        hoverable
                        >
                            <p>Price: {millify(currenncy.price)}</p>
                            <p>Market Cap: {millify(currenncy.marketCap)}</p>
                            <p>Daily Change: {millify(currenncy.change)}</p>

                        </Card>
                    
                    </Link>

                </Col>
            ))}

        </Row>
        </>
    )
}

export default Cryptocurrencies
