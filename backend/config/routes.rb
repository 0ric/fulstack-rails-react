Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'travels/index'
      get 'travels/show'
      get 'travels/create'
      get 'travels/update'
      get 'travels/destroy'
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
