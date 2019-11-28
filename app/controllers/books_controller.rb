class BooksController < ApplicationController
    before_action :set_book, except: [:index, :new, :create]

    def index
        books = Book.all
        render json: books, each_serializer: BookSerializer
    end

    def new
        @book = Book.new
    end

    def create
        @book = Book.new(book_params)
        if @book.save
            render json: @book, status: 201
        else
            render :new
        end
    end

    def show
        render json: @book, status: 200
    end

    def destroy
        @book.destroy
    end

    private
    def book_params
        params.require(:book).permit(:title, :author, :info, :image)
    end

    def set_book
        @book = Book.find_by_id(params[:id])
    end

end
