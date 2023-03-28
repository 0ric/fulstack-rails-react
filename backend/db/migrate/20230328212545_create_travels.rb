class CreateTravels < ActiveRecord::Migration[7.0]
  def change
    create_table :travels do |t|
      t.string :nome
      t.datetime :data
      t.float :price
      t.text :desc

      t.timestamps
    end
  end
end
