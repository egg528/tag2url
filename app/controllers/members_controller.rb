class MembersController < ApplicationController
  before_action :set_member, only: [:update]

  def update
    if @member.update(nickname: params[:nickname])
      render json: @member, status: :ok
    else
      render json: @member.errors, status: :unprocessable_entity
    end
  end

  private

  def set_member
    @member = Member.find_by(id: params[:id], access_key: cookies[:access_token])
    unless @member
      render json: { error: 'Member not found' }, status: :not_found
    end
  end
end