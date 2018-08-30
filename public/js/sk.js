// DEBUG
var trace = function(msg){ console.log(msg); };

var displayList;

function pageLoad_init()
{
	// trace("pageLoad_init();");

	experienceUpdate();
	nav_init();
}

function experienceUpdate()
{

}

function nav_init()
{
	displayList = {};

	displayList.header = document.querySelector("header");
	displayList.footer = document.querySelector("footer");
}

function request_backToTop(event)
{
	displayList.header.scrollIntoView({behavior: 'smooth'});
}

function request_contact(event)
{
	displayList.footer.scrollIntoView({behavior: 'smooth'});
}
