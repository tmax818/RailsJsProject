class SessionsController < ApplicationController
  def new
  end

  def create

    if params[:session]
      user = User.find_by(email: params[:session][:email])
      valid_reg_user(user)
    else
      user = User.create_by_google(auth)
      valid_google_user(user)
    end

  end

  def destroy
    log_out
    flash[:danger] = "Goodbye, thank you for using Library Tracker!"
    redirect_to root_path
  end

  private

  def auth
    request.env['omniauth.auth']
  end
end
