class Project < ApplicationRecord
  has_one_attached :data
  belongs_to :pipeline_type
end
