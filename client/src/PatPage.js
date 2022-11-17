import { Route, Routes } from "react-router-dom";
import PatNotes from './PatNotes';
import PatInfo from './PatInfo';
import PatForms from './PatForms';
import PatInfoEdit from "./PatInfoEdit";
import PatAppointments from './PatAppointments';

function PatPage({ pat, setPat }) {
    console.log(pat)

    if (!pat) {
        return(
            <div></div>
        )
    } else {
    return(
        <div>
            <h1>Welcome {pat.first_name} {pat.last_name}!</h1>
            <Routes>
                <Route path='/notes' element={<PatNotes pat={pat} />} />
                <Route path='/profile' element={<PatInfo pat={pat}/>} />
                <Route path='/forms' element={<PatForms />} />
                <Route path='/profile/edit' element={<PatInfoEdit pat={pat} setPat={setPat} />} />
                <Route path='/appointments/*' element={<PatAppointments pat={pat} />} />
            </Routes> 
        </div>
    )
    }
}

export default PatPage