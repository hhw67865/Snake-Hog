class UsersController < ApplicationController
    set :default_content_type, 'application/json'

    get "/users" do
      User.all.to_json
    end

    # get "/users/:id" do
    #   User.find(params[:id]).to_json
    # end

    post "/users" do
      User.create(params).to_json
    end

    patch "/users/:id" do
      User.find(params[:id]).update(params)
      User.find(params[:id]).to_json
    end

    delete "/users/:id" do
      User.find(params[:id]).destroy
    end

    get "/users/:username" do
      User.find_by(username: params[:username]).to_json
    end

  end
