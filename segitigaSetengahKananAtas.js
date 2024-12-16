function segitaSetengahKananAtas(baris) {
  let pola = "";
  for (let i = 1; i <= baris; i++) {
    for (j = 1; j <= i; j++) {
      pola += "*";
    }
    for (let k = baris; k >= baris; k--) {
      pola += " ";
    }

    pola += "\n";
  }
  return pola;
}

console.log(segitaSetengahKananAtas(5));
