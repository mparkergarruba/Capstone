import { Route, Routes } from "react-router-dom";
import PatAppNav from "./PatAppNav";
import PatAppointmentsDis from "./PatAppointmentsDis";
import PatAppointmentsRequest from "./PatAppointmentsRequest";
import { useEffect, useState } from 'react';

function PatAppointments({ pat }) {
    const [patApmt, setPatApmt] = useState(null)

    useEffect(() => {
        fetch("/appointments")
        .then((r) => {
          if (r.ok) {
            r.json().then((apmt) => {
                const patAppointments = apmt.filter((appn) => (appn.patient.id === pat.id))
                setPatApmt(patAppointments)}
            )
          }
        })
    }, [])


    if (!patApmt) {
        return(
            <div></div>
        )
    }else{

        function newApmtBoat(newApmt) {
            setPatApmt((prev) => [...prev, newApmt])
        }
        
        const confirmedApmts = patApmt.filter((appn) => (appn.confirmed === true))
        const requestedApmts = patApmt.filter((appn) => (appn.confirmed === null))

        const confirmedApmtsMap = confirmedApmts.map((apmt) => {
            return (
                <div>
                    <p>{apmt.start_time} with: Practitioner {apmt.practitioner.last_name}</p>
                </div>)
        })

        return(
            <div>
                <PatAppNav />
                <h4>Confirmed Appointments</h4>
                {confirmedApmtsMap}
                <Routes>
                    <Route path='/' element={<PatAppointmentsDis patAppointments={requestedApmts} pat={pat} />} />
                    <Route path='/request' element={<PatAppointmentsRequest newApmtBoat={newApmtBoat} />} />
                </Routes> 
            </div>
        )
    }
}

export default PatAppointments