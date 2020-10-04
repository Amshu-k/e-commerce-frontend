import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

const UserInput = ({ controlID, label, type, placeholder, errorMessage, required }) => {
    const [value, setValue] = useState('');

    const onChange = (input) => {
        setValue(input)
        console.log(input);
    }

    return (
        <Form.Group controlId={controlID}>
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} placeholder={placeholder} required={required} value={value} onChange={(e) => onChange(e.target.value)} />
            {errorMessage ? <Form.Text className="text-muted">
                {errorMessage}
            </Form.Text> : null}
        </Form.Group>
    )
}

export default UserInput
