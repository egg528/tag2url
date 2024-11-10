class Quote < ApplicationRecord
  enum quote_type: { hard: 'HARD', soft: 'SOFT' }.freeze
end
