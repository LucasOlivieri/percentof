import React, { useState, useEffect } from 'react'
import { Container, Form, Button, FloatingLabel } from 'react-bootstrap'

export const MainScreen = () => {

    const [total, setTotal] = useState(100)
    const [amount, setAmount] = useState(10)
    const [result, setResult] = useState(10)

    const setFinalResult = (e) => {
        setResult(100 * amount / total)
    }

    useEffect(() => {
        setFinalResult()
    }, [total, amount])

    return (
        <Container>
            <Container className={(total == 0 ? 'resultzero' : 'resultright')}>
                <br />
                <h1 className='text-center'>{(total == 0) ? `No se puede dividir por 0.`
                    : (<>
                    <b>{amount == 0 ? '0' : amount}</b> es el <b>{result}</b>% de <b>{total}</b>.</>)}
                </h1>
                <br />
            </Container>
            <br />

            <Form>
                <Form.Group
                >
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Cantidad"
                        className="mb-3"
                    ><Form.Control
                            autoFocus
                            type='number'
                            name='amount'
                            placeholder='Cantidad'
                            defaultValue={amount}
                            onChange={e => setAmount(e.target.value)}
                        /></FloatingLabel>
                </Form.Group>
                <Form.Group
                >
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Total"
                        className="mb-3"
                    ><Form.Control
                            type='number'
                            name='total'
                            placeholder='Total'
                            defaultValue={total}
                            onChange={e => setTotal(e.target.value)}
                        /></FloatingLabel>
                </Form.Group>
            </Form>
        </Container>
    )
}