class ApplicationController < ActionController::Base
  def default_url_options
    { host: ENV['SE_HEROKU_DOMAIN'] || "localhost:3000" }
  end
end