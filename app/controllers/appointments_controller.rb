class AppointmentsController < ApplicationController

    def index
        render json: Appointment.all, status: :ok
    end 

    def create
        appmt = @current_pat.appointments.create!(app_params)
        render json: appmt, status: :created
    end

    def update
        appmt = Appointment.find(params[:id])
        appmt.update(update_params)
        render json: appmt, status: :ok
    end

    def destroy
        appmt = Appointment.find(params[:id])
        appmt.destroy
        head :no_content
    end

    private
        def app_params
            params.permit(:start_time, :practitioner_id)
        end

        def update_params
            params.permit(:confirmed)
        end
end
