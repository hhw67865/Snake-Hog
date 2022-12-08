
class UsersController < ApplicationController
    set :default_content_type, 'application/json'

    def get_secret_key
      "147"
    end

    def generate_token(user_id)
      JWT.encode({user_id: user_id}, get_secret_key)
    end

    def decode_token(token)
      JWT.decode(token, get_secret_key)[0]["user_id"]
    end


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
        
        user = User.create(params)
        token = generate_token(user.id)
        {token: token }.to_json
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

    # get "/users/:username" do
    #   User.find_by(username: params[:username]).to_json
    # end

    post "/login" do
      if User.find_by(username: params[:username])
        user = User.find_by(username: params[:username])
        if user.password == params[:password]
          token = generate_token(user.id)
          { token: token , user: user }.to_json
        else
          nil.to_json
        end
      else
        nil.to_json
      end
    end

    get "/profile" do
      user_id = decode_token(env["HTTP_TOKEN"])
      user = User.find(user_id)
      user.to_json
    end

  end
