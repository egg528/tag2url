class QuotesController < ApplicationController
  before_action :validate_user
  def show
    if session[:quote_date] != Date.today.to_s
      session[:quote_date] = Date.today.to_s
      session[:quote_id] = Quote.order("RANDOM()").first.id
    end

    @quote = Quote.find(session[:quote_id])
  end

  private

  def validate_user
    access_token = params[:access_token]
    @user = User.find_by(access_token: access_token)

    if @user.nil?
      render plain: "Access Denied", status: :forbidden
    end
  end
end