Rails.application.routes.draw do
  get "quotes/show"
  get "health-check" => "application#health_check"
end
