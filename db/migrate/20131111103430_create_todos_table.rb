class CreateTodosTable < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :todo_content
      t.boolean :completed, default: false
    end
  end
end
