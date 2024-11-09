Rails.application.routes.draw do
  # cat motivation
  get 'cat_motivation', to: 'cat_motivation#index'

  # member
  patch 'members/:id/update', to: 'members#update'

  # auth
  get 'auth', to: 'auth#authenticate'

  # health check
  get "up" => "rails/health#show", as: :rails_health_check
end
