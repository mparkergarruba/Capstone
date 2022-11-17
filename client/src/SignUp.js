import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Container, Input, Message, Icon } from 'semantic-ui-react';

function SignUp({ setPat }) {
    const [formState, setFormState] = useState({})

    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const newFormObj = {
            address,
            phone,
            first_name,
            last_name,
            email,
            age,
            password,
            password_confirmation
        }
        
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFormObj),
        })
        .then((r) => r.json())
        .then((data) => setPat(data))
        .then(navigate('/patient'))
    }
    
    const {address, password, phone, age, first_name, last_name, email, password_confirmation} = formState

    function handleFormChange(e) {
        const {name, value} = e.target
        setFormState((prevState) => ({...prevState, [name]:value}))
    }

    return(
        <div>
            <h1>Create a Patient Account</h1>

            <Container>
            
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                <label htmlFor="first_name">First Name</label>
                <Input onChange={handleFormChange} type="text" id="first_name" name="first_name" ></Input>
                </Form.Field>
                <Form.Field>
                <label htmlFor="last_name">Last Name</label>
                <Input onChange={handleFormChange} type="text" id="last_name" name="last_name" ></Input>
                </Form.Field>
                <Form.Field>
                <label htmlFor="address">Address</label>
                <Input onChange={handleFormChange} type="text" id="address" name="address" ></Input>
                </Form.Field>
                <Form.Field>
                <label htmlFor="phone">Phone</label>
                <Input onChange={handleFormChange} type="integer" id="phone" name="phone" ></Input>
                </Form.Field>
                <Form.Field>
                <label htmlFor="email">Email</label>
                <Input onChange={handleFormChange} type="text" id="email" name="email" ></Input>
                </Form.Field>
                <Form.Field>
                <label htmlFor="age">Age</label>
                <Input onChange={handleFormChange} type="integer" id="age" name="age" ></Input>
                </Form.Field>
                <Message>
                    <Message.Header className="password">Please choose a password with at least:</Message.Header>
                        <Message.List className="password_list">
                            <Message.Item>8 characters</Message.Item>
                            <Message.Item>1 capitalized letter</Message.Item>
                            <Message.Item>1 number</Message.Item>
                            <Message.Item>1 special character</Message.Item>
                        </Message.List>
                </Message>
                <Form.Field>
                <label htmlFor="password">Password</label>
                <Input onChange={handleFormChange} type="password" id="password" name="password" ></Input>
                </Form.Field>
                <Form.Field>
                <label htmlFor="password_confirmation">Password Confirmation</label>
                <Input onChange={handleFormChange} type="password" id="password_confirmation" name="password_confirmation"></Input>
                </Form.Field>

                <Button color='blue' type="submit">
                <Icon name='user plus' />
                    Submit</Button>

                </Form>

                </Container>
        </div>
    )
}

export default SignUp