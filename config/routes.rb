Rails.application.routes.draw do
  scope "(:locale)", locale: /en|vi/ do
    root "static_pages#home"
    get "static_pages/home"
    get "static_pages/help"
    namespace :admin do
      root to: "static_pages#index"
      resources :static_pages
    end
  end
end
