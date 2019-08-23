import React from 'react'
import { Container } from 'react-bootstrap';
import './index.css'

const Heading =  (props) => {
        return (
            <Container fluid>
                <h1 className="headingText">
                    {props.text}
                </h1>
            </Container>

        )
}

export default Heading