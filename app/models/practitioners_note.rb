class PractitionersNote < ApplicationRecord
  belongs_to :practitioner
  belongs_to :patient
  has_many :notes, dependent: :destroy
end
