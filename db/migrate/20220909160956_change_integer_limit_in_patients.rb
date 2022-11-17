class ChangeIntegerLimitInPatients < ActiveRecord::Migration[6.1]
  def change
    change_column :patients, :phone, :integer, limit: 8
  end
end
