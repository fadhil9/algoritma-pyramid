function segitigaFullKiri(baris) {
  let pola = "";
  for (let i = baris; i >= 1; i--) {
    pola += "0";
  }

  return pola;
}

console.log(segitigaFullKiri(5));
