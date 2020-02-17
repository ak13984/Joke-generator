const button = document.querySelector("button");
const article = document.querySelector("article");
const body = document.querySelector("body");
const h1=document.querySelector("h1");
// h1.style.textDecoration="none";
button.addEventListener("click",async function(){
    const ans = await axios.get("http://api.icndb.com/jokes/random");
    
    var img = document.createElement("img");
    img.value='url("chuck-norris-cartoon-vector-clipart_8001.png")';
    // img.style.cssText = `opacity:0.4`;
    // console.log(img);
    // // console.log(img.style);
    body.style.backgroundImage=img.value;
    button.remove();
    var h2=document.createElement("h2");
    h2.innerText=ans.data.value.joke;
    h2.style.color="rgb(51,0,0)";
    article.appendChild(h2);
});

