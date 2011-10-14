Statement::Application.routes.draw do
  resources :books
  resources :posts

  match 'bb_models/create_from_collection' => 'bb_models#create_from_collection', :as => :bb_collections_create
  match 'bb_models/define_collection' => 'bb_models#define_collection', :as => :bb_collections_define
  match 'bb_models/fetch_collection' => 'bb_models#fetch_collection', :as => :bb_collections_fetch
  match 'bb_models/define_model' => 'bb_models#define_model', :as => :bb_models_define
  match 'bb_models/destroy_model' => 'bb_models#destroy_model', :as => :bb_models_destroy
  match 'bb_models/save_model' => 'bb_models#save_model', :as => :bb_models_save

  match 'bb_views/hello' => 'bb_views#hello', :as => :bb_views_hello
  match 'bb_views/bindings' => 'bb_views#bindings', :as => :bb_views_bindings
  match 'bb_views/book_view' => 'bb_views#book_view', :as => :bb_views_book
  match 'bb_views/shopping' => 'bb_views#shopping', :as => :bb_views_shopping
  match 'bb_views/template' => 'bb_views#template', :as => :bb_views_template

  match 'bb' => 'bb#index', :as => :bb
  match 'bb/slide/:number' => 'bb#slide', :as => :slide

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  root :to => 'bb#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id(.:format)))'
end
