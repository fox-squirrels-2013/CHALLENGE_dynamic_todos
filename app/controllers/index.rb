get '/' do
  @todos = Todo.all :order => :id
  p @todos.first
  erb :index
end

post '/create' do
  Todo.create params[:todo]
  redirect '/'
end

post '/:id/complete' do
  t = Todo.find(params[:id])
  t.complete = !t.complete
  t.save
  redirect '/'
end

delete '/:id/delete' do
  Todo.find(params[:id]).delete
  redirect '/'
end