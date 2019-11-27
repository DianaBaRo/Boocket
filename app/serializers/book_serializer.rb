class BookSerializer < ActiveModel::Serializer
    attributes :id, :title, :author, :info, :image
end