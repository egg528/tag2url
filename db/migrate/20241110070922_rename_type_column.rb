class RenameTypeColumn < ActiveRecord::Migration[7.1]
  def change
    rename_column :quotes, :type, :quote_type
    rename_column :selections, :type, :quote_type
  end
end
