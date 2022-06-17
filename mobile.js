var mensData = [
    {
      image_url:
        "https://images.bewakoof.com/t320/mindspace-ticket-designer-hard-cover-for-xiaomi-redmi-9-power-493811-1651244047-1.jpeg",
      name: "Printed Designer Hard Cover for OnePlus 9R",
      price: "270",
      strikedoffprice: "399",
    },
    {
      image_url:
        "https://images.bewakoof.com/t320/mickey-ticket-designer-hard-cover-for-xiaomi-redmi-9-power-498536-1652421637-1.jpeg",
      name: "Printed Designer Hard Cover for OnePlus 9R ",
      price: 199,
      strikedoffprice: 229,
    },
    {
      image_url:
        "https://images.bewakoof.com/t320/batman-rogue-designer-hard-cover-for-xiaomi-redmi-9-power-503047-1653634339-1.jpeg",
      name: " Printed Designer Hard Cover for OnePlus 9R",
      price: 145,
      strikedoffprice: 199,
    },
    {
      image_url:
        "https://images.bewakoof.com/t320/mickey-ticket-designer-hard-cover-for-xiaomi-redmi-9-power-498536-1652421637-1.jpeg",
      name: "Printed Designer Hard Cover for OnePlus 9R",
      price: 399,
      strikedoffprice: 799,
    },
    {
      image_url:
        "https://images.bewakoof.com/t320/pirate-king-designer-hard-cover-for-xiaomi-redmi-9-power-494345-1651157352-1.jpeg",
      name: "Printed Designer Hard Cover for OnePlus 9R ",
      price: 220,
      strikedoffprice: 399,
    },
    {
      image_url:
        "https://images.bewakoof.com/t320/printed-designer-hard-cover-for-oneplus-9r-impact-resistant-matte-finish-498836-1652930340-1.jpg ",
      name: " Printed Designer Hard Cover for OnePlus 9R",
      price: 240,
      strikedoffprice: 399,
    },
    {
      image_url:
        "https://images.bewakoof.com/t320/world-map-printed-designer-hard-cover-for-oneplus-9r-impact-resistant-matte-finish-498821-1652930539-1.jpg ",
      name: "Printed Designer Hard Cover for OnePlus 9R",
      price: 399,
      strikedoffprice: 499,
    },
    {
      image_url:
        "https://images.bewakoof.com/t320/travel-map-printed-designer-hard-cover-for-oneplus-9r-impact-resistant-matte-finish-498826-1652930434-1.jpg",
      name: "Printed Designer Hard Cover for OnePlus 9R",
      price: 469,
      strikedoffprice: 599,
    },
    {
        image_url:
          "https://images.bewakoof.com/t320/mindspace-ticket-designer-hard-cover-for-xiaomi-redmi-9-power-493811-1651244047-1.jpeg",
        name: "Printed Designer Hard Cover for OnePlus 9R",
        price: "270",
        strikedoffprice: "399",
      },
      {
        image_url:
          "https://images.bewakoof.com/t320/mickey-ticket-designer-hard-cover-for-xiaomi-redmi-9-power-498536-1652421637-1.jpeg",
        name: "Printed Designer Hard Cover for OnePlus 9R ",
        price: 199,
        strikedoffprice: 229,
      },
      {
        image_url:
          "https://images.bewakoof.com/t320/batman-rogue-designer-hard-cover-for-xiaomi-redmi-9-power-503047-1653634339-1.jpeg",
        name: " Printed Designer Hard Cover for OnePlus 9R",
        price: 145,
        strikedoffprice: 199,
      },
      {
        image_url:
          "https://images.bewakoof.com/t320/mickey-ticket-designer-hard-cover-for-xiaomi-redmi-9-power-498536-1652421637-1.jpeg",
        name: "Printed Designer Hard Cover for OnePlus 9R",
        price: 399,
        strikedoffprice: 799,
      },
      {
        image_url:
          "https://images.bewakoof.com/t320/pirate-king-designer-hard-cover-for-xiaomi-redmi-9-power-494345-1651157352-1.jpeg",
        name: "Printed Designer Hard Cover for OnePlus 9R ",
        price: 220,
        strikedoffprice: 399,
      },
      {
        image_url:
          "https://images.bewakoof.com/t320/printed-designer-hard-cover-for-oneplus-9r-impact-resistant-matte-finish-498836-1652930340-1.jpg ",
        name: " Printed Designer Hard Cover for OnePlus 9R",
        price: 240,
        strikedoffprice: 399,
      },
      {
        image_url:
          "https://images.bewakoof.com/t320/world-map-printed-designer-hard-cover-for-oneplus-9r-impact-resistant-matte-finish-498821-1652930539-1.jpg ",
        name: "Printed Designer Hard Cover for OnePlus 9R",
        price: 399,
        strikedoffprice: 499,
      },
      {
        image_url:
          "https://images.bewakoof.com/t320/travel-map-printed-designer-hard-cover-for-oneplus-9r-impact-resistant-matte-finish-498826-1652930434-1.jpg",
        name: "Printed Designer Hard Cover for OnePlus 9R",
        price: 469,
        strikedoffprice: 599,
      },
      
    
  ];

  var cartData = JSON.parse(localStorage.getItem("cart")) || [];
  mensData.map(function (elem) {
    var box = document.createElement("div");

    var img = document.createElement("img");
    img.src = elem.image_url;

    var name = document.createElement("p");
    name.textContent = elem.name;

    var price = document.createElement("p");
    price.innerText = elem.price;

    var strikedoffprice = document.createElement("s");
    strikedoffprice.innerText = elem.strikedoffprice;

    var btn = document.createElement("button");
    btn.innerText = "Add to Cart";
    btn.addEventListener("click", function () {
      addToCart(elem);
    });

    box.append(img, name, price,strikedoffprice, btn);

    document.querySelector("#container").append(box);
  });

  function addToCart(elem) {
    console.log(elem);
    cartData.push(elem);
    localStorage.setItem("cart", JSON.stringify(cartData));
    alert("item added to cart");
  }