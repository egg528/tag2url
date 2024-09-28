class QuotesController < ApplicationController
  def show
    if session[:quote_date] != Date.today.to_s
      session[:quote_date] = Date.today.to_s
      session[:quote_id] = Quote.order("RANDOM()").first.id
    end

    @quote = Quote.find(session[:quote_id])
  end
end
