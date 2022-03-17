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
  useUppercase = true;
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
    const unallowed = (target as HTMLInputElement).value;

    if(unallowed.length > 0) {
      this.unallowed = unallowed;
    }
    else this.unallowed = '';
  }

  onChangeUseLetters() {
    this.useLetters = !this.useLetters;
  }

  onChangeUseUppercase() {
    this.useUppercase = !this.useUppercase;
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
        validChars = validChars.replace(this.unallowed[i].toLowerCase(), '');
      }
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const randIndex = Math.floor(Math.random() * validChars.length);
      let newChar = validChars[randIndex];

      if (letters.includes(newChar) && this.useUppercase) {
        if (Math.random() > 0.8) {
          newChar = newChar.toUpperCase();
        }
      }

      generatedPassword += newChar;
    }

    this.password = generatedPassword;
  }
}
