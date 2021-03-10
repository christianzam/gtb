Rails.application.routes.draw do
  root 'home#index'
  resources :contacts, only: [:index, :new, :create]
end
