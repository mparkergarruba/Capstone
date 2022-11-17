Rails.application.routes.draw do
  
  resources :notes
  resources :appointments, only: [:index, :show, :create, :update, :destroy]
  resources :practitioners_notes
  resources :practitioners, only: [:index, :show, :create, :update]
  resources :patients, only: [:index, :show, :update]

  post '/login', to: 'sessions#create'
  post '/docin', to: 'sessions#create_doc'
  post '/signup', to: 'patients#create'
  delete '/logout', to: 'sessions#destroy'
  delete '/docout', to: 'sessions#destroy_doc'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
