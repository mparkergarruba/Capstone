class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  before_action :authorize

  private

  def authorize
    @current_pat = Patient.find_by(id: session[:pat_id])
    @current_doc = Practitioner.find_by(id: session[:doc_id])

    render json: { errors: "Not authorized" }, status: :unauthorized unless @current_pat || @current_doc
  end

  def render_invalid(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found(er)
    render json: {error: er.message }, status: :not_found 
  end

end
