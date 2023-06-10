import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-calculator-button',
  templateUrl: './calculator-button.component.html',
  styleUrls: ['./calculator-button.component.css']
})
export class CalculatorButtonComponent 
{
  output: string = "";
  calcButtons: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "/", "*", "-", "+", ","];
  
  @HostListener('document:keypress', ['$event'])
  onKeypress(event: KeyboardEvent)
  {
    console.log(event.key);
    if(event.key === "Enter")
    {
      this.calculation();
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
      this.clearList();
    }
  }

  clickButton(buttonValue: string)
  {
    this.output += buttonValue;
  }

  calculation()
  {
    let text: string = this.output; 
    let tempText: string = "";
    let newText: string[] = [];
    let op: string[] = ["+", "-", "/", "*"];
    let numb: number | undefined = 0;

    if(text === "")
    {
      text = "0";
    }
    else
    {
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
      newText = tempText.split('@', text.length);

      let i = 0;
      while(i < newText.length)
      {
        if(newText[i] === "+")
        {
          let first = +newText.splice(i - 1, 1);
          newText.splice(i - 1, 1);
          let second = +newText.splice(i - 1, 1);
          numb = first + second;
          newText.unshift(numb.toString());
          i = 0;
        }
        if(newText[i] === "-")
        {
          let first = +newText.splice(i - 1, 1);
          newText.splice(i - 1, 1);
          let second = +newText.splice(i - 1, 1);
          numb = first - second;
          newText.unshift(numb.toString());
          i = 0;
        }
        if(newText[i] === "*")
        {
          console.log(newText);
          let first = +newText.splice(i - 1, 1);
          newText.splice(i - 1, 1);
          let second = +newText.splice(i - 1, 1);
          numb = first * second;
          newText.unshift(numb.toString());
          i = 0;
        }
        if(newText[i] === "/")
        {
          let first = +newText.splice(i - 1, 1);
          newText.splice(i - 1, 1);
          let second = +newText.splice(i - 1, 1);
          numb = first / second;
          newText.unshift(numb.toString());
          i = 0;
        }
        else
        {
          i++;
        }
      }
    }
    console.log(newText);
    newText = [];
    tempText = "";
    this.output = numb.toString();
  }

  clearList()
  {
    this.output = "0";
  }
}
