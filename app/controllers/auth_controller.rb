# frozen_string_literal: true

class AuthController < ApplicationController
  def authenticate
    cookies[:access_token] = params[:access_token]

    redirect_to "/cat_motivation"
  end
end
