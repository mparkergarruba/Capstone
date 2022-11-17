class NoteSerializer < ActiveModel::Serializer
  attributes :id, :note
  has_one :practitioners_note
end
