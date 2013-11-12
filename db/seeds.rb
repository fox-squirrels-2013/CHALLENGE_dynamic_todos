require 'faker'

3.times do
  Todo.create! task: Faker::Lorem.sentence
end