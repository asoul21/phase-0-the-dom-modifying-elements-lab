// Write your code here!
const mainNode = document.querySelector('main#main');
if (mainNode) {
    mainNode.parentNode.removeChild(mainNode);
  }

const newHeader = document.createElement("h1");

newHeader.id= 'victory';

newHeader.innerHTML = "Andrew is the champion";
