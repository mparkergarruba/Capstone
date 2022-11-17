class NotesController < ApplicationController

    def create
        prac_note = @current_doc.practitioners_notes.find_by(patient_id: params[:patient_id])
        if prac_note
            prac_note.notes.create!(note_params)
            render json: prac_note, status: :ok
        else 
            prac_note = @current_doc.practitioners_notes.create!(prac_params)
            prac_note.notes.create!(note_params)
            render json: prac_note, status: :ok
        end
    end

    private
        def prac_params
            params.permit(:patient_id)
        end

        def note_params
            params.permit(:note)
        end
end
