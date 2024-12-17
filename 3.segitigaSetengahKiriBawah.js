function segitaSetengahKiriBawah(baris) {
  let pola = "";
  for (let i = 1; i <= baris; i++) {
    for (let j = 1; j <= i; j++) {
      pola += " ";
    }
    for (let k = baris; k >= i; k--) {
      pola += "*";
    }
    pola += "\n";
  }
  return pola;
}

console.log(segitaSetengahKiriBawah(5));
