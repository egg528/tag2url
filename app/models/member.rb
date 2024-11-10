class Member < ApplicationRecord
  has_many :selections, dependent: :destroy
end
