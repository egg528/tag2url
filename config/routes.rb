Rails.application.routes.draw do
  get "health-check" => "application#health_check"
end
