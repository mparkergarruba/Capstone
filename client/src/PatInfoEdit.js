import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Container, Input, Message } from 'semantic-ui-react';

function PatInfoEdit({ pat, setPat }) {
    const [formState, setFormState] = useState({})

    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const newFormObj = {
            address,
            phone,
            first_name,
            last_name,
            email
        }
        
        fetch(`/patients/${pat.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFormObj),
        })
        .then((r) => r.json())
        .then((data) => setPat(data))
        .then(navigate('/patient/profile'))
    }
    
    const {address, phone, first_name, last_name, email} = formState

    function handleFormChange(e) {
        const {name, value} = e.target
        setFormState((prevState) => ({...prevState, [name]:value}))
    }

    return(
        <div>
            <h1>Edit Information</h1>

            <Container>
            
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                <label htmlFor="first_name">First Name</label>
                <Input onChange={handleFormChange} type="text" id="first_name" name="first_name" placeholder={pat.first_name} ></Input>
                </Form.Field>
                <Form.Field>
                <label htmlFor="last_name">Last Name</label>
                <Input onChange={handleFormChange} type="text" id="last_name" name="last_name" placeholder={pat.last_name} ></Input>
                </Form.Field>
                <Form.Field>
                <label htmlFor="address">Address</label>
                <Input onChange={handleFormChange} type="text" id="address" name="address" placeholder={pat.address} ></Input>
                </Form.Field>
                <Form.Field>
                <label htmlFor="phone">Phone</label>
                <Input onChange={handleFormChange} type="integer" id="phone" name="phone" placeholder={pat.phone} ></Input>
                </Form.Field>
                <Form.Field>
                <label htmlFor="email">Email</label>
                <Input onChange={handleFormChange} type="text" id="email" name="email" placeholder={pat.email} ></Input>
                </Form.Field>
                <Button color='blue' type="submit">Submit Changes</Button>

            </Form>

            </Container>
        </div>
    )
}

export default PatInfoEdit