import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  password = '';

  onInputLength(target: EventTarget) {
    const value = (target as HTMLInputElement).value;
    const parsedValue = parseInt(value);

    if(Number.isInteger(parsedValue)) {
      this.length = parsedValue;
    }
    else {
      this.length = 0;
    }
  }

  onChangeUseLetters() {
    this.useLetters = !this.useLetters;
  }

  onChangeUseNumbers() {
    this.useNumbers = !this.useNumbers;
  }

  onChangeUseSymbols() {
    this.useSymbols = !this.useSymbols;
  }

  isGenerateValid() {
    if(this.length > 0 && (this.useLetters || this.useNumbers || this.useSymbols)) {
      return true;
    }
    else return false;

  }

  onClickGeneratePassword() {
    // console.log('letters: ' + this.useLetters);
    // console.log('numbers: ' + this.useNumbers);
    // console.log('symbols: ' + this.useSymbols);

    const letters = 'qwertyuiopasdfghjklzxcvbnm';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()_+-=`~[]\\|;\':",./<>?';

    let validChars = '';

    if (this.useLetters) {
      validChars += letters;
    }
    if (this.useNumbers) {
      validChars += numbers;
    }
    if (this.useSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);

      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }
}
