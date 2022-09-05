# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(username: "Quratulain" , password: "password")
User.create(username: "Marium" , password: "password")
User.create(username: "Laiba" , password: "password")
User.create(username: "Javeria" , password: "password")
User.create(username: "Asad" , password: "password")

Message.create(body: "Hello how are you", user: User.find_by(username: "Quratulain"))
Message.create(body: "Hi how are you doing?", user: User.find_by(username: "Marium"))
Message.create(body: "Have a nice day", user: User.find_by(username: "Laiba"))
Message.create(body: "Good luck", user: User.find_by(username: "Javeria"))
