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
	
}

function displayCount() { 
	var itemCount = $('#container tr').length; 
	$('#size').html(itemCount);
	
	if (itemCount == 0) {
    	$('#container-header').addClass('hidden');
	}else {
    	$('#container-header').removeClass('hidden');
	};
}
