class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author_first, :author_last, :reviews
end
