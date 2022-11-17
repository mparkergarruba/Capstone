# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_09_09_205308) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.datetime "start_time"
    t.bigint "practitioner_id", null: false
    t.bigint "patient_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "confirmed"
    t.index ["patient_id"], name: "index_appointments_on_patient_id"
    t.index ["practitioner_id"], name: "index_appointments_on_practitioner_id"
  end

  create_table "notes", force: :cascade do |t|
    t.string "note"
    t.bigint "practitioners_note_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["practitioners_note_id"], name: "index_notes_on_practitioners_note_id"
  end

  create_table "patients", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.integer "age"
    t.string "email"
    t.string "password_digest"
    t.string "address"
    t.bigint "phone"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "practitioners", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "practitioners_notes", force: :cascade do |t|
    t.bigint "practitioner_id", null: false
    t.bigint "patient_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["patient_id"], name: "index_practitioners_notes_on_patient_id"
    t.index ["practitioner_id"], name: "index_practitioners_notes_on_practitioner_id"
  end

  add_foreign_key "appointments", "patients"
  add_foreign_key "appointments", "practitioners"
  add_foreign_key "notes", "practitioners_notes"
  add_foreign_key "practitioners_notes", "patients"
  add_foreign_key "practitioners_notes", "practitioners"
end
