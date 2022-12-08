class UsersController < ApplicationController
    set :default_content_type, 'application/json'

    get "/users" do
      User.all.to_json
    end

    get "/users/:id/highestscores" do
      User.find(params[:id]).scores.order(score: :desc).to_json
    end

    # get "/users/:id" do
    #   User.find(params[:id]).to_json
    # end

    post "/users" do
      if User.find_by(username: params[:username])
        nil.to_json
      else
        User.create(params).to_json
      end
    end

    patch "/users/:id" do
      User.find(params[:id]).update(params)
      User.find(params[:id]).to_json
    end

    delete "/users/:id" do
      User.find(params[:id]).scores.destroy_all
      User.find(params[:id]).destroy
    end

    get "/users/:username" do
      User.find_by(username: params[:username]).to_json
    end

  end
