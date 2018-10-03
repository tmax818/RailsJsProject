require 'test_helper'

class ReviewTest < ActiveSupport::TestCase

  def setup
    @genre = Genre.create(name: "TestGenre")
    @book = Book.create(author: "Joe Author", title: "Test Title", genre_id: @genre.id)
    @user = User.create(name: "Test User", email: "test@example.com",
    password: "foobar", password_confirmation: "foobar")
    @review = Review.create(content: "a" * 141, user_id: @user.id, book_id: @book.id)
  end

  test "should be valid" do
    assert @review.valid?
  end

  test "content should be present" do
    @review.content = " "
    assert_not @review.valid?
  end

  test "content should be at least 140 characters long" do
    @review.content = "a" * 139
    assert_not @review.valid?
  end

end
