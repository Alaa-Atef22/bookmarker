var nameInput= document.getElementById('nameInput');
var URLInput= document.getElementById('URLInput');
var searchInput=document.getElementById('searchInput')
var alertInput=document.getElementById('va');
var alertinput=document.getElementById('vai');
var UrLList=[];
if(localStorage.getItem('list') !== null){
    UrLList=JSON.parse(localStorage.getItem('list'));
    display();
    }
//creat
function creatProduct(){
  if(validationName()== true && validationUrl()== true){
      var product={
  pname:nameInput.value,
 URLi:URLInput.value,
      }
      UrLList.push(product);
  localStorage.setItem('list',JSON.stringify(UrLList));
clearForm();
 display();
      console.log(UrLList)}else{
      return false
      }
   } 
//clearForm
function clearForm(){
nameInput.value='';
URLInput.value='';
        }
// //display
function display(){
var trs=``;
for(var i=0;i<UrLList.length;i++){
    trs+=`
    <tr class="table-info">
    <td>${i+1}</td>
    <td>${UrLList[i].pname}</td>
    <td><a href="${UrLList[i].URLi}" class="btn btn-outline-dark"><i class="fa-solid fa-eye"></i></a></td>
    <td><button onclick='deleteProduct(${i})'class="btn btn-outline-dark"><i class="fa fa-trash"></i></button></td>
    </tr>`
}
document.getElementById('tableBody').innerHTML=trs;
  } 
//Delet index
  function deleteProduct(index){
    UrLList.splice(index,1)
    localStorage.setItem('list',JSON.stringify(UrLList));
    display();
      }
     //search
      function search(){
        var searchValue=searchInput.value;
        var trs=``;
        for (var i=0;i<UrLList.length;i++){
        if(UrLList[i].pname.includes(searchValue)==true){
          if(searchInput.value !== ''){  trs+=`
          <tr class="table-info">
          <td>${i+1}</td>
          <td>${UrLList[i].pname.replace(searchInput.value,`<mark>${searchInput.value}</mark>`)}</td>
          <td><a href="${UrLList[i].URLi}" class="btn btn-outline-dark"><i class="fa-solid fa-eye"></i></a></td>
          <td><button onclick='deleteProduct(${i})'class="btn btn-outline-dark"><i class="fa fa-trash"></i></button></td>
          </tr>`}else{ trs+=`
          <tr class="table-info">
          <td>${i+1}</td>
          <td>${UrLList[i].pname}</td>
          <td><a href="${UrLList[i].URLi}" class="btn btn-outline-dark"><i class="fa-solid fa-eye"></i></a></td>
          <td><button onclick='deleteProduct(${i})'class="btn btn-outline-dark"><i class="fa fa-trash"></i></button></td>
          </tr>`}
          
        }
        document.getElementById('tableBody').innerHTML=trs;
          } } 
          //validation
          function validationUrl(){
            var rexeurl=/^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/; 
            if (rexeurl.test(URLInput.value) == true){
              alertInput.innerHTML=''
              alertInput.classList.replace("d-block", "d-none");
        return true;
            }else{ alertInput.innerHTML='Site URL must be a valid one'
            alertInput.classList.replace("d-none", "d-block");
            return false
            }
            
          }
          function validationName(){
            var rexeName=/(\s*\w\s*){3}/; 
            if (rexeName.test(nameInput.value) == true){
              alertinput.innerHTML=''
              alertinput.classList.replace("d-block", "d-none");
        return true;
            }else{ alertinput.innerHTML='Site name must contain at least 3 characters'
            alertinput.classList.replace("d-none", "d-block");
            return false
            }
          }
