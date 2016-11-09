class Api::PhotosController < ApplicationController

  def create
  end

  def index
    if params[:pageType] === "feed"
      array = current_user.followees.map do |followee|
        followee.id
      end
      array.push(current_user.id)
      @photos = Photo.all.where(user_id: array)
    elsif
      @photos = Photo.all.where.not(user_id: current_user.id)
    end
  end

  private
  def photos_params
    params.require(:photos).permit(:image_url, :title, :description)
  end
end
