Rails.application.routes.draw do
  # cat motivation
  get 'cat_motivation', to: 'cat_motivation#index'

  # quote
  get 'quotes/today', to: 'quotes#today'

  # member
  patch 'members/:id', to: 'members#update'

  # selection
  post 'selections', to: 'selections#create'

  # auth
  get 'auth', to: 'auth#authenticate'

  # health check
  get "up" => "rails/health#show", as: :rails_health_check
end
