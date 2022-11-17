import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import DocSchedAct from './DocSchedAct';
import DocSchedPen from './DocSchedPen';
import { Link } from 'react-router-dom';

function DocSched({pats, doc, onDeleteApp, onUpdateApp, patsNotesHelper}) {
    console.log(pats)
    const docApps = [] 
    function appmts() {
        pats.map((pat) => {
            if (pat.appointments.length > 0) {
                pat.appointments.map((app) => {
                    if (app.practitioner_id === doc.id) {
                        const newApp = {...app, patient:pat}
                        docApps.push(newApp)
                    }
                })
            }
        })
    }
    appmts()
    console.log(docApps)

    const onSched = docApps.filter((appn) => (appn.confirmed === true))
    const pending = docApps.filter((appn) => (appn.confirmed !== true))

    return(
        <div>
            <Link color='violet' to='/docpage/schedule/active'>Schedule</Link>
            <h5>Schedule</h5>
            <Routes>
                <Route path='/active' element={<DocSchedAct doc={doc} onSched={onSched} />} />
                <Route path='/pending' element={<DocSchedPen onDeleteApp={onDeleteApp} patsNotesHelper={patsNotesHelper} onUpdateApp={onUpdateApp} pats={pats} doc={doc} pending={pending} />} />
            </Routes>
        </div>
    )
}

export default DocSched