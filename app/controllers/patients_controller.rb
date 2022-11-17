class PatientsController < ApplicationController
    
    skip_before_action :authorize, only: [:create]


    def index
        render json: Patient.all, includes: :notes, status: :ok
    end 

    def create
        patient = Patient.create!(pat_params)
        session[:pat_id] = patient.id
        render json: patient, status: :created
    end

    def show
        render json: @current_pat, status: :ok
    end

    def update
        patient = Patient.find(params[:id])
        patient.update!(pat_up_params)
        render json: patient, status: :accepted
    end

    private
        def pat_params
            params.permit(:first_name, :last_name, :age, :address, :phone, :email, :password, :password_confirmation)
        end

        def pat_up_params
            params.permit(:address, :phone, :email, :first_name, :last_name)
        end
end
