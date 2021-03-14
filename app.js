/* console.log("Hola mundo");
let myVariable = 3;

if(myVariable < 4){
    let test = 5;
}
console.log(test);
let myString1 = "hola";
let myString2 = "Qu[e hace";
let myString3 = "señor";
console.log(`Buenas, ${myString1} ${myString2} ${myString3}`); //Template string
for(let i=0; i<8; i++){
    console.log(i);
}
while(myVariable < 6){
    console.log(myVariable)
    myVariable++;
}
switch(myVariable){ //Selector
    case 1:
        break;
    case 2:
        break; 
} */

/* for(let 1=0; i<5; i++){
    document.write("<h1>Hola mundo</h1>");
    document.write("<p>Buenas</p>");

} */

/* let myArray = [2,4,5,6,7];
function test(){
console.log("Hola");
}
const test1 = (a)=>{
    console.log("hola" + a);
    return a;
};
let myData = test1(3);

let aux = 0;
myArray.forEach((element)=>{
    aux = aux + element;
});

let myNewArray = myAray.map((element)=>{
    
    return element*4; //[,16,20,24,28]
});
console.log(myNewArray); */

/* let myArray = [2,4,5,6,7];
function getData(data){
    return new Promise((resolve,reject)=>{
        if(data.lenght == 0){
            reject(new Error("Hubo un error"));
        }
        setInterval(()=>{
            resolve(data);
        },2000);
    });
} */
/*getData(myArray).then((cosa)=>{
    console.log(cosa);
    console.log("Cumpli la promesa");
    console.log("hola" + cosa );
}).catch((error)=>{
    console.log("error");
}); */
/* async function myFunction(){
    let myData = await getData(myArray);
    console.log(myData);
}
const fetchData = async ()=>{
    let myData = await getData(myArray);
    console.log(myData);
}
fetchData(); */

const fetchData = async (country="co", category="business") => {
    let response = await fetch(`http://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=f666b1a15c8940dc9df48ce0596933fa`);
    let dataJson = await response.json()
    return dataJson.articles;
}
const renderData = async (category) => {
    let country = document.getElementById("countries".value);
    const articles = await fetchData(country, category);
    let container = document.getElementById("articles");
    container.innerHTML = "";
    let urlImageNotFound = "https://programacion.net/files/article/20160819020822_image-not-found.png";
    //
    articles.forEach((article) => {
        let alertTemplate = `<div class="col-12 col-sm-12 col-md-6 col-lg-4">
        <div class="card" style="width: 18rem;">
            <img src="${article.urlToImage == null ? urlImageNotFound : article.urlToImage}"class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${article.title}</h5>
              <p class="card-text">${article.description == null ? "Descripción no disponible" : article.description}</p>
            </div>
          </div>
        </div>`;
    container.innerHTML += alertTemplate;
  });

    const getArticles = async () => {
        let country =document.getElementById("countries").values;
    }
}
renderData();


