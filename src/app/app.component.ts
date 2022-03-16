import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  unallowed = '';
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
    else this.length = 0;
  }

  onInputUnallowed(target: EventTarget) {
    const value = (target as HTMLInputElement).value;
    const unallowed = value;

    if(unallowed.length > 0) {
      this.unallowed = unallowed;
    }
    else this.unallowed = '';
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
    // console.log(this.unallowed);

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

    if(this.unallowed.length > 0) {
      for (let i = 0; i < this.unallowed.length; i++) {
        validChars = validChars.replace(this.unallowed[i], '');
      }
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const randIndex = Math.floor(Math.random() * validChars.length);

      generatedPassword += validChars[randIndex];
    }

    this.password = generatedPassword;
  }
}
