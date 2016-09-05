var selected = "home";

$(document).ready(function(){

	setup();

     $('.navButton').click(function() {
     	if(this.id != 'resume') {
     		navigate(this.id);
     	}
     });
});

function setup() {
	$('#content-about').hide();
	$('#content-projects').hide();
	$('#content-contact').hide();
};

function navigate(id) {
	$('#' + selected).toggleClass('selectedItem');
	$('#' + id).toggleClass('selectedItem');
	$("#content-" + selected).hide();
	$("#content-" + id).show();
	selected = id;
	window.scrollTo(0,0);
};

