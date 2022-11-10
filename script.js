/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

let counter = 1;

const advanceContent = () => {
  if (counter < 9) {
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
       
const toggleChecklist = () => {
  let myChecklist = document.querySelector("#checklist");
  myChecklist.classList.toggle("hidden");
  
  if (myChecklist.classList.contains("hidden")) {
    toggleButton.innerHTML = "Open Checklist";
  } else {
    toggleButton.innerHTML = "Close Checklist";
  }
   
  let toggleButton = document.querySelector("#toggle-checklist");
  toggleButton.innerHTML = "Close Checklist";
}

const downloadChecklist = () => {
  let contentToPrint = document.querySelector("#checklist");

  html2canvas(contentToPrint, { }).then(
   (canvas) => {
     let a = document.createElement("a");
     a.download = "checklist.png";
     a.href = canvas.toDataURL("image/png");
     a.click();
    }
   );
  };
