# frozen_string_literal: true

class CatMotivationController < ApplicationController
  before_action :authenticate_member
  layout "default"

  def index
    @hello_world_props = { name: "우석" }
  end

  private

  def authenticate_member
    token = cookies[:access_token]
    @member = Member.find_by(access_token: token)

    unless @member
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  end
end
