/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

let counter = 1;

const advanceContent = () => {
  if (counter < 3) {
  counter++;
  let idToSelect = "#slide-" + counter;
  document.querySelector(idToSelect).classList.remove("hidden");
  }
}

const returnContent = () => {
  if (counter > 1) {
  let idToSelect = "#slide-" + counter;
  document.querySelector(idToSelect).classList.add("hidden");
  counter--;
   }
};

document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}
