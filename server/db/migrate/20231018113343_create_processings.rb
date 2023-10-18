class CreateProcessings < ActiveRecord::Migration[7.1]
  def change
    create_table :processings do |t|
      t.datetime :start_at
      t.datetime :end_at
      t.references :project, null: false, foreign_key: true
      t.integer :status
      t.json :pipeline

      t.timestamps
    end
  end
end
