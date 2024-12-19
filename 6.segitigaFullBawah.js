function segitigaFullBawah(baris) {
  let pola = "";
  for (let i = 1; i <= baris; i++) {
    for (let j = 1; j <= i; j++) {
      pola += " ";
    }
    for (let k = baris; k >= i; k--) {
      pola += "*";
    }
    for (let L = baris; L > i; L--) {
      pola += "*";
    }
    pola += "\n";
  }
  return pola;
}

console.log(segitigaFullBawah(5));
