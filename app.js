const btn = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const apiURL = "https://api.quotable.io/random";

async function quote() {
  const response = await fetch(apiURL);
  const data = await response.json();
  const quoteContent = data.content;
  const quoteAuthor = data.author;
  quoteEl.innerText = quoteContent;
  authorEl.innerText = "~ " + quoteAuthor;
}

btn.addEventListener("click", quote);
