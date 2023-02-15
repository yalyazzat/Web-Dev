// let input = document.querySelector('#input')
// let addTsk = document.querySelector('#add')
// let list = document.querySelector('#list')

      var item = document.createElement("li");
function add(){
    var element = document.getElementById('add.text');
    var text = element.value;
    if (text != ""){
      item.innerHTML = '<input type="button" value="&#x2713" onclick="tick(this.parentNode)" id="tick" class="class1"/> ' + text +'<input type="button" value="&#x2715" onclick="delte(this.parentNode)" class="todo" id="delete"/>';
      var x = document.getElementById('tasks');
      x.appendChild(item);
    }
    element.value = "";
}
function delte(item){
  if (item.className == 'done'){
    item.remove();
  }
}

function tick(item){
  item.className = 'done';
}