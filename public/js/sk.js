// DEBUG
var trace = function(msg){ console.log(msg); };

var displayList;
var nav_unit;

function pageLoad_init()
{
	nav_init();
}

function nav_init()
{
	displayList = {};

	nav_unit = {};
	nav_unit.inUse = false;
	nav_unit.dataNum = false;
	nav_unit.max = 5;
	nav_unit.pageARR = new Array();

	nav_unit.pageARR.push("projectsui.html");
	nav_unit.pageARR.push("projectsvideo.html");
	nav_unit.pageARR.push("projectsads.html");
	nav_unit.pageARR.push("projectscode.html");

	displayList.header = document.querySelector("header");
	displayList.footer = document.querySelector("footer");

	displayList.nav = document.querySelector("nav");
	displayList.GFXburger = document.querySelector(".nav-gfx-burger");
	displayList.GFXclose = document.querySelector(".nav-gfx-close");
	displayList.burger = document.querySelector(".nav-burger");
	displayList.navMin = document.querySelector(".nav-min");

	for(let i = 0; i < nav_unit.max; i++)
	{
		displayList["navMinBtn" + i] = {};
		displayList["navMinBtn" + i] = document.querySelector(".nav-min-btn" + i);
	}

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

		nav_min_control(false);

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

		nav_min_control(true);

		displayList.nav.classList.add("nav-min-use");
		displayList.navMin.classList.add("nav-min-show");

		displayList.GFXclose.classList.add("nav-gfx-delay");
		displayList.GFXburger.classList.remove("nav-gfx-delay");


		displayList.GFXclose.classList.remove("nav-gfx-hide");
		displayList.GFXburger.classList.add("nav-gfx-hide");
	}
}

function nav_min_control(run)
{
	if(run)
	{
		for(let i = 0; i < nav_unit.max; i++)
		{
			displayList["navMinBtn" + i].addEventListener("click", nav_min_event, false);
		}
	}

	else
	{
		for(let j = 0; j < nav_unit.max; j++)
		{
			displayList["navMinBtn" + j].removeEventListener("click", nav_min_event, false);
		}		
	}
}

function nav_min_event(event)
{
	let delay;

	event.preventDefault();

	nav_unit.dataNum = parseInt(event.target.dataset.num);

	nav_event(null);

	delay = setTimeout(nav_min_apply, 0.4 * 1000);
}

function nav_min_apply()
{
	if(nav_unit.dataNum == (nav_unit.max - 1))
	{
		request_contact(null);
	}

	else
	{
		window.open(nav_unit.pageARR[nav_unit.dataNum], "_self");
	}
}
