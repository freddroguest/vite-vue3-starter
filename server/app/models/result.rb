class Result < ApplicationRecord
  belongs_to :processing
  has_one_attached :ml_model
  
end
