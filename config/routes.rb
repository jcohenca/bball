Rails.application.routes.draw do

  root 'variables#index'
  
  get "/r", to: 'variables#r'

  get "/r_no_shotclock", to: 'variables#r_no_shotclock'

  get "/r_shot", to: 'variables#r_shot'

  get "/r_pass", to: 'variables#r_pass'

  resources :plays

end
