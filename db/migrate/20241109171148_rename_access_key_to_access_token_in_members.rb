class RenameAccessKeyToAccessTokenInMembers < ActiveRecord::Migration[7.1]
  def change
    rename_column :members, :access_key, :access_token
  end
end
