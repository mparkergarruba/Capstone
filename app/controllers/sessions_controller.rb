class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create, :create_doc]
    def create 
        patient = Patient.find_by(email: params[:email])
        if patient&.authenticate(params[:password])
            session[:pat_id] = patient.id
            render json: patient, status: :ok
        else 
            render json: { errors: 'Invalid email or password' }, status: :unauthorized
        end
    end

    def create_doc
        doc = Practitioner.find_by(username: params[:username])
        if doc&.authenticate(params[:password])
            session[:doc_id] = doc.id
            render json: doc, status: :ok
        else 
            render json: { errors: 'Invalid Practitioner username or password' }, status: :unauthorized
        end
    end

    def destroy
        session.delete :pat_id 
        head :no_content 
    end

    def destroy_doc
        session.delete :doc_id
        head :no_content
    end
end
