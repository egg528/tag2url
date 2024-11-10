class QuotesController < ApplicationController
  def today
    quote = Quote.where(quote_type: params[:quote_type]).order('RANDOM()').first

    render json: { quote_content: quote.content, quote_author: quote.author}, status: 200
  end
end
