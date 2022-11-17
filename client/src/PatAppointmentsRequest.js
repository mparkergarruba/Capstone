import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button, Form, Container, Input, Message } from 'semantic-ui-react';

function PatAppointmentsRequest({ newApmtBoat }) {
    const [formState, setFormState] = useState({})
    const [errors, setErrors] = useState(null)
    const [docs, setDocs] = useState(null)

    let navigate = useNavigate();
    let params = useParams()

    useEffect(() => {
        fetch("/practitioners")
        .then((r) => {
          if (r.ok) {
            r.json().then((pracs) => setDocs(pracs));
          }
        });
    }, []);

    if (!docs) {
        return(
            <div></div>
        )
    }else{

        const docsDisplay = docs.map((doc) => {
            return <option key={doc.id} value={doc.id}>{doc.first_name} {doc.last_name}</option>
        })


        function handleSubmit(e) {
            e.preventDefault();
            const newFormObj = {
                start_time,
                practitioner_id
            }
            
            fetch("/appointments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newFormObj),
            })
            .then((r) => {
            if (r.ok) {
                r.json().then((data) => newApmtBoat(data), (data) => console.log(data))
                .then(navigate('/patient/appointments'))
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
            })}  
        
        const {start_time, practitioner_id} = formState
        


        function handleFormChange(e) {
            const {name, value} = e.target
            setFormState((prevState) => ({...prevState, [name]:value}))
        }

        return(
            <div>
                <Form onSubmit={handleSubmit} className="Form">
                    <Form.Field>
                    <label htmlFor="start_time">Date and Time: </label>
                    <Input onChange={handleFormChange} step='7200' type="datetime-local" id="start_time" placeholder="start_time" name="start_time" ></Input>
                    </Form.Field>
                    <Form.Field>
                    <label htmlFor="practitioner_id">Practitioner: </label>
                    <select onChange={handleFormChange} id="practitioner_id" name="practitioner_id" >
                    <option>Select One</option>
                    {docsDisplay}
                    </select>
                    </Form.Field>

                    <Button color='blue' type="submit">Make request</Button>

                </Form>
                <p>{errors ? <h1>{errors}</h1> : null}</p>
            </div>
        )
    }
}

export default PatAppointmentsRequest