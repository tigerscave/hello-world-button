console.log("hello world");

const button = document.getElementById('button');

const onButtonClicked = () => {
  console.log("hello button clicked");
  const h1 = document.getElementById('header');
  
  if(h1.textContent === "Hello World") {
    h1.textContent = "------";
  } else {
    h1.textContent = "Hello World";
  }
}

button.addEventListener('click', onButtonClicked);

