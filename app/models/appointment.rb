class Appointment < ApplicationRecord
  belongs_to :practitioner
  belongs_to :patient
end
