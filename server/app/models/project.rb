class Project < ApplicationRecord
  has_one_attached :data
  belongs_to :pipeline_type, optional: true
  has_many :processings
end
