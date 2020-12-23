import React from 'react'
import { Button, Col, Row, ListGroup, Image, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message'
import CheckOutSteps from '../components/CheckOutSteps'

const PlaceOrderScreen = () => {
    const cart = useSelector(state => state.cart)

    const addDecimal = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2);
    }

    const priceOfItems = (cart.cartItems.reduce((acc, item) => (acc + item.price * item.qty), 0).toFixed(2));
    const vat = addDecimal(Number(priceOfItems - (priceOfItems / 1.15)).toFixed(2));
    
    cart.itemPrice = addDecimal(priceOfItems - cart.vat);
    cart.shippingPrice = priceOfItems > 100 ? 0 : 100;
    cart.vat = addDecimal(Number(priceOfItems - (priceOfItems / 1.15)).toFixed(2));;
    cart.totalPrice = (
        Number(cart.itemPrice) + 
        Number(cart.vat) + 
        Number(cart.shippingPrice)
    ).toFixed(2);
    
    const placeOrderHandler = () => {
        console.log('order')
    } 
    return (
        <>
            <CheckOutSteps step1 step2 step2 step3 step4 />
            <Row>
                <Col md={8}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>Shipping</h2>
                            <p>
                                <strong>Address: </strong>
                                { cart.shippingAddress.address}, { cart.shippingAddress.city }, { cart.shippingAddress.postalCode }, { cart.shippingAddress.country}
                            </p>
                        </ListGroup.Item>
                        
                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <strong>Method: </strong>
                            {cart.paymentMethod}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>OrderItems </h2>
                            {cart.cartItems.length === 0 ? <Message>You cart is empty</Message> : (
                                <ListGroup variant='flush'>
                                    {cart.cartItems.map((item, index) => (
                                        <ListGroup.Item key={index}>
                                            <Row>
                                                <Col md={1}>
                                                    <Image src={item.image} alt={item.name} fluid rounded corners/>
                                                </Col>
                                                <Col>
                                                    <Link to={`/product${item.product}`}>
                                                        {item.name}
                                                    </Link>
                                                </Col>
                                                <Col md={4}>
                                                    {item.qty} * €{item.price} = €{item.qty * item.price} 
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Order Summary</h2>
                            </ListGroup.Item>
                        
                            <ListGroup.Item>
                                <Row>
                                    <Col>Items</Col>
                                    <Col>€{cart.itemPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping</Col>
                                    <Col>€{cart.shippingPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Vat</Col>
                                    <Col>€{cart.vat}</Col>
                                </Row>
                            </ListGroup.Item>
                        
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total</Col>
                                    <Col>€{cart.totalPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button type='button' className='btn-block' disabled={cart.cartItems === 0} onClick={placeOrderHandler}>Place Order</Button>
                            </ListGroup.Item>
                        
                        </ListGroup>

                    </Card>
                </Col>
            </Row>
            
        </>
    )
}

export default PlaceOrderScreen
