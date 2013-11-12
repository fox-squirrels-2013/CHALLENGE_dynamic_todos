$(document).ready(function() {
  function bindEvents() {
    $('#new_todo').on('submit', addTodo)
    $(".todo_list").on('click', deleteOrComplete)
    $(".todo_list").sortable()
    $( ".todo" ).disableSelection();
    $('.fa-angle-double-right').on('click', expandOptions)
  }

  function addTodo(e){
    e.preventDefault()
    var data = $('#new_todo').serialize()
    ajaxReq('/create', 'post', data)
  }

  function deleteOrComplete(e){
    var action = $(e.target).closest('a')[0].className
    if (action === 'complete') { completeTodo(e.target) }
      else if (action === 'delete') { deleteTodo(e.target) }
    }

  function completeTodo(target){
    var toComplete = $(target).closest('.todo')[0].id
    console.log(toComplete)
    var url = '/' + toComplete + '/complete'
    ajaxReq(url, 'post')
  }

  function deleteTodo(target){
    var toDelete = $(target).closest('.todo')[0].id
    var url = '/' + toDelete + '/delete'
    ajaxReq(url, 'delete')
  }

  function ajaxReq(url, type, data){
    // data can be undefined
    $.ajax({
      url: url,
      type: type,
      data: data
    }).done(function(server_data){
      $('body').html(server_data)
    }).fail(function(jqXHR, textStatus, errorThrown){
      console.log("fail" + errorThrown)
    })
  }

  function expandOptions(){
    $('#nav').animate({left: '0%'}, 500, function(){
      $(this).find('i')[0].className = "fa fa-angle-double-left fa-2x"
    })
  }




  bindEvents();
});



// look at this later

// var todoTemplate = $.trim($('#todo_template').html());

// function buildTodo(todoName) {
//     // Creates an jQueryDOMElement from the todoTemplate.
//     var $todo = $(todoTemplate);
//     // Modifies it's text to use the passed in todoName.
//     $todo.find('h2').text(todoName);
//     // Returns the jQueryDOMElement to be used elsewhere.
//     return $todo;
//   }