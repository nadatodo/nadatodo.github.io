// ()=function, all lines end with ;
// need to add script file at end of html file, before the closing </body> tag
// alert('test'); 

function	alertName()	{
	alert('Hello ' + name); 	
}

alertName ('Shane');
alertName ('Ben');

// this allows you to control the javascript using css

/*
$('body').on('click', function() {
	$('body').css({
	'backgroundColor': 'red'

});
});

// find .test-class, when it's clicked, the following will occur...
$('.test-class').on('click', function () {
	$('.test-class').css({
	'fontSize': '36px'
});
});

$('body').on('shaneTestEvent', function() {
	alert('test');

});

// when you click on an image, this will occur...
$('img').on('click', function() {
	$('body').trigger('shaneTestEvent');
});

*/
// refers to html:         <img src="" class="big-image"/>

$('#myModal').on('show.bs.modal', function () {
	$('.big-image').attr('src', 'http://ironsummitmedia.github.io/startbootstrap-freelancer/img/portfolio/cabin.png');  
});