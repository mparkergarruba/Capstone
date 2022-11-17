class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :start_time, :practitioner_id, :confirmed
  has_one :practitioner
  has_one :patient
end
