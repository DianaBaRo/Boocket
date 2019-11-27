class Book < ApplicationRecord
   validates :title, :author, :info, presence: true
end
