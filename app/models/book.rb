class Book < ApplicationRecord
  validates :author_first, presence: true
  validates :title, presence: true, uniqueness: {case_sensitive: false}

  has_many :reviews
  has_many :users, through: :reviews

  accepts_nested_attributes_for :reviews


  scope :order_by_title, -> {order("title")}
  scope :order_by_author, -> { order("author_last")}



end
