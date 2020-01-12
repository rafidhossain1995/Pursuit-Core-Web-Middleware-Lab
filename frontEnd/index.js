document.addEventListener("DOMContentLoaded", ()=>{
  let button =  document.querySelector("#button");
  let input = document.querySelector("#input");
  let floor = document.querySelector("#floor")
  let ceiling = document.querySelector("#ceiling")
  let random = document.querySelector("#random")
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
  random.addEventListener("click",()=>{
      //debugger
      axios.get(`http://localhost:3004/random?floor=${floor.value}&ceiling=${ceiling.value}`).then(res=>{
          debugger
          //let ul = document.querySelector("ul")
          //let results = res.data
      })
  })
})