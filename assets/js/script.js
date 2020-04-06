// console.dir(window.document);
var pageContentEl = document.querySelector("#wrapper");
console.log(pageContentEl);


var addQuestion = function() {

    var listItemsEl = document.createElement("li");
    listItemsEl.textContent = "text"
    listItemsEl.className = "list-item";
    listItemsEl.appendChild(pageContentEl);
    console.log(listItemsEl);

    // var question1 = document.createElement("h1");
    // question1.textContent = "Commonly used data types DO not include:"
    // question1.className = "page-title"
    // question1.className = "page-content";
    // question1.style = "display:flex";

    // // var ul = document.createElement("ul");
    // var button1 = document.createElement("button");
    // button1.setAttribute("id", "button1");
    // button1.textContent = "1. strings";
    // button1.className = "btn";
    // button1.type = "submit"
    // // console.log(button1);
    // var button2 = document.createElement("button");
    // button2.textContent = "2. booleans";
    // button2.className = "btn";
    // var button3 = document.createElement("button");
    // button3.textContent = "3. alerts";
    // button3.className = "btn";
    // var button4 = document.createElement("button");
    // button4.textContent = "4. numbers";
    // button4.className = "btn";

    // document.querySelector("#initial-page").style.display = "none";
    var removeFirstPage = document.getElementById("initial-page");
    removeFirstPage.remove();




    




    // console.log(div);
    // console.log(h1);
    // var headerEl = document.createElement("h1");
    // headerEl.className = "page-title";
    // headerEl.textContent = "Commonly used data types DO not include:";



    

    // // headerEl.appendChild(pageContentEl);
    // // console.log(headerEl);
    // var question1 = document.createElement("div");
    // // question1.id = "page-title";
    // question1.innerHTML = <h1 id="page-title">Commonly used data types DO not include:</h1>;
    // // div.appendChild(question1);
    // document.body.appendChild(button1);
    // document.body.appendChild(button2);
    // document.body.appendChild(button3);
    // document.body.appendChild(button4);
    // document.body.appendChild(question1);
    // document.body.appendChild(div1);
    listItemsEl.appendChild(pageContentEl);

    // question1.appendChild(div1);


    // document.body.appendChild(pageContentEl);
}












pageContentEl.addEventListener("click", addQuestion);

// //this is the function that will show the first page and then hide the first page after the Start Quiz button was clicked
// var startQuizfunction = function () {
//     // document.querySelector("#questions-placeholder").style.display = "block";
//     // var initialPageEl = document.querySelector("#initial-page");


//     document.querySelector("#initial-page").style.display = "none";
//     addQuestion();

//     // var divItemEl = document.createElement("button");

//     // divItemEl.className = "questions-placeholder";
//     // console.dir(divItemEl);
//     // var h2itemEl = document.createElement("h2");
//     // console.dir(h2itemEl);

//     // divItemEl.appendChild(pageContentEl);
//  }

//  var createFirstQuestion = function() {
//      var divItemEl = document.createElement("div");
//      divItemEl.className = "questions-placeholder";
//      var h2itemEl = document.createElement("h2");

//      console.log(grid);
//      console.dir(grid);

//      divItemEl.appendChild(pageContentEl);


//  }

