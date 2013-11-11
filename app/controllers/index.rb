get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/add_todo' do
  p '*'*50
  p "Inside the post /add_todo route!"
  # @todo = Todo.create(params)
  redirect '/'
end

post '/' do
  p "Inside the post / route!"
end

