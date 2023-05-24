//----------------navbar sticky Js----------------------
const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});

//----------------navbar sticky Js----------------------
var menu = document.querySelector('#menu-icon');
var navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};

//----------------about section Js----------------------
var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-contents');

function openTab(tabname){
    for(tabLink of tabLinks){
        tabLink.classList.remove('active-link');
    }
    for(tabContent of tabContents){
        tabContent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab')
}

var sidemen = document.getElementById('sidemenu');
function openmenu(){
    sidemen.style.right="0";
}
function closemenu(){
    sidemen.style.right="-200px";
}

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'right'})

sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact,.progress,.services',{delay:200, origin:'bottom'})



      