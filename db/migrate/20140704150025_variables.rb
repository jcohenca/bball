class Variables < ActiveRecord::Migration
  def change
    create_table :variables do |t|
      t.string :combo
      t.timestamps
    end
  end
end
