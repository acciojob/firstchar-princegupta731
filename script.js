function firstChar(text) {
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== " ") {
      return text[i];
    }
  }
  return "";
}

// Do not change the code below
// Cypress will stub the prompt value
const text = prompt("Enter text:");
alert(firstChar(text));
