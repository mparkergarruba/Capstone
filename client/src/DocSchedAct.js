

function DocSchedAct({ onSched, doc }) {

    const schedDis = onSched.map((apmt) => {
        return (
            <div>
                <h6>{apmt.patient.first_name} {apmt.patient.last_name} has a confirmed appointment at:</h6>
                <p>{apmt.start_time} with: Dr. {doc.last_name}</p>
            </div>
        )
    })

    return(
        <div>
           {schedDis} 
        </div>
    )
}

export default DocSchedAct