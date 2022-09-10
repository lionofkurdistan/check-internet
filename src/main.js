let title = document.querySelector('.title');
let ul = document.querySelector('ul');

let reload = document.querySelector('.reload');

  window.onload = function(){
  if(window.navigator.onLien){
    onLien()
  }else{
    offLien()
  }
}

window.addEventListener("online",  function(){
  onLien();
})

window.addEventListener("offline", function() {
  offLien();
})

reload.onclick =  function(){
  window.location.reload();
}

function onLien(){
  title.innerHTML = 'Olaine';
  title.style.color = 'green';
  ul.classList.add('.hide');
  reload.classList.add('.hide');
}

function offLien(){
  title.innerHTML = 'Offlaine';
  title.style.color = '#666';
  ul.classList.remove('.hide');
  reload.classList.remove('.hide');
}

