class PractitionersNoteSerializer < ActiveModel::Serializer
  attributes :id, :practitioner_id, :patient_id, :notes, :practitioner
  has_one :practitioner
  has_one :patient
  has_many :notes
end
