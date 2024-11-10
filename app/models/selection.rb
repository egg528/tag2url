class Selection < ApplicationRecord
  belongs_to :member
  enum quote_type: Quote.quote_types
end
