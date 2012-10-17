class ApplicationController < ActionController::Base
  protect_from_forgery
  
  before_filter :set_new_user
  
  private
    
    def set_new_user
      if (!session[:seen_user])
        @new_user = true
        session[:seen_user] = true
      else
        @new_user = false
      end
    end
  
  
end
