class Patient < ApplicationRecord
    has_many :practitioners_notes
    has_many :appointments
    has_many :practitioners, through: :appointments
    has_many :practitioners, through: :practitioners_notes

    has_secure_password

    PASSWORD_REQUIREMENTS = /\A
  (?=.{8,})          # Must contain 8 or more characters
  (?=.*\d)           # Must contain a digit
  (?=.*[a-z])        # Must contain a lower case character
  (?=.*[A-Z])        # Must contain an upper case character
  (?=.*[[:^alnum:]]) # Must contain a symbol
/x

    validates :email, uniqueness: true
    validates :password, format: { with: PASSWORD_REQUIREMENTS }, on: :create
end
