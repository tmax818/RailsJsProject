class BooksController < ApplicationController
#skip_before_action :verify_authenticity_token

  def index
    if params[:user_id]
      @books = User.find(params[:user_id]).books
      flash.now[:danger] = "You haven't added any books yet!" if @books.empty?
      respond_to do |format|
        format.html {render :index}
        format.json {render json: @books}
      end
    end
  end


  def new
    @book = Book.new
    @book.reviews.build

  end

  def create
    @book = Book.create(book_params)
    render json: @book
    #@book.reviews.last.user = current_user
    # if @book.save
    #   redirect_to @book
    # else
    #   render :new
    # end
  end

  def show
    @book = Book.find(params[:id])
  end

private
  def book_params
    params.require(:book).permit(:title, :author_first, :author_last, reviews_attributes: [:content])
  end

end
