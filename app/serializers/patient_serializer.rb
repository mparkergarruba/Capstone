class PatientSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :age, :email, :address, :phone
  has_one :practitioners_notes
  has_many :appointments
end
