class StaticController < ApplicationController

  def home
  end

  def title
    @books = Book.order_by_title
    respond_to do |format|
      format.html {render :title}
      format.json {render json: @books}
    end
  end

  def author
    @books = Book.order_by_author
  end

end
