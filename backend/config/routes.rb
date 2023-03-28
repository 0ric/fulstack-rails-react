Rails.application.routes.draw do
 # namspace é o nome da pasta 
 # resources pega todo o conteudo do controller

  namespace :api do
    namespace :v1 do
        resources :travels
    end
  end

end
