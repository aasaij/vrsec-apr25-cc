function greet(user) {
  //   if (user === null || user === undefined) user = "Aasaithambi Jay";
  user = user ?? "Aasaithambi Jay";
  console.log(`Good Morning ${user}`);
}

greet(null);
greet("Saisathish");
