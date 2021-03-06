@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :image_url, :user, :description, :likers
    json.currentUserLikes photo.likers.include?(current_user) ? true : false
    json.photoLikes photo.likers.length
    json.comments do
      photo.comments.each do |comment|

        json.set! comment.id do
          json.commentor comment.user.username
          json.commentor_id comment.user.id
          json.comment_text comment.comment_text
          json.comment_id comment.id
          json.photoOwner comment.photo.user.id
          json.currentUsersComment comment.user.id === current_user.id ? true : false
        end
      end
    end
  end
  json.likes_count current_user.likes.length
end
