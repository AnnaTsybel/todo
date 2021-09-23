export default function loginPage(name) {


    function createElement(tag, className) {
        const element = document.createElement(tag);

        if (className) {
            element.classList.add(className);
        }

        return element;
    }
    const content = createElement('main', 'login-page');
    const circlesAnimated = [];
    for (let i = 0; i < 6; i++) {
        const circle = createElement('div', `login-page__circle--animated${i+1}`);
        circlesAnimated.push(circle);
    }

    function createLoginForm(helpText, helpTextspan, activeClass, link, inputs) {



        //append circles into main


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
        } else if (activeClass === 'registration') {
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
        loginPageSubmit.setAttribute('type', 'submit');
        loginPageSubmit.setAttribute('id', '/home');
        loginPageSubmit.innerHTML = helpTextspan;

        //append inputs and buttons into form
        if (inputs) {
            loginPageForm.append(loginPageLoginInput, loginPagePassword, ...inputs, loginPageSubmit)
        } else {
            loginPageForm.append(loginPageLoginInput, loginPagePassword, loginPageSubmit)
        }

        //create login page help text
        const loginPageHelp = createElement('a', 'login-page__help');
        loginPageHelp.classList.add('go-to-page')
        loginPageHelp.setAttribute('a', '#');
        loginPageHelp.setAttribute('id', link);
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

        return loginPageContent

    }

    let a;
    if (name === 'login-enter') {
        const active = 'enter';
        const txt = 'Do not have account ';
        const txtSpan = 'registration';
        const link = '/login-registration';

        a = createLoginForm(txt, txtSpan, active, link)
    } else if (name === 'login-registration') {
        const active = 'registration';
        const txt = 'Already on account ';
        const txtSpan = 'Login ';
        const link = '/login-enter';
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

        a = createLoginForm(txt, txtSpan, active, link, inputs)
    }
    content.append(a, ...circlesAnimated)
    console.log(content)
    return content;

    //create animated circles


}