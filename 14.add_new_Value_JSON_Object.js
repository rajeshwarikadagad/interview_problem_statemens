let obj =[
   {id:1,name:"a"},
   {id:2,name:"b"},
   {id:3,name:"c"},
   {id:1,name:"d"},
   {id:3,name:"e"}
  ];
  // Expected Output: [{id:1,name:["a","d"]},{id:2,name:"b"},{id:3,name:["c","e"]}
  
let obj2 =[];
obj.forEach(item => {
    let index = obj2.findIndex(ele => ele.id== item.id) 
      if(index != -1) {
        obj2[index].name.push(item.name) 
      } else {
         obj2.push({'id': item.id, 'name':[item.name]});
      }
   });
console.log(obj2)
