class CreateProjects < ActiveRecord::Migration[7.1]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :description
      t.references :pipeline_type, null: true, foreign_key: true
      t.json :pipeline

      t.timestamps
    end
  end
end
