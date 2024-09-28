Rails.application.routes.draw do
  get "quotes/show"
  get "health-check" => "application#health_check"

  match "/404", to: "errors#not_found", via: :all
end
