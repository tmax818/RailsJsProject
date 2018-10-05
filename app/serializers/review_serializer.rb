class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :user, :book
end
