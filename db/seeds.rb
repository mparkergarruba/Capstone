# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
puts 'Seeding'

Practitioner.create(
    first_name: 'Catherine',
    last_name: 'Parker',
    username: 'happyneedle',
    password: 'Not4Real?',
    password_confirmation: 'Not4Real?'
)
10.times do
    Patient.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        address: Faker::Address.full_address,
        age: rand(18..99),
        phone: Faker::PhoneNumber.cell_phone,
        email: Faker::Internet.unique.email,
        password: 'Abc123!!',
        password_confirmation: 'Abc123!!'
    )
end

puts "Done"
