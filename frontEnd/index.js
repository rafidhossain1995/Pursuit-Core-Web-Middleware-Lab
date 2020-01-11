
document.addEventListener("DOMContentLoaded", ()=>{
  let button =  document.querySelector("#button")
  let input = document.querySelector("#input")
  button.addEventListener("click", () =>{
      axios.get(`http://localhost:3004/animal/:${input.value}`).then(res=>{
          debugger
        let ul = document.createElement("ul");
        let results = res.data
    })
  })
})