import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Redux/actions';

function ReduxComponent() {
    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    return (
        <>
            {counter}
            <Button type="button" variant='outline-success' onClick={()=>dispatch(increment())}>+</Button>
            <Button type="button" variant='outline-danger' onClick={()=>dispatch(decrement())}>-</Button>
        </>
    )
}

export default ReduxComponent;