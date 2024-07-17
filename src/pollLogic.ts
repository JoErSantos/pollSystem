let poll: HTMLFormElement;
let resultsContainer: HTMLDivElement;

type option = {
  id: string;
  text: string;
  votes: number;
}

const options: option[] = [
  {id:"option1", text:"JavaScript",votes:0},
  {id:"option2", text:"Python",votes:0},
  {id:"option3", text:"Java",votes:0},
  {id:"option4", text:"C++",votes:0}
]

let totalVotes: number = 0;

export function setElements(form: HTMLFormElement, results: HTMLDivElement):void {
    poll = form;
    resultsContainer = results;
    poll.addEventListener('submit',(e)=>handleSubmit(e));
    displayResults();
}

function handleSubmit(event: any): void{
  event.preventDefault();

  const selectedOption: HTMLInputElement|null = document.querySelector('input[name="poll"]:checked');

  if(!selectedOption){
    alert("please select an option");
    return;
  }
  else{
    addVotes(selectedOption);
  }
}

function addVotes(selectedOption: HTMLInputElement){
  const optionId = selectedOption.value;
  const selecetedOptionObj = options.find((option)=> option.id ===optionId);
  if(selecetedOptionObj){
    totalVotes++;
    selecetedOptionObj.votes++;
    displayResults();
  }
}

function displayResults(){
  resultsContainer.innerHTML = "";

  options.forEach((option) => {
    const percentage: number = ((option.votes / totalVotes) * 100) || 0;
    const barwith: string = percentage > 0 ? percentage + "%" : "0%";

    const optionResults = document.createElement("div");
    optionResults.className = "option-results";
    optionResults.innerHTML = `
      <span class="option-text">${option.text}</span>
      <div class="bar-container">
        <div class="bar" style="width: ${barwith};"></div>
      </div>
      <span class = "percentage">${totalVotes > 0 ? percentage.toFixed(2) : "Nan"}%</span>
    `;
    
    resultsContainer.appendChild(optionResults);
  });
}

