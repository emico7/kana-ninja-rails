Rails.application.routes.draw do

  resources :questions

  get 'about' => 'menu#about'

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'menu#index'
end
