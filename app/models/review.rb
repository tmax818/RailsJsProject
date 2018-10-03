class Review < ApplicationRecord
  validates :content, presence: true, length: {minimum: 14}

  belongs_to :book
  belongs_to :user


end
