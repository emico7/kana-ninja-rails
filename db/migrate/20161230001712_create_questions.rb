class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      t.string :image_file_name
      t.string :audio_file_name
      t.string :answer
      t.string :letters
      t.timestamps
    end
  end
end
