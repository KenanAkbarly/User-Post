

const data = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data =>getApiTable(data) )
  
function getApiTable(data){
        
        data.forEach(element => {
               const tbody =document.querySelector('.post-table tbody');
               const tr = document.createElement('tr');
               const td1 = document.createElement('td')
               const td2 = document.createElement('td')
               const td3 = document.createElement('td')
               const td4 = document.createElement('td')
               td1.innerHTML = element.userId
               td2.innerHTML = element.id
               td3.innerHTML = element.title
               td4.innerHTML = element.body
               tbody.appendChild(tr)
               tr.appendChild(td1)
               tr.appendChild(td2)
               tr.appendChild(td3)
               tr.appendChild(td4)
    })
};
 