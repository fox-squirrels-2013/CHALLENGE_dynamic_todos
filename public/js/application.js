$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    // Bind functions which add, remove, and complete todos to the appropriate
    // elements

  }

  //Create functions to add, remove and complete todos
  // $('.add').on('click', function(e){
  //   e.preventDefault();
  //   $.ajax({
  //     url: '/', 
  //     type: 'post'
  //   }).done(function(response){
  //     console.log("Inside done function.");
  //   }).fail(function(){
  //     console.log("Inside fail function.");
  //   })
  // }


  function buildTodo(todoName) {
    // Creates a jQueryDOMelement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }


  bindEvents();
});
