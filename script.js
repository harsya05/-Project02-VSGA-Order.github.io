let itemOrder = [
  {
    dipesan: false,
    harga: 46000,
    nama: "Buncis",
  },
  {
    dipesan: false,
    harga: 10300,
    nama: "Bayam",
  },
  {
    dipesan: false,
    harga: 37000,
    nama: "Brokoli",
  },
  {
    dipesan: false,
    harga: 20400,
    nama: "Buncis",
  },
  {
    dipesan: false,
    harga: 8400,
    nama: "Caesim",
  },
  {
    dipesan: false,
    harga: 34000,
    nama: "Alpukat",
  },
  {
    dipesan: false,
    harga: 103000,
    nama: "Anggur",
  },
  {
    dipesan: false,
    harga: 37200,
    nama: "Apel",
  },
  {
    dipesan: false,
    harga: 17900,
    nama: "Belimbing",
  },
  {
    dipesan: false,
    harga: 12400,
    nama: "Bengkoang",
  },
  {
    dipesan: false,
    harga: 8300,
    nama: "Bawang Bombay",
  },
  {
    dipesan: false,
    harga: 30700,
    nama: "Bawang Merah",
  },
  {
    dipesan: false,
    harga: 59000,
    nama: "Cengkeh",
  },
  {
    dipesan: false,
    harga: 18600,
    nama: "Jahe",
  },
  {
    dipesan: false,
    harga: 275000,
    nama: "Kapulaga",
  },
];

let totalOrder = 0;

const itemTerpilih = document.getElementsByClassName("item");

const textTotal = document.getElementById("last-item");

for (let i = 0; i < itemTerpilih.length; i++) {
  itemTerpilih[i].addEventListener("click", function () {
    setItemPemesanan(i, itemTerpilih[i]);
  });
}

function setItemPemesanan(index, elemen) {
  if (itemOrder[index].dipesan == false) {
    itemOrder[index].dipesan = true;
    elemen.style.backgroundColor = "white";
    elemen.style.color = "black";
    totalOrder = totalOrder + itemOrder[index].harga;
  } else {
    itemOrder[index].dipesan = false;
    elemen.style.backgroundColor = "rgba(16, 68, 68, 0.253)";
    elemen.style.color = "white";
    totalOrder = totalOrder - itemOrder[index].harga;
  }
  textTotal.innerHTML = "Total <span>Rp. " + totalOrder + "</span>";
}
