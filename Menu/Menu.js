/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

window.addEventListener('load', (e) => {
  

const menu = document.querySelector('.menu-button');
const header = document.querySelector('header');

function createMenu(arrayItem){
  const menu1 = document.createElement('div');
  const UL1 = document.createElement('ul')


menuItems.forEach(menuItems => {
  const LI = document.createElement('li')
  const UL = document.createElement('ul')
  UL1.appendChild(LI);
});

menu.appendChild(UL1);

menu.classList.add('menu');


// function createMenu(cb){

// const menubox = document.createElement('div');
// const UL = document.createElement('ul');

menu.addEventListener('click', function(){
  menubox.classList.toggle('.menu-open');
})
return menu;
}

header.appendChild(createMenu(menuItems))

});

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  createElement for div and ul

  then create iterator function (forEach) and do createElement for menuItems (li)



  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>


  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
