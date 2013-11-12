get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/add_todo' do
  p '*'*50
  p "Inside the post /add_todo route!"
  @todo = Todo.create!(params)
  # redirect '/'
  content_type :json
  {:todo_content => @todo.todo_content, :completed => false}.to_json
  # erb :index
end

