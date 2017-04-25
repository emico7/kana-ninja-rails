class AddEndOfLevelToQuestion < ActiveRecord::Migration[5.0]
  def change
    add_column :questions, :end_of_level, :boolean, default: false
  end
end
