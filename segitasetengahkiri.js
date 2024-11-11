function segitigasetengahkiri(baris) {
  for (i = 1; i <= baris; i++) {
    console.log("*");
    for (j = i - 1; j < i; j++) {
      console.log("*");
    }
    console.log("\n");
  }
}

segitigasetengahkiri(5);
