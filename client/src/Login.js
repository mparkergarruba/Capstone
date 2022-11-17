import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Container, Icon, Input } from 'semantic-ui-react'

function Login({ setPat, pat }) {
    const [formState, setFormState] = useState({})
    const [errors, setErrors] = useState(null)

    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const newFormObj = {
            email,
            password
        }
        
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFormObj),
        })
        .then((r) => {
        if (r.ok) {
            r.json().then((data) => setPat(data))
            .then(navigate('/patient'))
        } else {
            r.json().then((err) => setErrors(err.errors));
        }
        })}  
    
    const {email, password} = formState


    function handleFormChange(e) {
        const {name, value} = e.target
        setFormState((prevState) => ({...prevState, [name]:value}))
    }

    return(
        <div className='Login'>
            <h1>Patient Log In</h1>
            <Container >
            <Form onSubmit={handleSubmit} className="form">
                <Form.Group widths='equal'>
                <Form.Field>
                <label htmlFor="email">Email</label>
                <Input onChange={handleFormChange} type="text" id="email" placeholder="email" name="email" ></Input>
                </Form.Field>
                <Form.Field>
                <label htmlFor="password">Password</label>
                <Input onChange={handleFormChange} type="password" id="password" placeholder="password" name="password" ></Input>
                </Form.Field>
                </Form.Group>
                <Button color='blue' type="submit">
                <Icon link name='user' />
                    Log In</Button>

            </Form>
            </Container>

            <p>{errors ? <h1>{errors}</h1> : null}</p>
        </div>

    )
}

export default Login