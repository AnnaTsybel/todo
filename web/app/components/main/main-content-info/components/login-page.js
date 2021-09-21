export default function loginPage() {
    const name = 'login-registration';

    function createElement(tag, className) {
        const element = document.createElement(tag);

        if (className) {
            element.classList.add(className);
        }

        return element;
    }
    const main = document.querySelector('.login-page');

    function createLoginForm(helpText, helpTextspan, activeClass, inputs) {
        //create content 
        const loginPageContent = createElement('div', 'login-page__content');

        //create header
        const loginPageHeader = createElement('div', 'login-page__header');
        loginPageHeader.innerHTML = 'TODO project';

        //create container for types
        const loginPageTypes = createElement('div', 'login-page__types');

        //create register type
        const loginPageTypeRegister = createElement('p', 'login-page__type');
        loginPageTypeRegister.innerHTML = 'Registration';
        //create enter type
        const loginPageTypeEnter = createElement('p', 'login-page__type');
        loginPageTypeEnter.innerHTML = 'entrance';

        //check what type is active
        if (activeClass === 'enter') {
            loginPageTypeEnter.classList.add('active-form');
        } else if (activeClass === 'register') {
            loginPageTypeRegister.classList.add('active-form');
        }

        //append types into container
        loginPageTypes.append(loginPageTypeRegister, loginPageTypeEnter);

        //create form 
        const loginPageForm = createElement('form', 'login-page__form');

        //create input login
        const loginPageLoginInput = createElement('input');
        loginPageLoginInput.setAttribute('type', 'text');
        loginPageLoginInput.setAttribute('required', 'true');
        loginPageLoginInput.setAttribute('placeholder', 'Login');

        //create password input container
        const loginPagePassword = createElement('div', 'password-input');

        //create password input 
        const loginPagePasswordInput = createElement('input');
        loginPagePasswordInput.setAttribute('type', 'password');
        loginPagePasswordInput.setAttribute('id', 'password');
        loginPagePasswordInput.setAttribute('required', 'true');
        loginPagePasswordInput.setAttribute('placeholder', 'Password')

        //create password input button to enter opportunity of see password
        const loginPagePasswordIcon = createElement('a', 'password_control');
        loginPagePasswordIcon.setAttribute('a', '#');
        loginPagePassword.append(loginPagePasswordInput, loginPagePasswordIcon);

        //create submit button
        const loginPageSubmit = createElement('button');
        loginPageSubmit.setAttribute('type', 'submit')
        loginPageSubmit.innerHTML = helpTextspan;

        //append inputs and buttons into form
        if (inputs) {
            loginPageForm.append(loginPageLoginInput, loginPagePassword, ...inputs, loginPageSubmit)
        } else {
            loginPageForm.append(loginPageLoginInput, loginPagePassword, loginPageSubmit)
        }

        //create login page help text
        const loginPageHelp = createElement('a', 'login-page__help');
        loginPageHelp.setAttribute('a', '#');
        const loginPageHelpSpan = createElement('span');
        loginPageHelpSpan.innerHTML = 'Login';
        loginPageHelp.append(helpText, loginPageHelpSpan);

        //circles array
        const circles = [];
        for (let i = 0; i < 6; i++) {
            const circle = createElement('div', `login-page__circle${i+1}`);
            circles.push(circle);
        }
        loginPageContent.append(loginPageHeader, loginPageTypes, loginPageForm, loginPageHelp, ...circles);

        main.appendChild(loginPageContent)

    }


    if (name === 'login-enter') {
        const active = 'enter';
        const txt = 'Do not have account ';
        const txtSpan = 'register';

        createLoginForm(txt, txtSpan, active)
    } else {
        const active = 'register';
        const txt = 'Already on account ';
        const txtSpan = 'Login ';
        //create input name
        const loginPageNameInput = createElement('input');
        loginPageNameInput.setAttribute('type', 'text');
        loginPageNameInput.setAttribute('required', 'true');
        loginPageNameInput.setAttribute('placeholder', 'Name');

        //create Email name
        const loginPageEmailInput = createElement('input');
        loginPageEmailInput.setAttribute('type', 'email');
        loginPageEmailInput.setAttribute('required', 'true');
        loginPageEmailInput.setAttribute('placeholder', 'Email');

        //create input name
        const loginPageSurnameInput = createElement('input');
        loginPageSurnameInput.setAttribute('type', 'text');
        loginPageSurnameInput.setAttribute('required', 'true');
        loginPageSurnameInput.setAttribute('placeholder', 'Surname')
        const inputs = [loginPageNameInput, loginPageSurnameInput, loginPageEmailInput];

        createLoginForm(txt, txtSpan, active, inputs)
    }

    //create animated circles
    const circlesAnimated = [];
    for (let i = 0; i < 6; i++) {
        const circle = createElement('div', `login-page__circle--animated${i+1}`);
        circlesAnimated.push(circle);
    }

    //append circles into main
    main.append(...circlesAnimated)

}