import { useState } from 'react';
import { Card, Button, Form, Input } from 'semantic-ui-react';

function DocSPMap({ apmt, doc, onDeleteApp, onUpdateApp }) {
    const [formState, setFormState] = useState({})
    const [errors, setErrors] = useState(null)

    const {confirmed, note} = formState

    function handleSubmit(e) {
        e.preventDefault()
        
        console.log(e.target[0].value)
        if(e.target[0].value === "Deny") {
            const newFormObj = {
                patient_id: e.nativeEvent.target[0][1].id, 
                note
            }

            fetch(`/appointments/${e.nativeEvent.target[0][2].id}`, {
                method: "DELETE"
            })
            // .then(navigate(`/../../docpage/patients/notes/${e.nativeEvent.target[0][1].id}/write`))
            
            fetch("/notes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newFormObj),
            })
            .then((r) => {
            if (r.ok) {
                r.json().then((data) => onDeleteApp(e.nativeEvent.target[0][2].id, newFormObj.patient_id, data))
                // .then(navigate(`/docpage/patients/notes/${params.id}`))
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
            })
        }else {
            const newFormObj = {
                confirmed
            }
            
            fetch(`/appointments/${e.nativeEvent.target[0][2].id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newFormObj),
            })
            .then((r) => r.json())
            .then((data) => onUpdateApp(data))
            // .then(navigate('/patient/profile'))
        } 
    }
    

    function handleFormChange(e) {
        const {name, value} = e.target
        setFormState((prevState) => ({...prevState, [name]:value}))
    }

    return (
        <Card>
            <Card.Content>
            <Card.Header>{apmt.patient.first_name} {apmt.patient.last_name} has requested an appointment at:</Card.Header>
            <Card.Content>{apmt.start_time} with: Practitioner {doc.last_name}</Card.Content>
            </Card.Content>
            <Card.Content>
            <Form onSubmit={handleSubmit} className="form" >
                <Form.Field>
                <label htmlFor="confirmed">Confirm? </label>
                <select onChange={handleFormChange} id="confirmed" name="confirmed" >
                <option>Select One</option>
                <option id={apmt.patient.id} value={true}>Confirm</option>
                <option id={apmt.id} value={null}>Deny</option>
                </select>
                { 
                confirmed === "Deny" ? 
                <div>
                    <label htmlFor="note">New Note</label>
                    <Input onChange={handleFormChange} type="note" id="note" placeholder="Note" name="note" ></Input>
                </div>
                    :
                    null
                }
                </Form.Field>

                <Button color='blue' type="submit">Submit Decision</Button>

            </Form>
            </Card.Content>
            <p>{errors ? <h1>{errors}</h1> : null}</p>
        </Card>
    )
}

export default DocSPMap