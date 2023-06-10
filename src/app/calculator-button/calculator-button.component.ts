import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-calculator-button',
  templateUrl: './calculator-button.component.html',
  styleUrls: ['./calculator-button.component.css']
})
export class CalculatorButtonComponent 
{
  outputs: string = "";
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
    this.outputs += buttonValue;
  }

  calculation()
  {
    let text: string = "5*5"; 
    let tempText: string = "";
    let newText: string[] = [];
    let op: string[] = ["+", "-", "/", "*"];

    for(let i = 0; i < text.length; i++)
    {
      if(op.includes(text[i]))
        {
          tempText += "@"+text[i]+"@";
        }
        else
        {
          tempText += text[i];
        }
    }

    newText = tempText.split('@', 3);
    console.log(newText);
    let i = 0;
    while(i < newText.length)
    {
      if(newText[i] === "*")
      {
        let first = +newText.splice(i - 1, 1);
        newText.splice(i - 1, 1);
        let second = +newText.splice(i - 1, 1);
        let numb = first * second;
        newText.push(numb.toString());
        i = 0;
      }
      else
      {
        i++;
      }
    }
  }
}
