import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

export default function Body_Card() {
    const Data = [
        {
            img: "https://images.pexels.com/photos/775707/pexels-photo-775707.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "potato",
            content: "It is Potato"
        },
        {
            img: "https://images.pexels.com/photos/373019/pexels-photo-373019.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Tomato",
            content: "It is Tomato"
        },
        {
            img: "https://images.pexels.com/photos/128420/pexels-photo-128420.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Tomato",
            content: "It is Tomato"
        },
        {
            img: "https://images.pexels.com/photos/175415/pexels-photo-175415.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Onion",
            content: "It is Onion"
        },
        {
            img: "https://images.pexels.com/photos/7214784/pexels-photo-7214784.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Apple",
            content: "It is Apple"
        },
        {
            img: "https://images.pexels.com/photos/2894205/pexels-photo-2894205.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Watermelon",
            content: "It is Watermelon"
        },
    ]
    return (
        <>
            <Container>
                <Row>
                    {Data.map((e, i) => (
                        <Col key={i} md={4} >
                            <Card style={{ width: '18rem' }} className='m-3'>
                                <Card.Img variant="top" src={e.img} style={{ height: '200px', objectFit: 'cover' }} />
                                <Card.Body>
                                    <Card.Title>{e.name}</Card.Title>
                                    <Card.Text>{e.content}</Card.Text>
                                    <Button variant="primary">Buy</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}
