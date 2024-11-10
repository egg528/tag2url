# frozen_string_literal: true

class CatMotivationController < ApplicationController
  before_action :authenticate_member
  layout "default"

  def index
    selected_quote_type = @member.selections.first&.quote_type

    if selected_quote_type.blank?
      return @props = {
        member_id: @member.id,
        member_nickname: @member.nickname,
        selected_quote_type: '',
        quote: '',
      }
    end

    # TODO: 명언 선정 방식 수정 필요
    quote = Quote.where(quote_type: today_select_type).order('RANDOM()').first

    @props = {
      member_id: @member.id,
      member_nickname: @member.nickname,
      selected_quote_type: @member.selections.first&.quote_type,
      quote: `#{quote.content}-#{quote.author}`
    }
  end

  private

  def authenticate_member
    token = cookies[:access_token]
    @member = Member.includes(:selections).where(selections: {created_at: Date.today.all_day}).find_by(access_token: token)

    unless @member
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  end
end
