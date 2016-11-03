# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: "guest", password: "123123");
User.create(username: "david", password: "123123sdfsdf");
User.create(username: "steve", password: "curryman24");
User.create(username: "jackie", password: "cakeislife");
User.create(username: "missholldoll", password: "theoutbound");
User.create(username: "johnmuir", password: "hiking4life", image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478193569/profile_images/johnmuirprofile.jpg");
User.create(username: "mattwheat", password: "livinglife");
