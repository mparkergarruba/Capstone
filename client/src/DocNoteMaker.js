import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button, Form, Container, Label, Input } from 'semantic-ui-react'

function DocNoteMaker({ patsNotesHelper, pats }) {
    const [formState, setFormState] = useState({})
    const [errors, setErrors] = useState(null)

    let navigate = useNavigate();
    let params = useParams()

    const pat = pats.filter((pat) => parseInt(pat.id) === parseInt(params.id))
    console.log(pat)

    function handleSubmit(e) {
        e.preventDefault();
        const newFormObj = {
            patient_id: params.id, 
            note
        }
        
        fetch("/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFormObj),
        })
        .then((r) => {
        if (r.ok) {
            r.json().then((data) => patsNotesHelper(params.id, data))
            .then(navigate(`/docpage/patients/notes/${params.id}`))
        } else {
            r.json().then((err) => setErrors(err.errors));
        }
        })}  
    
    const {note} = formState
    


    function handleFormChange(e) {
        const {name, value} = e.target
        setFormState((prevState) => ({...prevState, [name]:value}))
    }

    return(
        <div>
            <Container>
            <h3>New Note for: {pat[0].first_name} {pat[0].last_name}</h3>
            <Form onSubmit={handleSubmit} className="form">
                <Form.Field>
                <label htmlFor="note">New Note</label>
                <Input onChange={handleFormChange} type="text" id="note" placeholder="note" name="note" ></Input>
                </Form.Field>
                <Button color='blue' type="submit">Make note</Button>

            </Form>
            </Container>
        </div>
    )

}

export default DocNoteMaker