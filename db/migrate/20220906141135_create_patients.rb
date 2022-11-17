class CreatePatients < ActiveRecord::Migration[6.1]
  def change
    create_table :patients do |t|
      t.string :first_name
      t.string :last_name
      t.integer :age
      t.string :email
      t.string :password_digest
      t.string :address
      t.integer :phone

      t.timestamps
    end
  end
end
