class PractitionersController < ApplicationController
    skip_before_action :authorize, only: [:create]


    def index
        render json: Practitioner.all, ststus: :ok
    end 

    def create
        doc = Practitioner.create!(doc_params)
        session[:doc_id] = doc.id
        render json: doc, status: :created
    end

    def show
        render json: @current_doc, status: :ok
    end

    def update
        doc = Practitioner.find!(params[:id])
        doc.update!(doc_up_params)
        render json: doc, status: :accepted
    end

    private
        def doc_params
            params.permit(:first_name, :last_name, :username, :password, :password_confirmation)
        end

        def doc_up_params
            params.permit(:username)
        end
end
