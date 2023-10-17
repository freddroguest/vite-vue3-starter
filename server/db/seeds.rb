# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

PipelineType.create title: "Classification", description: "AI classification involves employing advanced algorithms to analyze data and categorize elements based on specific characteristics."
PipelineType.create title: "Survival analysis", description: "Survival models in AI utilize advanced algorithms to assess and predict the time until a specific event occurs, such as a patient's survival after a medical diagnosis. These models play a crucial role in medical research and personalized treatment strategies."

