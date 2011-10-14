class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.float :price
      t.integer :stock
      t.string :author

      t.timestamps
    end
  end
end
