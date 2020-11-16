loadDoc();
function loadDoc() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      var objJSON = JSON.parse(this.responseText);
      //get table body:
var tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
      let index = 0;
while(index < objJSON.length){
   //insert Row
   tableRef.insertRow().innerHTML = 
   "<td>" +objJSON[index].No+ "</td>"+
   "<td>" +objJSON[index].name+ "</td>"+
   "<td>" +objJSON[index].category+ "</td>"+
   "<td>" +objJSON[index].quantity+ "</td>"+
   "<td>" +objJSON[index].price+ "</td>";
  index += 1;
}

      }
    };
    xhttp.open("GET", "item.json", true);
    xhttp.send();
  }
  