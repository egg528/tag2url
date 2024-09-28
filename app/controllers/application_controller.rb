class ApplicationController < ActionController::Base
  rescue_from ActionController::RoutingError, with: :render_not_found

  def health_check
    render json: {
      status: :ok,
      description: "You Know, for Operation"
    }
  end

  private

  def render_not_found
    render file: "#{Rails.root}/public/404.html", status: :not_found
  end
end
