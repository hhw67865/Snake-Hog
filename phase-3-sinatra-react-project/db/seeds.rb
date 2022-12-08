puts "🌱 Seeding spices..."
User.destroy_all
Score.destroy_all

puts "creating users..."
4.times do
    User.create(
        username: Faker::Name.first_name.downcase,
        password: rand(1000000..9999999),
        name: Faker::Name.first_name
        )
end

puts "creating scores..."

20.times do
    Score.create(
        user_id: User.all.sample.id,
        score: rand(0..6)
    )
end

puts "✅ Done seeding!"
