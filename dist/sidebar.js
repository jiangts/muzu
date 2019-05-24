$(function() {
  $('.tell-a-story').click(function() {
    $('#exampleModal .modal-body').html('<p>@steph: whatever html you want</p>')
  });

  $('.container button').click(function() {
    $('#exampleModal .modal-body').html('<p>@steph: update the html in the modal given the button that was pressed (see line 2)</p>')
  });
})
