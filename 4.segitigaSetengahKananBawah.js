function segitaSetengahKananBawah(baris) {
  let pola = "";
  for (let i = 1; i <= baris; i++) {
    for (let j = baris; j >= i; j--) {
      pola += "*";
    }
    pola += "\n";
  }
  return pola;
}

console.log(segitaSetengahKananBawah(5));
