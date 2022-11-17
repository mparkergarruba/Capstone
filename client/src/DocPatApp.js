import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from 'react';

function DocPatApp({ pats, docs, onDeleteApp, onUpdateApp }) {
    const [formState, setFormState] = useState({})
    const [appmts, setAppmts] = useState([])

    let navigate = useNavigate()
    let params = useParams()
    
    const {confirmed} = formState
    
    
    const pat = pats.find((pat) => parseInt(pat.id) === parseInt(params.id))
    
    useEffect(() => {
        setAppmts(pat.appointments)
    }, [])
    
    
    function handleSubmit(e) {
        e.preventDefault()
        
        console.log(e.target[0].value)
        if(e.target[0].value === "Deny") {
            fetch(`/appointments/${e.nativeEvent.target[0][2].id}`, {
                method: "DELETE"
            })
            .then(navigate(`../../docpage/patients/notes/${params.id}/write`))
            onDeleteApp(e.nativeEvent.target[0][2].id)
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

    if (!docs) {
        return(
            <div></div>
        )
    }else {

        const requestedDisplay = appmts.filter((appo) => (appo.confirmed !== true))
        const confirmedDisplay = appmts.filter((appo) => (appo.confirmed === true))

        const confirmedMap = confirmedDisplay.map((ap) => {
            const doc = docs.find((doc) => doc.id === ap.practitioner_id)
            return(
                <div>
                    <p>{ap.start_time} with: Dr. {doc.last_name}</p>
                </div>
            )
        })

        const patAppsMap = requestedDisplay.map((apmt) => {
            const doc = docs.find((doc) => doc.id === apmt.practitioner_id)
            return (
                <div>
                    <p>{apmt.start_time} with: Dr. {doc.last_name}</p>
                    <form onSubmit={handleSubmit} className="form" >
                        <label htmlFor="confirmed">Confirm? </label>
                        <select onChange={handleFormChange} id="confirmed" name="confirmed" >
                        <option>Select One</option>
                        <option value={true}>Confirm</option>
                        <option id={apmt.id} value={null}>Deny</option>
                        </select>

                        <button color='violet' type="submit">Submit Decision</button>

                    </form>
                </div>
            )
        })
        
        return(
            <div>
                <h3>Appointments for: {pat.first_name} {pat.last_name}</h3>
                <h4>Requesting Confirmation</h4>
                {patAppsMap}
                <h4>Confirmed</h4>
                {confirmedMap}
            </div>
        )
    }    
}

export default DocPatApp