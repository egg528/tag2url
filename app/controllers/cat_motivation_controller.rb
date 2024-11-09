# frozen_string_literal: true

class CatMotivationController < ApplicationController
  before_action :authenticate_member
  layout "default"

  def index
    @props = { member_id: @member.id, member_nickname: @member.nickname }
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
