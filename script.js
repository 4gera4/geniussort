//динамическо поле ввода
function autoHeight(element) {
    element.style.height = "5px"; 
    element.style.height = (element.scrollHeight) + "px";
}


//секундомер
let timerDisplay = document.getElementById('timer');
let out_arr  = document.getElementById('out_arr');

let timerContainer  = document.getElementById('timerContainer');
let mainContainer  = document.getElementById('mainContainer');

timerContainer.style.display = 'none';



let startTime;
let elapsedTime = 0; 
let timerInterval;


function updateTime() {
  const now = Date.now();
  const diff = now - startTime + elapsedTime; 

  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  timerDisplay.textContent = 
    `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}






//алгоритм сортировки 
function nextPermutation(array) {
  let i = array.length - 2;
  while (i >= 0 && array[i] >= array[i + 1]) i--;

  if (i >= 0) {
    let j = array.length - 1;
    while (array[j] <= array[i]) j--;
    [array[i], array[j]] = [array[j], array[i]];
    
    let left = i + 1, right = array.length - 1;
    while (left < right) {
      [array[left], array[right]] = [array[right], array[left]];
      left++; right--;
    }
    return true; 
  }
  return false; 
}

//ввод
let submitBtn = document.getElementById('submitBtn');
const textArea = document.getElementById('in_arr');

submitBtn.addEventListener('click', lets_sort);

function lets_sort(){
  const text = textArea.value; 

  const numArray = text
    .split(/[ ,]+/)      
    .filter(item => item.trim() !== '') 
    .map(item => Number(item));         

    mainContainer.style.display = 'none';
    timerContainer.style.display = 'flex';

     startTime = Date.now();
  
  
  timerInterval = setInterval(() => {
    updateTime(); 
    
    
    const hasNext = nextPermutation(numArray);
    
    if (hasNext) {
      const numReverse = numArray.slice().reverse();
      out_arr.textContent = `[ ${numReverse.join(', ')} ]`;
    } else {
      
      clearInterval(timerInterval);
      alert("Done!");
    }
  }, 1); 


}

//1,2,3,4,5,6,7
