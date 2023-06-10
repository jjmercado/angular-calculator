import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-calculator-button',
  templateUrl: './calculator-button.component.html',
  styleUrls: ['./calculator-button.component.css']
})
export class CalculatorButtonComponent 
{
  outputs: string[] = [];
  calcButtons: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "/", "*", "-", "+", ","];
  
  @HostListener('document:keypress', ['$event'])
  onKeypress(event: KeyboardEvent)
  {
    console.log(event.key);
    if(event.key === "Enter")
    {
      console.log("ENTER");
    }
    else
    {
      this.calcButtons.forEach(element => 
        {
          if (event.key === element) 
          {
            this.clickButton(event.key);  
          }  
        });
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent)
  {
    if(event.key === "Backspace")
    {
      console.log("Backspace");
    }
  }

  clickButton(buttonValue: string)
  {
    this.outputs.push(buttonValue);
  }

  calculation(output: string[])
  {

  }
}
