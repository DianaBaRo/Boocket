class AddDefaultValueToLikes < ActiveRecord::Migration[6.0]
  def change
    change_column :books, :likes, :integer, :default => 0
  end
end
