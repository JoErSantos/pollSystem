import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setElements } from './pollLogic.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <form ction="" id="poll-form"> 
      <h1>Poll System</h1>
      <h2>What is your favorite programming language?</h2>
      <div class="option">
        <input type="radio" id="option1" name="poll" value="option1">
        <label for="option1"> JavaScripts </label>
      </div>
      <div class="option">
        <input type="radio" id="option2" name="poll" value="option2">
        <label for="option2"> Python </label>
      </div>
      <div class="option">
        <input type="radio" id="option3" name="poll" value="option3">
        <label for="option3"> Java </label>
      </div>
      <div class="option">
        <input type="radio" id="option4" name="poll" value="option4">
        <label for="option4"> C++ </label>
      </div>
      <input type="submit" value="Submit Vote" class="submitButton">
      <div id="results" class="results">
      </div>
    </form>
  </div>
`

setElements(document.querySelector<HTMLFormElement>('#poll-form')!,document.querySelector<HTMLDivElement>('#results')!)