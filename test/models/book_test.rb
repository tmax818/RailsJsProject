require 'test_helper'

class BookTest < ActiveSupport::TestCase
  def setup
    @genre = Genre.create(name: "Test")
    @book = Book.new(author: "Test Author", title: "Test Title", genre_id: @genre.id)
  end

  test "should be valid" do
    assert @book.valid?
  end

  test "title should be present" do
    @book.title = "   "
    assert_not @book.valid?
  end

  test "author should be present" do
    @book.author = "   "
    assert_not @book.valid?
  end

end
