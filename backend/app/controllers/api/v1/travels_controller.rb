class Api::V1::TravelsController < ApplicationController
  def index
    @travels = Travel.all
    render json: @travels
  end

  def show
  end

  def create
    @travel = Travel.new(travel_params)
    if @travel.save
      render json: @travel
    else
      render json: {errors: @travel.errors, message: "não foi possivel cadastrar"},status: :unprocessable_entity
    end
  end

  def update
  end

  def destroy
  end

  private
    def travel_params
      params.require(:travel).permit( :nome, :data, :price, :desc)
    end
end
