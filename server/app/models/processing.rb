class Processing < ApplicationRecord
  belongs_to :project
  has_many :results
  enum :status, [ :waiting, :pending, :finish, :canceled, :error ]

end
