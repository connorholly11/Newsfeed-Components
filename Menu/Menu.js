/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

// window.addEventListener('load', (e) => {
  

// const menuButton = document.querySelector('.menu-button');
const header = document.querySelector('.header');
const menuButton = document.querySelector('.menu-button');

function createMenu(){
  const menu1 = document.createElement('div');
  const UL1 = document.createElement('ul')
  


menuItems.forEach(menuItems => {
  const LI = document.createElement('li');
  LI.textContent = menuItems;
  UL1.appendChild(LI);
});

menu1.appendChild(UL1);

menu1.classList.add('menu');


// function createMenu(cb){

// const menubox = document.createElement('div');
// const UL = document.createElement('ul');

menuButton.addEventListener('click', function(){
  console.log("Click");
  menu1.classList.toggle('menu--open');
})
return menu1;
}

header.appendChild(createMenu());

// })

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
