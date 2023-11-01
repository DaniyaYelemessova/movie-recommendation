window.addEventListener("load", function() {
  let button = document.querySelector("button")
  button.addEventListener("click", chosenMovie);

  function addClass(){
    document.querySelector("#comedies").setAttribute("class", "hidden");
    document.querySelector("#horror").setAttribute("class", "hidden");
    document.querySelector("#action").setAttribute("class", "hidden");
    document.querySelector("#drama").setAttribute("class", "hidden");
    document.querySelector("#crime").setAttribute("class", "hidden");
  }


  function chosenMovie(e){
    e.preventDefault();
    // let form = document.querySelector("form");
    let select = document.querySelector("select").value;
    addClass()

    document.querySelector(".movie").innerText = select;
    document.querySelector("#message").removeAttribute("class");

    if(select === "Comedy"){
      document.querySelector("#comedies").removeAttribute("class");
    }else if(select === "Horror"){
      document.querySelector("#horror").removeAttribute("class");
    }else if(select === "Action"){
      document.querySelector("#action").removeAttribute("class");
    }else if(select === "Drama"){
      document.querySelector("#drama").removeAttribute("class");
    }else if(select === "Crime"){
      document.querySelector("#crime").removeAttribute("class");
    }
  }
})