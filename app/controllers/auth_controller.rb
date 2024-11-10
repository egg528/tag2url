# frozen_string_literal: true

class AuthController < ApplicationController
  def authenticate
    cookies[:access_token] = {
      value: params[:access_token],
      expires: 1.hour.from_now
    }

    redirect_to "/cat_motivation"
  end
end
