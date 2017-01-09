class CreatePreps < ActiveRecord::Migration[5.0]
  def change
    create_table :preps do |t|
      t.string :letters

      t.timestamps
    end
  end
end
