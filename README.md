# angular-password-generator
 
This project is my implementation of a fairly common Angular app, inspired by one of the projects in the Modern Angular Bootcamp course. However, much of the implementation is guided by different decisions (e.g. I chose to stick to built-in Angular CLI commands, and not to rely on imported CSS scripts).

It has the following added features:

- Hand stylized via the latest Angular Material components and theming, and some custom CSS
- Takes unallowed characters into account via regular expression
- Randomly makes some letters uppercase unless not desired by user
- Improved logic for efficiency and compatibility with latest Angular version, including improved type checking, and passing of event targets rather than entire events

### [Visit the app here on Github Pages!](https://arami265.github.io/angular-password-generator/) (It can lead you back here)
<br>

## TODO:
- Add additional pages for additional generation methods
- Add more granularity to unallowing specific upper/lowercase letters (currently bans both cases)
