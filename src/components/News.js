import React, { useState } from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader'
const { Text, Title } = Typography;
const { Option } = Select
const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'


const News = ({ simplified }) => {
    const { data } = useGetCryptosQuery(100)
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
    const count = simplified ? 10 : 100
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count })
    if (!cryptoNews?.value) return <Loader />
    return (
        <div>

            {!simplified && (
                <Col span={24}>
                    <Select showSearch className="select-news" placeholder="Select a Crypto" optionFilterProp="children"
                        onChange={(value) => setNewsCategory(value)} filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value='Cryptocurrency'></Option>
                        {data?.data?.coins.map((coin, index) => <Option value={coin.name} key={index}>{coin.name}</Option>)}

                    </Select>

                </Col>
            )}
            <Row gutter={[24, 24]}>
                {
                    cryptoNews?.value.map((news, i) => (
                        <Col xs={24} sm={12} key={i}>
                            <Card hoverable className="news-card">
                                <a href={news.url} target="_blank" rel="noreferrer">
                                    <div className="news-image-container">
                                        <Title className="news-title" level={4}>
                                            {news.name}

                                        </Title>
                                        <img className="img" src={news?.image?.thumbnail?.contentUrl || demoImage} alt='news' />

                                    </div>
                                    <p>
                                        {`${news.description.substring(0, 100)}...`}
                                    </p>
                                    <div>
                                        <div className="provider-container">
                                            <div>
                                                <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} />
                                                <Text className="provider-name">{news.provider[0]?.name}</Text>
                                            </div>
                                            <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                                        </div>

                                    </div>

                                </a>

                            </Card>

                        </Col>
                    ))
                }

            </Row>
        </div>
    )
}

export default News
