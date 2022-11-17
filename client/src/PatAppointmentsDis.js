

function PatAppointmentsDis({ pat, patAppointments }) {


    const patAppsMap = patAppointments.map((apmt) => {
        return (
            <div>
                <p>{apmt.start_time} with: Practitioner {apmt.practitioner.last_name}</p>
            </div>)
    })

    return(
        <div>
            <h4>Requested Appointments</h4>
            {patAppsMap}
            </div>
    )
}

export default PatAppointmentsDis