const country_toggle=()=>{  
    let deal=document.getElementById('country');
        deal.classList.toggle('hidden');
}

const show_menu=()=>{
    let menu_list=document.getElementById('menu-list');
    let top_nav=document.getElementById('top-nav');
    let just_logo=document.getElementById('t-lo');
    let menuBars = document.querySelectorAll('.bar');
    menu_list.classList.toggle('hidden');
    top_nav.classList.toggle('bg-white');
    if(top_nav.classList.contains('bg-white')){
      just_logo.classList.remove('text-white');
      just_logo.classList.add('text-[#f36805]');
      top_nav.classList.add('border-b-2');
      menuBars[0].style.transform = 'translateY(6px) rotate(45deg)';
      menuBars[0].style.background='black';
      menuBars[0].style.transition='0.4s';
      menuBars[1].style.opacity = '0';
      menuBars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
      menuBars[2].style.background='black';
      menuBars[2].style.transition='0.4s';
    }else{
      just_logo.classList.add('text-white');
      just_logo.classList.remove('text-[#f36805]'); 
      top_nav.classList.remove('border-b-2');
      menuBars[0].style.transform = 'none';
      menuBars[0].style.background='white';
      menuBars[1].style.opacity = '1';
      menuBars[2].style.transform = 'none';
      menuBars[2].style.background='white';
    }
    let accountDiv = document.getElementById('account');
    // if (window.innerWidth < 768) {
      accountDiv.style.display = 'block';
    // }
}

const account_hover=document.getElementById('account-hover');
let accountDiv = document.getElementById('account');
account_hover.addEventListener('mouseenter', ()=>{
 
      accountDiv.style.opacity = '1';
      setTimeout(()=>{
        accountDiv.style.display = 'block';
      },300)
})

account_hover.addEventListener('mouseleave', ()=>{

  setTimeout(()=>{
    accountDiv.style.opacity = '0';
    //accountDiv.style.display = 'none';
  },300)
})


//swiper
     var swiper = new Swiper(".mySwiper", {
      slidesPerView: 'auto',
      spaceBetween: 5,
      freeMode: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


window.onload = () => {
  let accountDiv = document.getElementById('account');
  if (window.innerWidth >= 768) {
    accountDiv.classList.add = 'hidden';
  }
};

const account=()=>{
  let bar=document.getElementById('account');
  bar.classList.toggle('hidden');
}

//side navbar. makes active when scroll
let sections=document.querySelectorAll('.scroll-act');
let navLinks=document.querySelectorAll('#side-nav li ');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop-10;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id'); // section id

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      document.querySelector('#side-nav li a[href*=' + id + ']').parentNode.classList.add('active');
    }
  });
};

//show and hide items and chevron
const show=( id, chev)=>{  
  let deal=document.getElementById(id);
      deal.classList.toggle('hidden');
let chevron = document.getElementById(chev);
  chevron.classList.toggle('rotate');
}



    //displaying all the products in homepage by fetching data or api
    let dealItems=document.getElementById('deals');
    let createOwn=document.getElementById('way');
    let speciality=document.getElementById('speciality');
    let vegan=document.getElementById('vegan');
    let gluten=document.getElementById('gluten');
    let sides=document.getElementById('sides');
    let dessert=document.getElementById('dessert');
    let drinks=document.getElementById('drinks');
    let wrap=document.getElementById('wrap');

    
    let show_all_products=(x, y)=>{
       x.innerHTML=y.map((val)=>{
        return `
            <div class="product border rounded-xl mx-4 p-4 grid grid-cols-12 mb-4 lg:mx-0 cursor-pointer" id=${val.id} onclick="sub_menu(event)">
                <div class="col-start-1 col-end-7 md:col-start-1 md:col-end-9 lg:col-start-1 lg:col-end-9" id=${val.id} onclick="sub_menu(event)">
                    <h3 class="font-bold lg:text-xl"id=${val.id} onclick="sub_menu(event)">${val.heading}</h3>
                    <p class="mt-2" id=${val.id} onclick="sub_menu(event)">${val.description}</p>
                    <div class="mt-2">
                    ${val.spicy===true?`
                    <button class="border rounded-lg p-[2px]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" class="w-5 fill-current text-red-600 inline-block c-pieIcon--red u-spacingRight--small c-pieIcon c-pieIcon--SpicySmall"><path d="M3.10625 12.7575C2.60892 12.7982 2.10923 12.7157 1.65138 12.5173C1.19353 12.3189 0.791635 12.0107 0.48125 11.62L0.0524998 10.9375L0.81375 10.6488C3.08875 9.77375 4.31375 7.42875 5.32 5.39875C5.81887 4.26018 6.47897 3.19931 7.28 2.24875C7.60697 1.90457 8.00054 1.6305 8.43677 1.44322C8.873 1.25595 9.34277 1.15937 9.8175 1.15937C10.2922 1.15937 10.762 1.25595 11.1982 1.44322C11.6345 1.6305 12.028 1.90457 12.355 2.24875C13.0202 2.93997 13.3917 3.86196 13.3917 4.82125C13.3917 5.78053 13.0202 6.70253 12.355 7.39375C10.5 9.21375 7.20125 11.6812 5.15375 12.3813C4.49646 12.6179 3.80475 12.7451 3.10625 12.7575ZM2.345 11.375C3.14406 11.5499 3.97746 11.4766 4.73375 11.165C6.48375 10.5525 9.73875 8.1725 11.41 6.4575C11.8393 6.01227 12.0792 5.41788 12.0792 4.79937C12.0792 4.18087 11.8393 3.58647 11.41 3.14125C10.9843 2.72177 10.4107 2.48662 9.81312 2.48662C9.21551 2.48662 8.6419 2.72177 8.21625 3.14125C7.50653 4.00214 6.91776 4.95596 6.46625 5.97625C5.5475 7.81375 4.375 10.08 2.345 11.375Z"></path><path d="M12.145 2.7825L11.06 2.0475C11.3695 1.53099 11.7976 1.09568 12.3089 0.777645C12.8202 0.459613 13.3999 0.268021 14 0.21875V1.53125C13.6157 1.58416 13.2487 1.72446 12.9271 1.94137C12.6056 2.15828 12.338 2.44603 12.145 2.7825Z"></path><path d="M12.1362 5.74C11.1732 5.74 10.2496 5.35742 9.56857 4.67643C8.88758 3.99544 8.505 3.07182 8.505 2.10875C8.48952 1.97503 8.48952 1.83997 8.505 1.70625L9.7825 2.00375L9.14375 1.855L9.7825 1.995V2.10875C9.7825 2.72372 10.0268 3.3135 10.4616 3.74835C10.8965 4.1832 11.4863 4.4275 12.1012 4.4275C12.2467 4.44218 12.3933 4.44218 12.5387 4.4275L12.8362 5.705C12.6048 5.74129 12.3702 5.75302 12.1362 5.74Z"></path></svg> <span class="text-sm">Spicy</span>
                    </button>`:''}
                    ${val.vegan===true?`
                    <button  class="border rounded-lg p-[2px]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" class="w-5 fill-current text-green-700 inline-block c-pieIcon--green u-spacingRight--small c-pieIcon c-pieIcon--VeganSmall"><path d="M13.4837 0.717529L13.3262 0.0612793L12.67 0.245029C12.1975 0.376279 7.9975 1.59253 6.7375 3.74503C5.25 2.21378 2.16125 1.41753 1.75 1.32128L1.09375 1.16378L0.95375 1.82878C0.875 2.25753 0.11375 6.12503 1.3125 8.04128C1.63078 8.5685 2.07823 9.00588 2.61255 9.31208C3.14688 9.61829 3.75046 9.78321 4.36625 9.79128C4.50612 9.79995 4.64638 9.79995 4.78625 9.79128L6.125 13.0463H7.875L9.28375 9.48503C9.4887 9.52316 9.69655 9.54365 9.905 9.54628C10.5913 9.54302 11.2648 9.36044 11.8588 9.01664C12.4528 8.67284 12.9466 8.17976 13.2912 7.58628C14.5687 5.45128 13.5975 1.19878 13.4837 0.717529ZM2.42375 7.34128C1.75 6.31753 1.9425 4.11253 2.135 2.79128C3.4125 3.18503 5.4775 4.00753 6.125 5.03128C6.16346 5.10122 6.19567 5.17442 6.22125 5.25003C6.14978 5.75251 6.17953 6.26421 6.30875 6.75503C6.32815 6.82342 6.35153 6.89061 6.37875 6.95628C6.25196 7.30976 6.03832 7.6257 5.7575 7.87503L5.11875 6.23003H3.36875L4.24375 8.42628C3.876 8.40305 3.51908 8.29251 3.20257 8.10383C2.88606 7.91514 2.61908 7.65373 2.42375 7.34128ZM7 11.2438L6.2125 9.17878C6.55531 8.94318 6.8519 8.64659 7.0875 8.30378C7.30422 8.55054 7.55459 8.76556 7.83125 8.94253L7 11.2438ZM12.1538 6.92128C11.9156 7.33075 11.571 7.66814 11.1566 7.89767C10.7422 8.1272 10.2735 8.24032 9.8 8.22503L10.5875 6.23003H8.925L8.3825 7.67378C7.98608 7.34722 7.70409 6.90279 7.5775 6.40503C7.48825 6.06402 7.4686 5.70853 7.51971 5.35976C7.57082 5.01099 7.69165 4.67609 7.875 4.37503C8.575 3.18503 10.9375 2.18753 12.3462 1.75003C12.6175 3.17628 12.8888 5.72253 12.18 6.92128H12.1538Z"></path></svg></path></svg> <span class="text-sm">Vegan</span>
                    </button>`:''}
                  </div>
                    <p class="text-sm mt-2" id=${val.id} onclick="sub_menu(event)">${val.calorie?val.calorie:""}</p>
                    <p class="mt-2 font-bold" id=${val.id} onclick="sub_menu(event)"> £${val.price}</p>
                </div>
                <div class="col-start-7 col-end-13 md:col-start-9 md:col-end-13 lg:col-start-10 lg:col-end-13 rounded-lg overflow-hidden h-[99px] ml-2" id=${val.id} onclick="sub_menu(event)">
                    <img src="${val.images}" alt="pizza1"  id=${val.id} onclick="sub_menu(event)">
                </div>
            </div>
    `
      }).join('');
    }
    const offerArray = dealArray.filter((val) => val.category === 'offer');
    const createArray = dealArray.filter((val) => val.category === 'create');
    const specialArray = dealArray.filter((val) => val.category === 'special');
    const veganArray = dealArray.filter((val) => val.category === 'vegan');
    const glutenArray = dealArray.filter((val) => val.category === 'gluten');
    const sidesArray = dealArray.filter((val) => val.category === 'sides');
    const dessertsArray = dealArray.filter((val) => val.category === 'desserts');
    const drinksArray = dealArray.filter((val) => val.category === 'drinks');
    const wrapzArray = dealArray.filter((val) => val.category === 'wrapz');
    if(offerArray){
      show_all_products(dealItems, offerArray);
    }
    if(createArray){
      show_all_products(createOwn, createArray);
    }
    if(specialArray){
      show_all_products(speciality, specialArray);
    }
    if(veganArray){
      show_all_products(vegan, veganArray);
    }
    if(glutenArray){
      show_all_products(gluten, glutenArray);
    }
    if(sidesArray){
      show_all_products(sides, sidesArray);
    }
    if(dessertsArray){
      show_all_products(dessert, dessertsArray);
    }
    if(drinksArray){
      show_all_products(drinks, drinksArray);
    }
    if(wrapzArray){
      show_all_products(wrap, wrapzArray);
    }

    //swiper generate all the items

    let swiperGenerate=(x)=>{
      let parent_swipe=document.getElementById('parent-swipe');
      parent_swipe.innerHTML=x.map((val)=>{
        return `
        <div id=${val.id} class="swiper-slide p-2 ml-2 rounded-xl" onclick="sub_menu(event)">
          <div class="w-1/2 h-[90px] mr-2 border rounded-xl overflow-hidden cursor-pointer" id=${val.id} onclick="sub_menu(event)">
              <img src="${val.images}" id=${val.id} onclick="sub_menu(event)">
          </div>
          <div class="w-1/2" id=${val.id} onclick="sub_menu(event)">
              <p class="text-xs" id=${val.id} onclick="sub_menu(event)">Deals</p>
              <h3 class="font-bold text-sm mb-6" id=${val.id} onclick="sub_menu(event)">${val.heading}</h3>
              <div id=${val.id} onclick="sub_menu(event)">
                  <button class="py-0.5 px-1 rounded-sm text-xs bg-[#f5f3f1]" id=${val.id} onclick="sub_menu(event)">Popular</button>
                  <p class="text-sm font-bold mt-2" id=${val.id} onclick="sub_menu(event)">${val.price}</p>
              </div>
          </div>
        </div> 
        `
      }).join('');
    }
    const swiperArray = dealArray.filter((val) => val.deal === true);
    swiperGenerate(swiperArray);

//single product modal or page, opens when clicked on product.
let basket=JSON.parse(localStorage.getItem('data')) || []; 
let subDeal=document.getElementById('sub-deals');

function sub_menu(event) {
  displayModalOverlay();
  const clickedId = event.target.id;
  const clickedElement=Number(clickedId);
  const selectedDeal = dealArray.find((item) => item.id === clickedElement);
   let search=basket.find((x)=>x.id==selectedDeal.id) || [];
  if (selectedDeal) {
    return subDeal.innerHTML= `
    <div class="modal-box bg-white py-5 md:rounded-3xl h-screen md:h-fit">
      <div class="grid grid-cols-12 py-4 items-center">
          <p class="col-start-2 col-end-10 font-bold mx-auto" id="menu_name">${selectedDeal.heading}</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" onclick="banana()"  id="cross" class=" col-start-10 col-end-12 ms-auto w-5 al c-pieIcon c-pieIcon--CloseSmall"><path d="M10.8676 2.20496L7.0001 6.07248L3.13258 2.20496L2.20508 3.13246L6.0726 6.99998L2.20508 10.8675L3.13258 11.795L7.0001 7.92748L10.8676 11.795L11.7951 10.8675L7.92761 6.99998L11.7951 3.13246L10.8676 2.20496Z"></path></svg>
      </div>
      <div class="mb-10 flex justify-center">
          <img src="${selectedDeal.images}" alt="pizza">
      </div>
      <div class="px-6">
          <p>from £<span id="menu_price"> ${selectedDeal.price}</span></p>
          <p class="my-2 mx-auto">${selectedDeal.description}</p>
          <p class="text-sm">${selectedDeal.calorie}</p>
          <p class="text-xs mt-1">${selectedDeal.intake}</p>
      </div>
      <div class="px-6 flex items-center justify-center">
          <button onclick="decrease(${selectedDeal.id})" class="p-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" class="w-[18px]
              fill-current text-[#f36805] c-pieIcon c-pieIcon--MinusSmall c-pieIcon--interactiveBrand c-pieIcon--semiTransparent"><path d="M13.125 6.34375H7.65625H6.34375H0.875V7.65625H6.34375H7.65625H13.125V6.34375Z"></path></svg>
          </button>
          
          <input type="text" value="${search.item === undefined ? 1 : search.item}" class="w-3" id="${selectedDeal.id}">
 
          <button onclick="increase(${selectedDeal.id})" class="p-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" class="w-[18px]
              fill-current text-[#f36805] c-pieIcon c-pieIcon--PlusSmall c-pieIcon--interactiveBrand"><path d="M13.125 6.34375H7.65625V0.875H6.34375V6.34375H0.875V7.65625H6.34375V13.125H7.65625V7.65625H13.125V6.34375Z"></path></svg>
          </button>
      </div>
      <div class="flex justify-center py-4 text-[#f36805]">
        <button onclick="clear_cart()">Remove from order</button>
      </div>
                       
      <button class="border p-4  mx-4 mb-6 flex w-[90%] justify-between text-xl font-bold rounded-[50px] bg-[#f36805] text-white">
           <span class="mx-auto" onclick="add_order(${selectedDeal.id})">Add to order</span>
          <span id="price"></span>
      </button> 
    </div>                         
    `;
  }
}

//redirected from code above, displays all the added orders on same or diff page
let generateOrders=()=>{
  let tasklist=document.getElementById('tasklist');
  tasklist.innerHTML=basket.map((x)=>{
    let search= dealArray.find((y)=>y.id==x.id) || [];
    return `
      <div class="border-b-2 flex gap-10 py-4 md:gap-5">
        <div class="w-3/5 flex items-start">
        <div class="w-5 h-5  border rounded-[50%] flex items-center justify-center p-2 mr-2 bg-[#f5f3f1]"">${x.item}</div>
        <p id="show-sub-menu">
          <div class="underline underline-offset-2 sub-menu-link cursor-pointer" id="${search.id}" onclick="sub_menu(event)">${search.heading}</div>
        </p>
        </div>
        <div class="flex w-2/5 justify-end items-center h-fit">
        <div onclick="removeItem(${x.id})"class="text-red h-fit">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" class="w-4 fill-current text-red-600 cursor-pointer c-pieIcon--red c-basket-row-remove-icon c-pieIcon c-pieIcon--TrashSmall"><path d="M8.86377 0.21875H5.13626L4.48876 1.53125H9.51126L8.86377 0.21875Z"></path><path d="M0.875 2.84375V4.15625H1.8375L2.625 12.3988C2.66192 12.7771 2.83823 13.1281 3.11963 13.3836C3.40102 13.6391 3.7674 13.7809 4.1475 13.7812H9.87C10.2471 13.7766 10.6092 13.6329 10.8869 13.3778C11.1646 13.1227 11.3384 12.7741 11.375 12.3988L12.1538 4.15625H13.125V2.84375H0.875ZM10.08 12.25C10.0737 12.3042 10.0482 12.3543 10.008 12.3913C9.96788 12.4282 9.91579 12.4495 9.86125 12.4513H4.13875C4.08421 12.4495 4.03212 12.4282 3.99196 12.3913C3.95181 12.3543 3.92627 12.3042 3.92 12.25L3.15 4.15625H10.85L10.08 12.25Z"></path></svg>
        </div>
        <p class="ml-2">£ ${search.price*x.item}</p>
        </div>
      </div>  
    `
  }).join("");
};

generateOrders();

//redirected from code above,shows total amount, displays at bottom page
let sm_generateOrders=()=>{
    let sm_total = document.getElementById('sm-total');
    let totalItem = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
    let amount = basket.map((x) => {
      let search = dealArray.find((y) => y.id == x.id) || [];
      return x.item * search.price;
    }).reduce((x, y) => x + y, 0);
  
    if (basket.length === 0) {
      // If the basket is empty, don't render the cart icon and total count
      return sm_total.innerHTML = '';
    }
    return sm_total.innerHTML=`
    <div class="flex items-center p-4  w-screen bg-[#f36805] text-white" onclick="apple()">
      <div class="mr-6 relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" class="w-7 fill-current text-white c-pieIcon c-pieIcon--BasketSmall c-pieIcon--white"><path d="M5.03125 10.5L4.59375 7H5.90625L6.34375 10.5H5.03125ZM8.09375 7L7.65625 10.5H8.96875L9.40625 7H8.09375ZM14 4.59375V5.90625H13.2475L12.3025 11.62C12.2462 11.9786 12.0636 12.3053 11.7876 12.5411C11.5117 12.777 11.1605 12.9065 10.7975 12.9062H3.2025C2.83949 12.9065 2.48835 12.777 2.21239 12.5411C1.93644 12.3053 1.75383 11.9786 1.6975 11.62L0.7525 5.90625H0V4.59375H3.87625L4.9175 1.75H6.30875L5.25 4.59375H8.75L7.69125 1.75H9.0825L10.1237 4.59375H14ZM11.9175 5.90625H2.0825L2.9575 11.41C2.96563 11.4603 2.99106 11.5062 3.0294 11.5397C3.06773 11.5733 3.11658 11.5924 3.1675 11.5938H10.7625C10.8134 11.5924 10.8623 11.5733 10.9006 11.5397C10.9389 11.5062 10.9644 11.4603 10.9725 11.41L11.9175 5.90625Z"></path></svg>
        <span class="absolute top-0 left-[20px] bg-white text-[#f36805] text-xs rounded-[50%] p-1 w-4 h-4 flex justify-center items-center font-bold">${totalItem}</span>
      </div>
      <div class="">
        <div class="mx-auto"  id="apple">
        <p id="price" class="font-bold">£${amount.toFixed(2)}</p>
        <p class="text-sm">Go to checkout</p>
        </div>
      </div>
    </div>  
      `
}

//when submit, pops up all the added order
const add_order=(id)=>{

  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem);
  let inputValue = document.getElementById(selectedItem);

  if (search === undefined) {
    basket.push({
      id: selectedItem,
      item: 1,
    })
  }
    // if (inputValue) {
    //   inputValue.value = 1;
    // }
  // } else {
  //   search.item += 1;
  //   if (inputValue) {
  //     inputValue.value = search.item;
  //   }
  // }
  localStorage.setItem('data', JSON.stringify(basket));
  inputValue.dispatchEvent(new Event('click'));
  if(increase(id)){
    increase(id)
  }
  if(decrease(id)){
    decrease(id)
  }
 generateOrders();
 window.location.href='./index.html';
  

}

window.onload = () => {
   sm_generateOrders();

};

let left_orders=document.getElementById('left-orders');
let checkOut=document.getElementById('checkout');
let smTotal=document.getElementById('sm-total');
const apple=()=>{
  if(left_orders){
    left_orders.classList.remove('hidden');
    left_orders.classList.add('block');
    smTotal.classList.add('hidden');
    checkOut.classList.remove('hidden');
    checkOut.classList.add('block');
    //sm_generateOrders();
}
}

checkOut.addEventListener('click',()=>{
  alert('Checkout Page');
  window.location.href='./index.html';
  localStorage.clear();
})

let checkOut_md=document.getElementById('checkout-md');
checkOut_md.addEventListener('click',()=>{
  alert('Checkout Page');
  window.location.href='./index.html';
  localStorage.clear();
} )

let back_menu=document.getElementById('back-menu');
back_menu.addEventListener('click', ()=>{
  window.location.href='./index.html';
})

let sm_header_back=document.getElementById('sm-header-back');
sm_header_back.addEventListener('click', ()=>{
  window.location.href='./index.html';
})
  

const increase=(id)=> {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem);
  let inputValue = document.getElementById(selectedItem);

  if (search === undefined) {
    basket.push({
      id: selectedItem,
      item: 1,
    });
    if (inputValue) {
      inputValue.value = 1;
    };
  } else {
    search.item += 1;
    if (inputValue) {
      inputValue.value = search.item;
    }
  }
  localStorage.setItem('data', JSON.stringify(basket));
  inputValue.dispatchEvent(new Event('click'));
}

const decrease=(id)=>{
  let selectedItem=id;
  let search=basket.find((x)=>x.id===selectedItem);
  let inputValue = document.getElementById(selectedItem);
  if(search.item===0) return;
  else{
    search.item-=1;
    if (inputValue) {
      inputValue.value = search.item;
    }
  }
  basket=basket.filter((x)=>x.item!==0);
  localStorage.setItem('data', JSON.stringify(basket));
  inputValue.dispatchEvent(new Event('click'));
}

//total amount
let totalAmount=()=>{
  let service_charge=document.getElementById('service-charge');
  let total_charge=document.getElementById('total-charge');
  if(basket.length !==0){
    let amount=basket.map((x)=>{
      let search= dealArray.find((y)=>y.id==x.id) || [];
      return x.item*search.price;
    }).reduce((x,y)=>x+y,0);
    let total_price=document.getElementById('total_price');
   
    let sum=document.getElementById('sum');
    total_price.innerHTML=`<div class="flex justify-between">
                              <div>Subtotal</div>
                              <div>£${amount.toFixed(2)}</div>
                            </div>`;
    service_charge.innerHTML=`<div class="flex justify-between">
                                <div>Service charge</div>
                                <div>£2.50</div>
                              </div>`;
    total_charge.innerHTML=`<div class="flex justify-between">
                              <div>Total</div>
                              <div>${(amount+2.50).toFixed(2)}</div>
                            </div>`;  
    if(basket.length==0){
      sum.innerHTML="";
    }                                                
    sum.innerHTML=`£${amount + 2.50}`;
    total_price.style.display="block";
    service_charge.style.display="block";
    total_charge.style.display="block";
  }else{
    total_price.style.display="none";
    service_charge.style.display = "none"; 
    total_charge.style.display="none";
  }
}

totalAmount();

//remove single item from cart
let removeItem=(id)=>{
  let sum=document.getElementById('sum');
  let selectedItem=id;
  basket=basket.filter((x)=>x.id!==selectedItem);
  if(basket.length==0){
    sum.innerHTML="";
  } 
  generateOrders();
  localStorage.setItem('data', JSON.stringify(basket));
  totalAmount();
  generateOrders();
}

//remove all item from cart
let clear_cart=()=>{
  basket=[];
  generateOrders();
  localStorage.setItem('data', JSON.stringify(basket));
  totalAmount();
  window.location.href='./index.html';
}

const banana=()=>{
  let modalBox = document.getElementById('sub-deals');
  modalBox.classList.add('hidden');
  let modalOverlay = document.getElementById('modalOverlay');
  modalOverlay.classList.add('hidden');
}



//modal
document.addEventListener('click', function(event) {
  let modalOverlay = document.getElementById('modalOverlay');
  let modalBox = document.getElementById('sub-deals');
  
  // Check if the click event occurred outside the modal box
  if (event.target === modalOverlay) {
    modalOverlay.classList.add('hidden');
    modalBox.classList.add('hidden');
  }
});

function displayModalOverlay() {
  let modalOverlay = document.getElementById('modalOverlay');
  modalOverlay.classList.remove('hidden');
  let modalBox = document.getElementById('sub-deals');
  modalBox.classList.remove('hidden');
}


