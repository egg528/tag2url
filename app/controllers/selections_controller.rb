# frozen_string_literal: true

class SelectionsController < ApplicationController
  before_action :set_member, only: [:create]
  def create
    if @member.selections.where(created_at: Date.today.all_day).first.blank?
      @member.selections.create!(quote_type: params[:quote_type])
    end
  end

  private

  def set_member
    @member = Member.find_by(access_token: cookies[:access_token])
    unless @member
      render json: { error: 'Member not found' }, status: :not_found
    end
  end
end
