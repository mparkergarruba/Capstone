class CreatePractitionersNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :practitioners_notes do |t|
      t.references :practitioner, null: false, foreign_key: true
      t.references :patient, null: false, foreign_key: true

      t.timestamps
    end
  end
end
