let obj =[
   {id:1,name:"a"},
   {id:2,name:"b"},
   {id:3,name:"c"},
   {id:1,name:"d"},
   {id:3,name:"e"}
  ];
  // Expected Output: [{id:1,name:["a","d"]},{id:2,name:"b"},{id:3,name:["c","e"]}

 var res = {};

 for(let i=0; i< obj.length; i++) {
   if(!res[obj[i].id]) {
     res[obj[i].id] = obj[i].name
   } else {
     let temp = res[obj[i].id];
     res[obj[i].id] = [];
    res[obj[i].id].push(temp,obj[i].name)
   }
 }
 console.log(JSON.stringify(res));

//----------------------------------------------------------------//

function mergeObj(arr) {
    let newObj={};
    for(let i=0; i< arr.length; i++) {
        let nameI =arr[i].name ;
        let idI =arr[i].id;
         if(idI in newObj){
             let temp = newObj[idI];
                 newObj[idI].name = [temp.name, nameI]
         } else {
             newObj[idI] ={id: idI, name: nameI}
         }
    }
    return JSON.stringify(Object.values(newObj));
}
console.log(mergeObj(arr));

/***********************/
let obj2 =[];
obj.forEach(item => {
    let index = obj2.findIndex(ele => ele.id== item.id) 
      if(index != -1) {
        obj2[index].name.push(item.name) 
      } else {
         obj2.push({'id': item.id, 'name':[item.name]});
      }
   });
console.log(obj2);


/* method-2 */
for(let i=0; i<obj.length; i++) {
  obj2.push({'id': obj[i].id, 'name':obj[i].name})
  for(let j=i; j<obj.length; j++) {
    if(i !==j && obj[i].id == obj[j].id) {
       let temp =obj2[i].name;
       obj2[i].name = [...temp,obj[j].name];
       obj.splice(j, 1);
    }
  }
}
console.log(obj2);


//-----------------------------------------------//
 //outputs as:  [ { name: 'abc', score: 60 }, { name: 'pqr', score: 80 } ] 


let arr = [ 

  { name: "abc", score: 20 }, 

  { name: "pqr", score: 30 }, 

  { name: "abc", score: 40 }, 

  { name: "pqr", score: 50 }, 

]; 

function mergeObj(arr) {
    let newObj={};
    for(let i=0; i< arr.length; i++) {
        let name =arr[i].name ;
        let score =arr[i].score;
         if(name in newObj){
             newObj[name] += score;
         } else {
             newObj[name]=score;
         }
    }
    return [newObj];
}
console.log(mergeObj(arr));
