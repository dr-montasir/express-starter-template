/* Textarea (id=image) */
/* Only picture and  codeview */
$('#image').summernote({
	toolbar: ['picture', 'codeview'],
	placeholder: 'Upload an Image',
	tabsize: 2,
	// picture width + 22px
	width: 635,
	height: 400
});

/* Textarea (id=description) */
/* Summernote with all items */
$('#description').summernote({
	toolbar: [
	    // [groupName, [list of button]]
	    ['style', ['fontname', 'bold', 'italic', 'underline', 'clear']],
	    ['font', ['strikethrough', 'superscript', 'subscript']],
	    ['fontsize', ['fontsize', 'fontsizeunit']],
	    ['color', ['color', 'forecolor', 'backcolor']],
	    ['para', ['style', 'ol', 'ul', 'paragraph']],
	    ['height', ['height']],
	    ['insert', ['picture', 'link', 'video', 'table', 'hr']],
	    ['misc', ['fullscreen', 'codeview', 'undo', 'redo', 'help']]
	],
	// All fonts
	fontNames: ['Andalus', 'Arabic Typesetting', 'Arial', 'Arial Black', 'Bookman', 'Calibri', 'Cambria Math', 'Candara', 'Comic Sans MS', 'Courier New', 'Garamond', 'Georgia', 'Impact', 'Merriweather', 'Palatino', 'Roboto', 'Tahoma', 'Verdana'],
	// List of web fonts to be ignored with the fontNamesIgnoreCheck.
	fontNamesIgnoreCheck: ['Andalus', 'Bookman', 'Calibri', 'Cambria Math', 'Candara', 'Garamond', 'Georgia', 'Impact', 'Merriweather', 'Palatino', ' Roboto', 'Tahoma', 'Verdana'],
	// Text area placeholder
	placeholder: 'Add a Description',
	tabsize: 2,
	height: 120
});

/* Change default fontSize */
// $('#description').summernote('fontSize', 80);

// Dropdown toggle in order to use with dropdown table
$('.dropdown-toggle').dropdown();