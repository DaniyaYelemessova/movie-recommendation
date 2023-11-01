window.addEventListener("load", function() {
  let button = document.querySelector("button")
  button.addEventListener("click", chosenMovie);


  function chosenMovie(e){
    e.preventDefault();
    // let form = document.querySelector("form");
    let select = document.querySelector("select").value;

    document.querySelector(".movie").innerText = select;
    document.querySelector("#message").removeAttribute("class");

    if(select === "Comedy"){
      document.querySelector("#comedies").removeAttribute("class")
    }
    
    
    
    
    
  }
  


})