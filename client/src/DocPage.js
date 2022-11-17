import { Route, Routes } from "react-router-dom";
import DocPats from "./DocPats";
import DocPatsNotes from "./DocPatsNotes";
import { useEffect, useState } from 'react';
import DocNoteMaker from "./DocNoteMaker";
import DocPatApp from "./DocPatApp";
import DocSched from "./DocSched";

function DocPage({ doc }) {
    const [pats, setPats] = useState([])
    const [docs, setDocs] = useState(null)
    console.log(pats)

    useEffect(() => {
        fetch("/patients")
        .then((r) => {
          if (r.ok) {
            r.json().then((patients) => setPats(patients));
          }
        });
      }, []);

      useEffect(() => {
        fetch("/practitioners")
        .then((r) => {
          if (r.ok) {
            r.json().then((pracs) => setDocs(pracs));
          }
        });
      }, []);
      

      function patsNotesHelper(id, note) {
        console.log(note)
        console.log(pats)
        const otherPats = pats.filter((pat) => parseInt(pat.id) !== parseInt(id))
        const pat = pats.find((pat) => parseInt(pat.id) === parseInt(id))
        let notePat = []
        function addNote() {
          if (pat.practitioners_notes.length >0 ) {
            notePat = pat.practitioners_notes.map((nt) => {
              if (nt.practitioner_id === doc.id){
                return note
              }
              return nt
            })
            return notePat
          } else {
            notePat = [note]
            return notePat
          }
        }
        addNote()
        const newPat = {...pat, practitioners_notes:notePat}
        const notesHelpedAdded = [...otherPats, newPat]
        setPats(notesHelpedAdded)
      } 

      function onDeleteApp(id, pat_id, note) {
        console.log(id)
        const cleanPats = pats.map((pat) => {
          const appRemoved = pat.appointments.filter((app) => parseInt(app.id) !== parseInt(id))
          const newPat = {...pat, appointments:appRemoved}
          return newPat
        })
        const otherPats = cleanPats.filter((pat) => parseInt(pat.id) !== parseInt(pat_id))
        const pat = cleanPats.find((pat) => parseInt(pat.id) === parseInt(pat_id))
        let notePat = []
        function addNote() {
          if (pat.practitioners_notes.length >0 ) {
            notePat = pat.practitioners_notes.map((nt) => {
              if (nt.practitioner_id === doc.id){
                return note
              }
              return nt
            })
            return notePat
          } else {
            notePat = [note]
            return notePat
          }
        }
        addNote()
        const newPat = {...pat, practitioners_notes:notePat}
        const notesHelpedAdded = [...otherPats, newPat]
        setPats(notesHelpedAdded)
      }
      


      function onUpdateApp(upApp) {
        const updatedPats = pats.map((pat) => {
          const updatedPatApps = pat.appointments.map((appn) => {
            if (appn.id === upApp.id) {
              return upApp
            } else {
              return appn
            }
          })
          const newPat = {...pat, appointments:updatedPatApps}
          return newPat
        })
        console.log(updatedPats)
        setPats(updatedPats)
      }
  
      
      

    return(
        <div>
            <div>
              <h2>Welcome Practitioner Parker</h2>
            </div>
            <Routes>
                <Route path='/patients' element={<DocPats pats={pats} />} />
                <Route path='/schedule/*' element={<DocSched onUpdateApp={onUpdateApp} patsNotesHelper={patsNotesHelper} onDeleteApp={onDeleteApp} pats={pats} doc={doc} />} />
                <Route path='/patients/notes/:id' element={<DocPatsNotes pats={pats} />} />
                <Route path='/patients/notes/:id/write' element={<DocNoteMaker patsNotesHelper={patsNotesHelper} pats={pats} />} />
                <Route path='/patients/appointments/:id' element={<DocPatApp pats={pats} onUpdateApp={onUpdateApp} onDeleteApp={onDeleteApp} docs={docs} />} />
            </Routes> 
        </div>
    )
}
export default DocPage