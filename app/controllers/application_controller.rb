class ApplicationController < ActionController::Base
  def health_check
    render json: {
      status: :ok,
      description: "You Know, for Operation"
    }
  end
end
