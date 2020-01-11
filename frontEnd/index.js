document.addEventListener("DOMContentLoaded", ()=>{
  let button =  document.querySelector("#button");
  let input = document.querySelector("#input");
  button.addEventListener("click", () =>{
      axios.get(`http://localhost:3004/animal/${input.value}`).then(res=>{
      input.innerText = ""  
      let ul = document.querySelector("ul");
          let results = res.data.status
          let li = document.createElement("li")
          li.innerText = results
          ul.appendChild(li)
          debugger
    })
  })
})