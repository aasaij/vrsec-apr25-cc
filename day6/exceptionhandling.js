let name = "Testing";

console.log("Welcome to Exception handling");
try {
  console.log(name.charAt(10));
} catch (err) {
  if (err instanceof TypeError) console.log("Error : " + err.message);
  else console.log("Unknown Error" + err);
} finally {
  console.log("Try block ends here...");
}
console.log("Thank you so much for being very interactive!");
