




let Da = function(){
	ostemad.innerHTML = "Ostemad"
}

let En = function(){
	ostemad.innerHTML = "Open cheese sandwich"
}


/* JSOM menu */
let menu = [{
    navn: "Carpaccio",
    billed: "../images/carpaccio.jpg",
    pris: 123
  },
  {
    navn: "Oksetatar",
    billed: "🍲",
    pris: 129
  },
  {
    navn: "Moules Frites",
    billed: "🍲",
    pris: 111
  },
  {
  navn: "Bøf Bearnaise",
  billed: "🍲",
  pris: 111
  },

  {
  navn: "Oksemørbrad",
  billed: "🍲",
  pris: 111
  },
  {
  navn: "Tunbøf",
  billed: "🍲",
  pris: 111
  },
  {
  navn: "Chokoladekage med is",
  billed: "🍲",
  pris: 111
  },
  {
  navn: "Créme Brulé",
  billed: "🍲",
  pris: 111
  },
  {
  navn: "Tiramisu",
  biled: "🍲",
  pris: 111
  }
]

let amount = 0
sum.innerHTML = amount

/* display the menu */
for (let i = 0; i < menu.length; i++) {

  theMenu.innerHTML += `
    <div class="aMenu">
      <h3>  ${menu[i].navn} </h3>
      <p> ${menu[i].billed}  </p>
      <p> Pris: ${menu[i].pris} kr. </p>
      <button onclick="anOrder(
        '${menu[i].navn}',
        '${menu[i].pris}'
      )"> Tilføj ${menu[i].navn}</button>
    <div>
  `
}

// add order til orderlist
function anOrder(order, pris, i) {
  // create list
  ordersList.innerHTML += '<li class="orderItem">' + order
  +  ' pris: ' + pris + ' kr.'+
  ' <button onclick="this.parentNode.remove();amount-='+ parseInt(pris) +';sum.innerHTML=amount">Slet</button> </li>'
  // update amount
  amount += parseInt( pris ) // string to number
  sum.innerHTML = amount + ' kr.';
  sum.innerHTML += `
    <form action="thanx.html">
    <button> Betal </button>
    </form>
  `

  // sessionStorage - save data in the session
  sessionStorage.setItem("yourOrders", orders.innerHTML)
  console.log(sessionStorage.getItem("yourOrders"))
}

// save orders session
