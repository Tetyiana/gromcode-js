let sum = 0;
for (let i = 0; i <= 1000; i += 1) {
  // eslint-disable-next-line no-continue
  if (i % 2 === 0) continue;
  console.log("Found");
  sum += i;
}
if (sum * 5 >= 5000) {
  console.log("Bigger");
} else { console.log("Smaller or equal"); }
