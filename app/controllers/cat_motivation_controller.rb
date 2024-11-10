# frozen_string_literal: true

class CatMotivationController < ApplicationController
  before_action :authenticate_member
  layout "default"

  def index
    if @selection.blank?
      return @props = {
        member_id: @member.id,
        member_nickname: @member.nickname,
        selected_quote_type: '',
        quote_content: '',
        quote_author: ''
      }
    end

    # TODO: 명언 선정 방식 수정 필요
    quote = Quote.where(quote_type: today_select_type).order('RANDOM()').first

    @props = {
      member_id: @member.id,
      member_nickname: @member.nickname,
      selected_quote_type: @selection.quote_type,
      quote_content: quote.content,
      quote_author: quote.author
    }
  end

  private

  def authenticate_member
    token = cookies[:access_token]
    @member = Member.find_by(access_token: token)

    unless @member
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end

    @selection = @member.selections.where(created_at: Date.today.all_day)
  end
end
