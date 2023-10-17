class CreatePipelineTypes < ActiveRecord::Migration[7.1]
  def change
    create_table :pipeline_types do |t|
      t.string :title
      t.string :description

      t.timestamps
    end
  end
end
