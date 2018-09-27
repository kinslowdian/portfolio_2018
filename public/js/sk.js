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

	displayList.nav = document.querySelector("nav");
	displayList.GFXburger = document.querySelector(".nav-gfx-burger");
	displayList.GFXclose = document.querySelector(".nav-gfx-close");
	displayList.burger = document.querySelector(".nav-burger");
	displayList.navMin = document.querySelector(".nav-min");

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
	// CLOSE
	if(nav_unit.inUse)
	{
		nav_unit.inUse = false;

		displayList.nav.classList.remove("nav-min-use");
		displayList.navMin.classList.remove("nav-min-show");

		displayList.GFXburger.classList.add("nav-gfx-delay");
		displayList.GFXclose.classList.remove("nav-gfx-delay");

		displayList.GFXburger.classList.remove("nav-gfx-hide");
		displayList.GFXclose.classList.add("nav-gfx-hide");
	}

	// OPEN
	else
	{
		nav_unit.inUse = true;

		displayList.nav.classList.add("nav-min-use");
		displayList.navMin.classList.add("nav-min-show");

		displayList.GFXclose.classList.add("nav-gfx-delay");
		displayList.GFXburger.classList.remove("nav-gfx-delay");


		displayList.GFXclose.classList.remove("nav-gfx-hide");
		displayList.GFXburger.classList.add("nav-gfx-hide");
	}
}
