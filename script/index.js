const items = [
  {
    id: 0,
    name: "Camisa Palmeiras - 14/15",
    img: "assets/img/palmeiras/1.jpg",
    img2: "assets/img/palmeiras/1-2.jpg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 1,
    name: "Camisa Palmeiras I - 22/23",
    img: "assets/img/palmeiras/2.jpg",
    img2: "assets/img/palmeiras/2-2.jpg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 2,
    name: "Camisa Palmeiras I - 21/22",
    img: "assets/img/palmeiras/3.jpg",
    img2: "assets/img/palmeiras/3-2.jpeg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 3,
    name: "Camisa Palmeiras - 2009",
    img: "assets/img/palmeiras/4.jpg",
    img2: "assets/img/palmeiras/4-2.jpeg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 4,
    name: "Camisa Palmeiras II - 23/24",
    img: "assets/img/palmeiras/5.jpg",
    img2: "assets/img/palmeiras/5-2.jpg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 5,
    name: "Camisa Palmeiras II - 22/23",
    img: "assets/img/palmeiras/6.jpg",
    img2: "assets/img/palmeiras/6-2.jpg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 6,
    name: "Camisa Palmeiras I - 23/24",
    img: "assets/img/palmeiras/7.jpg",
    img2: "assets/img/palmeiras/7-2.jpg",
    quantidade: 0,
    new: true,
    valor: 150.0,
  },
  {
    id: 7,
    name: "Camisa Palmeiras 1951 - 21/22",
    img: "assets/img/palmeiras/8.jpg",
    img2: "assets/img/palmeiras/8-2.jpg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 8,
    name: "Camisa Palmeiras - 23/24",
    img: "assets/img/palmeiras/9.jpg",
    img2: "assets/img/palmeiras/9-2.jpeg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 9,
    name: "Camisa Palmeiras II - 23/24",
    img: "assets/img/palmeiras/10.jpeg",
    img2: "assets/img/palmeiras/10-2.jpeg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 10,
    name: "Camisa Vasco III - 22/23",
    img: "assets/img/vasco/1.jpg",
    img2: "assets/img/vasco/1-2.jpg",
    quantidade: 0,
    new: true,
    valor: 150.0,
  },
  {
    id: 11,
    name: "Camisa Vasco II - 22/23",
    img: "assets/img/vasco/2.jpg",
    img2: "assets/img/vasco/2-2.jpg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 12,
    name: "Camisa Vasco Retrô - 2000",
    img: "assets/img/vasco/3.jpg",
    img2: "assets/img/vasco/3-2.jpg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 13,
    name: "Camisa Vasco Retrô - 1999",
    img: "assets/img/vasco/4.jpg",
    img2: "assets/img/vasco/4-2.jpg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 14,
    name: "Camisa Vasco - 21/22",
    img: "assets/img/vasco/5.jpg",
    img2: "assets/img/vasco/5-2.jpg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 15,
    name: "Camisa CAM II - 22/23",
    img: "assets/img/atletico/1.jpg",
    img2: "assets/img/atletico/1-2.jpg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 16,
    name: "Camisa CAM Retrô - 16/17",
    img: "assets/img/atletico/2.jpg",
    img2: "assets/img/atletico/2-2.jpg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 17,
    name: "Camisa CAM I - 22/23",
    img: "assets/img/atletico/3.jpg",
    img2: "assets/img/atletico/3-2.jpg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 18,
    name: "Camisa CAM III - 22/23",
    img: "assets/img/atletico/4.jpg",
    img2: "assets/img/atletico/4-2.jpeg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 19,
    name: "Camisa CAM MRV - 22/23",
    img: "assets/img/atletico/5.jpg",
    img2: "assets/img/atletico/5-2.jpg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 20,
    name: "Camisa Grêmio II - 23/24",
    img: "assets/img/gremio/1.jpg",
    img2: "assets/img/gremio/1-2.jpg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 21,
    name: "Camisa Grêmio I - 23/24",
    img: "assets/img/gremio/2.jpg",
    img2: "assets/img/gremio/2-2.jpeg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 22,
    name: "Camisa Grêmio II - 22/23",
    img: "assets/img/gremio/3.jpg",
    img2: "assets/img/gremio/3-2.jpg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 23,
    name: "Camisa Grêmio Treino - 22/23",
    img: "assets/img/gremio/4.jpg",
    img2: "assets/img/gremio/4-2.jpg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 24,
    name: "Camisa Grêmio Rêtro I - 2000",
    img: "assets/img/gremio/5.jpg",
    img2: "assets/img/gremio/5-2.jpg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 25,
    name: "Camisa Al-Nassr II - 23/24",
    img: "assets/img/al_nassr/1.jpg",
    img2: "assets/img/al_nassr/1-2.jpg",
    new: true,
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 26,
    name: "Camisa Al-Nassr I - 23/24",
    img: "assets/img/al_nassr/2.jpg",
    img2: "assets/img/al_nassr/2-2.jpg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 27,
    name: "Camisa Barcelona II - 21/22",
    img: "assets/img/barcelona/1.jpg",
    img2: "assets/img/barcelona/1-2.jpg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 28,
    name: "Camisa Barcelona I - 23/24",
    img: "assets/img/barcelona/2.jpg",
    img2: "assets/img/barcelona/2-2.jpg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 29,
    name: "Camisa Bayern I - 23/24",
    img: "assets/img/bayern_munique/1.jpg",
    img2: "assets/img/bayern_munique/1-2.jpg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 30,
    name: "Camisa Bayern II - 23/24",
    img: "assets/img/bayern_munique/2.jpg",
    img2: "assets/img/bayern_munique/2-2.jpg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 31,
    name: "Camisa Borussia I - 23/24",
    img: "assets/img/borussia_dortmund/1.jpg",
    img2: "assets/img/borussia_dortmund/1-2.jpg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 32,
    name: "Camisa Borussia - 23/24",
    img: "assets/img/borussia_dortmund/2.jpg",
    img2: "assets/img/borussia_dortmund/2-2.jpg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 33,
    name: "Camisa Flamengo II - 23/24",
    img: "assets/img/flamengo/1.jpg",
    img2: "assets/img/flamengo/1-2.jpg",
    quantidade: 0,
    new: true,
    valor: 150.0,
  },
  {
    id: 34,
    name: "Camisa Flamengo I - 23/24",
    img: "assets/img/flamengo/2.jpg",
    img2: "assets/img/flamengo/2-2.jpg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 35,
    name: "Camisa Inter Miami I - 23/24",
    img: "assets/img/inter_miami/1.jpg",
    img2: "assets/img/inter_miami/1-2.jpg",
    quantidade: 0,
    new: true,
    valor: 150.0,
  },
  {
    id: 36,
    name: "Camisa Inter Miami II - 23/24",
    img: "assets/img/inter_miami/2.jpg",
    img2: "assets/img/inter_miami/2-2.jpg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 37,
    name: "Camisa Man. City - 23/24",
    img: "assets/img/manchester_city/1.jpg",
    img2: "assets/img/manchester_city/1-2.jpg",
    quantidade: 0,
    new: true,
    valor: 150.0,
  },
  {
    id: 38,
    name: "Camisa Man. City II - 21/22",
    img: "assets/img/manchester_city/2.jpg",
    img2: "assets/img/manchester_city/2-2.jpg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 39,
    name: "Camisa Man. United II - 23/24",
    img: "assets/img/manchester_united/1.jpg",
    img2: "assets/img/manchester_united/1-2.jpg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 40,
    name: "Camisa Man. United III - 23/24",
    img: "assets/img/manchester_united/2.jpg",
    img2: "assets/img/manchester_united/2-2.jpg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 41,
    name: "Camisa Real Madrid I - 22/23",
    img: "assets/img/real_madrid/1.jpg",
    img2: "assets/img/real_madrid/1-2.jpg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 42,
    name: "Camisa Real Madrid I - 23/24",
    img: "assets/img/real_madrid/2.jpg",
    img2: "assets/img/real_madrid/2-2.jpg",
    quantidade: 0,
    new: true,
    valor: 150.0,
  },
  {
    id: 43,
    name: "Camisa São Paulo I - 22/23",
    img: "assets/img/sao_paulo/1.jpg",
    img2: "assets/img/sao_paulo/1-2.jpg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 44,
    name: "Camisa São Paulo 23/24",
    img: "assets/img/sao_paulo/2.jpg",
    img2: "assets/img/sao_paulo/2-2.jpg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 45,
    name: "Camisa Al Hilal 23/24",
    img: "assets/img/al_hilal/1.jpeg",
    img2: "assets/img/al_hilal/1-2.jpeg",
    new: true,
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 46,
    name: "Camisa Al Hilal Home 23/24",
    img: "assets/img/al_hilal/2.jpeg",
    img2: "assets/img/al_hilal/2-2.jpeg",
    quantidade: 0,
    valor: 150.0,
  },
  {
    id: 47,
    name: "Camisa Sporting 23/24",
    img: "assets/img/sporting/1.jpeg",
    img2: "assets/img/sporting/1-2.jpeg",
    quantidade: 0,
    valor: 150.0,
  },
];

/* FIXED A NAVBAR */

const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");
const distanceToTrigger = 60;
window.addEventListener("scroll", () => {
  if (window.scrollY >= distanceToTrigger) {
    navbar.classList.add("fixed_nav");
    menu.classList.add("fixed_menu");
  } else {
    navbar.classList.remove("fixed_nav");
    menu.classList.add("fixed_menu");
  }
});

/* CAROUSEL */

carousel = () => {
  let carouseli = document.querySelectorAll(".carousel_image");
  let carouselBtns = document.querySelectorAll(".carousel_button");
  let currentIndex = 0;
  setInterval(() => {
    carouseli[currentIndex].classList.remove("carousel_active");
    carouselBtns[currentIndex].classList.remove("button_active");
    currentIndex = (currentIndex + 1) % carouseli.length;
    carouseli[currentIndex].classList.add("carousel_active");
    carouselBtns[currentIndex].classList.add("button_active");
  }, 4000);
};

carousel();

/* Boot shop and add itens in screen */

bootShop = () => {
  let productCount = 0;
  let productArea = document.getElementById("inner_container_products");
  let productAreaNew = document.getElementById("inner_container_new");

  items.map((val) => {
    if (val.new == true) {
      productAreaNew.innerHTML += `
                <div class="product_single product_single_new">
                <img src="${val.img}" class="product_img" data-hover-src="${
        val.img2
      }" />
                    <p>${val.name}</p>
                    <div class= "product_vals">
                        <h3 class="reais">R$</h3>
                        <h3>${val.valor.toFixed(2)}</h3>
                        <p>R$349,00</p>
                    </div>
                <a key="${val.id}" href="#" class="cart_add">
                <i class="fa-solid fa-cart-plus" style="color: #ffffff;  "></i>
            Adicionar</a>
            </div> 
        `;
    }
    productArea.innerHTML += `
            <div class="product_single ${
              productCount >= 4 ? "hidden_product" : ""
            }">
                <img src="${val.img}" class="product_img" data-hover-src="${
      val.img2
    }" />
                <p>${val.name}</p>
                <div class= "product_vals">
                    <h3 class="reais">R$</h3>
                    <h3>${val.valor.toFixed(2)}</h3>
                    <p>R$349,00</p>
                </div>
                <a key="${val.id}" href="#" class="cart_add">
                <i class="fa-solid fa-cart-plus" style="color: #ffffff;"></i>Adicionar</a>
            </div>
        `;
    productCount++;
  });

  document.addEventListener("DOMContentLoaded", function () {
    const productImages = document.querySelectorAll(".product_img");

    productImages.forEach((img) => {
      img.addEventListener("mouseover", function () {
        this.dataset.originalSrc = this.src;
        this.src = this.dataset.hoverSrc;
      });

      img.addEventListener("mouseout", function () {
        if (this.dataset.originalSrc) {
          this.src = this.dataset.originalSrc;
        }
      });
    });
  });

  /* READ MORE  */

  let readMoreButton = document.getElementById("read_more");
  let counter = 0;
  readMoreButton.addEventListener("click", () => {
    const hiddenProducts = document.querySelectorAll(".hidden_product");

    for (let i = 0; i < 4 && i < hiddenProducts.length; i++) {
      hiddenProducts[i].classList.remove("hidden_product");
      hiddenProducts[i].style.display = "block";

      /* HIDDEN READ MORE BTN */

      counter += i;
      if (counter - 16 == 47) {
        readMoreButton.style.display = "none";
      }
    }
  });

  /* ADD TO CART */

  let links = document.getElementsByClassName("cart_add");
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (event) {
      event.preventDefault();
      let key = this.getAttribute("key");

      let nome = items[key].name;
      let valor = items[key].valor;
      let quantidade = items[key].quantidade;
      let img = items[key].img;
      let itemExiste = false;
      let cartItemsLocalStorage =
        JSON.parse(localStorage.getItem("cart")) || [];

      let newItem = {
        nome: nome,
        valor: valor,
        quantidade: quantidade + 1,
        img: img,
      };

      cartItemsLocalStorage.forEach((i) => {
        if (newItem.nome === i.nome) {
          i.quantidade++;
          i.valor += newItem.valor;
          itemExiste = true;
        }
      });

      if (!itemExiste) {
        cartItemsLocalStorage.push(newItem);
      }

      localStorage.setItem("cart", JSON.stringify(cartItemsLocalStorage));

      items[key].quantidade++;
      updateCart();

      var cartIcon = document.querySelector("#cart_icon i");
      cartIcon.classList.add("bounce");
      setTimeout(function () {
        cartIcon.classList.remove("bounce");
      }, 1500);

      var notification = document.createElement("div");
      notification.innerText = "Adicionado ao carrinho!";
      notification.style.position = "fixed";
      notification.style.minWidth = "13.5rem";
      notification.style.left = "50%";
      notification.style.bottom = "0";
      notification.style.transform = "translate(-50%, -50%)";
      notification.style.background = "rgb(24, 187, 24)";
      notification.style.color = "#FFFFFF";
      notification.style.padding = "10px";
      notification.style.borderRadius = "5px";
      notification.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.3)";
      notification.style.opacity = "0";
      notification.style.transition = "opacity 0.3s ease-in-out";
      document.body.appendChild(notification);

      setTimeout(function () {
        notification.style.opacity = "1";
        setTimeout(function () {
          notification.style.opacity = "0";
          setTimeout(function () {
            notification.remove();
          }, 300);
        }, 1500);
      }, 10);
    });
  }
};

/* UPDATE CART */

updateCart = () => {
  let cartItens = document.querySelector(".cart_itens");
  let cartTotal = document.querySelector(".total_price");
  let listaItens = JSON.parse(localStorage.getItem("cart")) || [];
  let valorTotal = 0;

  cartItens.innerHTML = "";
  cartTotal.innerHTML = "";

  items.map((val) => {
    if (val.quantidade > 0) {
      const checkoutBtn = document.getElementById("cart_checkout");
      checkoutBtn.style.display = "block";
      cartItens.innerHTML += `
            <div class="cart_item" id="${val.id}">
                <img src="${val.img}"></img>
                <div class="cart_item_texts">
                    

                    <div class="cart_item_name">
                        <h3>${val.name}</h3>
                        <div class="clear_product" data-id="${val.id}" >
                            <i class="fa-solid fa-x" style="color: #ffffff;"></i>
                        </div>
                    </div>

                    <div class="cart_item_value">
                        <h3>R$390.00</h3>
                        <h3>R$${val.valor.toFixed(2)}</h3>
                    </div>

                    <div class="cart_item_quantity">
                        <button class="quantity_btn decrease" data-id="${
                          val.id
                        }">-</button>
                        <p class="quantity_value">${val.quantidade}</p>
                        <button class="quantity_btn increase" data-id="${
                          val.id
                        }">+</button>
                    </div>
                </div>
            </div>
            <br>
        `;
    }
    valorTotal += val.valor * val.quantidade;
  });

  document.querySelectorAll(".increase").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      let itemId = parseInt(event.currentTarget.getAttribute("data-id"));
      items[itemId].quantidade++;
      let cartItemsLocalStorage = JSON.parse(localStorage.getItem("cart"));
      cartItemsLocalStorage.forEach((i) => {
        if (items[itemId].name === i.nome) {
          i.quantidade++;
          i.valor += items[itemId].valor;
        }
      });
      localStorage.setItem("cart", JSON.stringify(cartItemsLocalStorage));

      updateCart();
    });
  });

  document.querySelectorAll(".decrease").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      let itemId = parseInt(event.currentTarget.getAttribute("data-id"));
      items[itemId].quantidade--;
      let cartItemsLocalStorage = JSON.parse(localStorage.getItem("cart"));
      cartItemsLocalStorage.forEach((i) => {
        if (items[itemId].name === i.nome) {
          i.quantidade--;
          i.valor -= items[itemId].valor;
        }
      });
      localStorage.setItem("cart", JSON.stringify(cartItemsLocalStorage));
      updateCart();
    });
  });

  document.querySelectorAll(".clear_product").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      let itemId = parseInt(event.currentTarget.getAttribute("data-id"));
      items[itemId].quantidade = 0;
      updateCart();
    });
  });

  cartTotal.innerHTML += `<p>Subtotal <br> R$${valorTotal.toFixed(2)}</p>`;
};

bootShop();

let cartIcon = document.getElementById("cart_icon");
let cartShow = document.getElementById("cart_modal");
let displayShow = document.getElementById("dark_overlay");
let cartHidden = document.getElementById("cart_closer");

// SHOW MODAL AND OVERLAY
function showCart() {
  cartShow.style.display = "block";
  displayShow.style.display = "block";

  cartShow.style.animation = "";
  cartShow.style.animation = "slidein .2s";
}

// HIDDEN MODAL AND OVERLAY
function hiddenCart() {
  cartShow.style.animation = "slideout .2s forwards";

  cartShow.addEventListener(
    "animationend",
    () => {
      cartShow.style.display = "none";
      displayShow.style.display = "none";
    },
    { once: true }
  );
}

// ATTACH LISTENERS
function attachListeners() {
  cartIcon.addEventListener("click", (event) => {
    event.preventDefault();
    showCart();
  });

  cartHidden.addEventListener("click", () => {
    hiddenCart();
  });

  displayShow.addEventListener("click", (event) => {
    if (event.target === displayShow) {
      // Ver se o click foi no overlay
      hiddenCart();
    }
  });
}

attachListeners();

document.getElementById("cart_closer").addEventListener("click", function () {
  const cartModal = document.querySelector(".slide_element");
  cartModal.classList.toggle(".opened");
});

document.addEventListener("mouseover", (event) => {
  let cartItem = event.target.closest(".cart_item");
  if (cartItem) {
    let clear = cartItem.querySelector(".clear_product");
    if (clear) {
      clear.style.visibility = "visible";
      clear.style.opacity = "1";
    }
  }
});

document.addEventListener("mouseout", (event) => {
  let cartItem = event.target.closest(".cart_item");
  if (cartItem) {
    let clear = cartItem.querySelector(".clear_product");
    if (clear) {
      clear.style.visibility = "hidden";
      clear.style.opacity = "0";
    }
  }
});

/* SHOW LOGIN MODAL*/

let user = document.getElementById("user_icon");
let truck = document.getElementById("truck_icon");
let loginModal = document.getElementById("login_modal");
let closeLogin = document.querySelector(".login_modal_closer");

function showLoginModal() {
  let menuSandwich = document.querySelector(".menu_sandwich");
  displayShow.style.display = "block";
  loginModal.style.display = "block";
  menu.style.display = "none";
  menuSandwich.classList.toggle("active");

  displayShow.addEventListener("click", (e) => {
    if (e.target === displayShow) {
      loginModal.style.display = "none";
      displayShow.style.display = "none";
    }
  });
}

user.addEventListener("click", (event) => {
  event.preventDefault();
  showLoginModal();
});

truck.addEventListener("click", (event) => {
  event.preventDefault();
  showLoginModal();
});

closeLogin.addEventListener("click", () => {
  loginModal.style.display = "none";
  displayShow.style.display = "none";
});

let cartAdd = document.querySelectorAll(".cart_add");

// SHOW SEARCH AREA

function showSearchButton() {
  let menu = document.querySelector(".menu");
  let menuSandwich = document.querySelector(".menu_sandwich");
  let searchArea = document.getElementById("search_input");
  let searchInput = document.querySelector(".search_term");
  if (searchArea.style.display === "none" || searchArea.style.display === "") {
    searchArea.style.display = "block";
    menu.style.display = "none";
    menuSandwich.classList.toggle("active");
    searchInput.focus();
  } else {
    searchArea.style.display = "none";
  }
}

// ENTER BUTTON FOR SEARCH TOO

document
  .querySelector("#search_input")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.keyCode === 13) {
      event.preventDefault();

      toggleSearch();
    }
  });

// SEARCH FUNCTION

function toggleSearch() {
  let input = document.querySelector("#search_input");
  let inputValueBefore = document.querySelector(".search_term");
  let inputValue = document.querySelector(".search_term").value.toLowerCase();
  let matchedItems = [];
  for (i = 0; i < items.length; i++) {
    if (items[i].name.toLowerCase().includes(inputValue)) {
      console.log(items[i]);
      matchedItems.push(items[i]);
    }
  }

  let productTemplates = matchedItems
    .map((item) => {
      return `
        <div class="product_search_item">
        <img src="${item.img}" class="product_img" data-hover-src="${
        item.img2
      }" />
                <p>${item.name}</p>
                <div class= "product_vals">
                    <h3 class="reais">R$</h3>
                    <h3>${item.valor.toFixed(2)}</h3>
                    <p>R$349,00</p>
                </div>
                <a key="${item.id}" href="#" class="cart_add">
                <i class="fa-solid fa-cart-plus" style="color: #ffffff;"></i>Adicionar</a>
        </div>
        `;
    })
    .join("");

  let main = document.querySelector("main");

  main.innerHTML = `
    <div class="products_search">
        <h2>Resultados</h2>
        <br>
        <div class="products_search_area">
            <div class="inner_container">
                ${productTemplates}
            </div>
        </div>
    </div>
`;

  input.style.display = "none";
  inputValueBefore.value = "";

  let links = document.getElementsByClassName("cart_add");
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (event) {
      event.preventDefault();
      let key = this.getAttribute("key");
      items[key].quantidade++;
      updateCart();

      var cartIcon = document.querySelector("#cart_icon i");
      cartIcon.classList.add("bounce");
      setTimeout(function () {
        cartIcon.classList.remove("bounce");
      }, 1500);

      // ANIMATION FOR ITEM ADD

      let notification = document.createElement("div");
      notification.innerText = "Adicionado ao carrinho!";
      notification.style.position = "fixed";
      notification.style.minWidth = "13.5rem";
      notification.style.left = "50%";
      notification.style.bottom = "0";
      notification.style.transform = "translate(-50%, -50%)";
      notification.style.background = "rgb(24, 187, 24)";
      notification.style.color = "#FFFFFF";
      notification.style.padding = "10px";
      notification.style.borderRadius = "5px";
      notification.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.3)";
      notification.style.opacity = "0";
      notification.style.transition = "opacity 0.3s ease-in-out";
      document.body.appendChild(notification);

      setTimeout(function () {
        notification.style.opacity = "1";
        setTimeout(function () {
          notification.style.opacity = "0";
          setTimeout(function () {
            notification.remove();
          }, 300);
        }, 1500);
      }, 10);
    });
  }
}

// SHOW MENU

function toggleMenu() {
  const menu = document.querySelector(".menu");
  const menuSandwich = document.querySelector(".menu_sandwich");
  if (menu.style.display == "none" || menu.style.display == "") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
  menuSandwich.classList.toggle("active");
}

// SHOW ITENS SEARCHED PREVIOUS

const ul = document.getElementById("products_list_filter");
items.forEach((item) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <a href="#">
        <img src="${item.img}" width="50" alt="">
        <span class="item_search_name">${item.name}</span>
    </a>
    `;
  ul.appendChild(li);
});

//FILTER ITENS SEARCHEAD

function filter() {
  let input,
    filter,
    ul,
    li,
    a,
    span,
    i,
    txtValue,
    count = 0;

  input = document.querySelector(".search_term");
  ul = document.getElementById("products_list_filter");

  filter = input.value.toLowerCase();

  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;

    if (txtValue.toLowerCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      count++;

      span = li[i].querySelector(".item_search_name");

      if (span) {
        span.innerHTML = txtValue.replace(new RegExp(filter, "gi"), (match) => {
          return `<strong>${match}</strong>`;
        });
      }
    } else {
      li[i].style.display = "none";
    }
  }
  if (count === 0) {
    ul.style.display = "none";
  } else {
    ul.style.display = "block";
  }
}

// CLOSED ITENS IF CLICKED OUT OF INPUT

document.addEventListener("click", function (event) {
  let input = document.querySelector(".search_term");
  let ul = document.getElementById("products_list_filter");

  let clickedInsideInput = input.contains(event.target);
  let clickedInsideUl = ul.contains(event.target);

  if (!clickedInsideInput && !clickedInsideUl) {
    ul.style.display = "none";
  }
});

document.addEventListener("click", function (event) {
  let menu = document.querySelector(".menu");

  if (menu) {
    let clickedInMenu = menu.contains(event.target);

    let menuButton = document.querySelector(".menu_sandwich");
    let clickedOnMenuButton = menuButton && menuButton.contains(event.target);

    if (!clickedInMenu && !clickedOnMenuButton) {
      menu.style.display = "none";
      menuButton.classList.remove("active");
    }
  }
});
