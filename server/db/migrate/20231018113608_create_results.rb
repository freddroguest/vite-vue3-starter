class CreateResults < ActiveRecord::Migration[7.1]
  def change
    create_table :results do |t|
      t.references :processing, null: false, foreign_key: true
      t.json :computed_metric
      t.string :ml_model_name
      t.json :ml_model_parameters

      t.timestamps
    end
  end
end
