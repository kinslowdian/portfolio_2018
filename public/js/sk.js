// DEBUG
var trace = function(msg){ console.log(msg); };

var displayList;
var nav_unit;

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

	nav_unit = {};
	nav_unit.inUse = false;

	displayList.header = document.querySelector("header");
	displayList.footer = document.querySelector("footer");

	GFXburger = document.querySelector(".nav-gfx-burger");
	GFXclose = document.querySelector(".nav-gfx-close");

	displayList.burger = document.querySelector(".nav-burger");

	displayList.burger.addEventListener("click", nav_event, false);
}

function request_backToTop(event)
{
	displayList.header.scrollIntoView({behavior: 'smooth'});
}

function request_contact(event)
{
	displayList.footer.scrollIntoView({behavior: 'smooth'});
}

function nav_event(event)
{
	if(nav_unit.inUse)
	{
		nav_unit.inUse = false;

		GFXburger.classList.add("nav-gfx-delay");
		GFXclose.classList.remove("nav-gfx-delay");

		GFXburger.classList.remove("nav-gfx-hide");
		GFXclose.classList.add("nav-gfx-hide");
	}

	else
	{
		nav_unit.inUse = true;

		GFXclose.classList.add("nav-gfx-delay");
		GFXburger.classList.remove("nav-gfx-delay");


		GFXclose.classList.remove("nav-gfx-hide");
		GFXburger.classList.add("nav-gfx-hide");
	}
}
