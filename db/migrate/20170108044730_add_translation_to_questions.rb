class AddTranslationToQuestions < ActiveRecord::Migration[5.0]
  def change
    add_column :questions, :translation, :string
  end
end
