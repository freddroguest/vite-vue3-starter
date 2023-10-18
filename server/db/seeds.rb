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
PipelineType.create  title: "Time Series Forecasting", description: "Time series forecasting in AI involves the use of algorithms to analyze historical data and make predictions about future values based on patterns and trends within the time series data."

Processing.create start_at: nil, end_at: nil, project_id: 1, status: :waiting, pipeline: Project.find(1).pipeline
Processing.create start_at: Time.now, end_at: nil, project_id: 1, status: :pending, pipeline: Project.find(1).pipeline
Processing.create start_at: Time.now, end_at: Time.now+10.minutes, project_id: 1, status: :finish, pipeline: Project.find(1).pipeline
Processing.create start_at: Time.now, end_at: Time.now+2.minutes, project_id: 1, status: :canceled, pipeline: Project.find(1).pipeline

Result.create processing: Processing.find(3), computed_metric: {'accuracy': 0.89776}, ml_model_name: "XGBoost", ml_model_parameters: {'n_estimator': 123, 'random_state': 42, 'learning_rate': 0.925}
Result.create processing: Processing.find(3), computed_metric: {'accuracy': 0.85}, ml_model_name: "XGBoost", ml_model_parameters: {'n_estimator': 83, 'random_state': 42, 'learning_rate': 2}
Result.create processing: Processing.find(3), computed_metric: {'accuracy': 0.86}, ml_model_name: "XGBoost", ml_model_parameters: {'n_estimator': 83, 'random_state': 42, 'learning_rate': 1.5}