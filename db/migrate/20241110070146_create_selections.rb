class CreateSelections < ActiveRecord::Migration[7.1]
  def change
    create_table :selections do |t|
      t.references :member, null: false, foreign_key: true
      t.string :type

      t.timestamps
    end
  end
end
