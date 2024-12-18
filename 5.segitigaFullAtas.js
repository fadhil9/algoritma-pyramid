function segitigaFullAtas(baris) {
  let pola = "";
  for (let i = 1; i <= baris; i++) {
    for (let j = baris; j >= i; j--) {
      pola += " ";
    }
    for (let k = 1; k <= i; k++) {
      pola += "*";
    }
    for (let L = 2; L <= i; L++) {
      pola += "*";
    }
    pola += "\n";
  }
  return pola;
}

console.log(segitigaFullAtas(5));
