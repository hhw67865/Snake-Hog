class ScoresController < ApplicationController
    set :default_content_type, 'application/json'

    get "/scores" do
      Score.all.to_json
    end

    # get "/scores/:id" do
    #   Score.find(params[:id]).to_json
    # end

    post "/scores" do
      Score.create(params).to_json
    end

    get "/scores/:user_id" do
      Score.find_by(user_id: params[:user_id]).to_json
    end

  end
