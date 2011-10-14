class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title
      t.integer :stock
      t.string :author
      t.decimal :price

      t.timestamps
    end
  end
end
