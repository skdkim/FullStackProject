@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :image_url, :user, :description
  end
end
