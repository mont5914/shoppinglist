$(document)

function addItem() {
  var itemText = $('#itemtext').val(); 
  var html = $('<input type="checkbox" name="myCheckbox"> <label>' + itemText  + '</label> <input type="text" name="quantity" size="2"><br/>');
  
  $('#container').append(html);
}

function deleteSelected() {
  var selectedCheckboxes = $('#container').find('[type=checkbox]:checked');
  $.each(selectedCheckboxes, function(index, value) {
    deleteItem(value);
  });
  displayCount();
}

function deleteItem(element) {
	var jqButton = $(element);
	jqButton.parent().parent().remove();
	displayCount();
}

function addTemplatedItem() {
	var itemText = $('#itemtext').val();
	var html = $('#template')
				.html()
				.replace(/{{itemText}}/g, itemText);
	
	$('#container').append(html);
	displayCount();
	$('#container-header').removeClass('hidden');
}

function displayCount() {
	$('#size').html($('#container tr').length);
}
