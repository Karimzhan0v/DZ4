 const h1Node= document.querySelector('h1')
 
 document.querySelector('button').addEventListener('click',()=>{

    const req = new XMLHttpRequest()
    req.open('GET','https://jsonplaceholder.typicode.com/todos/')
    req.setRequestHeader('Content-type','application/json')
    req.send()
    req.addEventListener('load',()=>{
         const response = JSON.parse(req.response)
         console.log(response.slice(0,10));
         const container = document.createElement('div')
         container.innerHTML=`
            ${response.map(item=>`<h2>${item.title}</h2>`)}
         `
         document.body.append(container)
    })
 })