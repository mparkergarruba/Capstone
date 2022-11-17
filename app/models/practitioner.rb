class Practitioner < ApplicationRecord
    has_many :practitioners_notes
    has_many :appointments
    has_many :patients, through: :appointments
    has_many :patients, through: :practitioners_notes
    has_secure_password

    PASSWORD_REQUIREMENTS = /\A
  (?=.{8,})          # Must contain 8 or more characters
  (?=.*\d)           # Must contain a digit
  (?=.*[a-z])        # Must contain a lower case character
  (?=.*[A-Z])        # Must contain an upper case character
  (?=.*[[:^alnum:]]) # Must contain a symbol
/x

    validates :username, uniqueness: true
    validates :password, format: { with: PASSWORD_REQUIREMENTS }, on: :create
end
