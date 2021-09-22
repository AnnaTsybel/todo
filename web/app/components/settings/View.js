export default class View {
    constructor(model) {
        this.model = model;
        this.displaySettings(this.model)

    }
    createElement(tag, className) {
        const element = document.createElement(tag);

        if (className) {
            element.classList.add(className);
        }

        return element;
    }

    getElement(selector) {

        return document.querySelector(selector);
    }
    displaySettings(data) {

        const sectionSettings = this.getElement('.section-settings');

        //create header
        const sectionSettingsHeader = this.createElement('h2', 'section-settings__tittle');
        sectionSettingsHeader.innerHTML = 'Profile';

        //create form
        const sectionSettingsForm = this.createElement('form', 'section-settings__form');
        sectionSettingsForm.setAttribute('action', '#');

        //add photo create

        const sectionSettingsAddPhoto = this.createElement('div', 'section-settings__form__element');

        //create label for add photo  
        const sectionSettingsAddPhotoLabel = this.createElement('label', 'add-photo');
        sectionSettingsAddPhotoLabel.setAttribute('for', 'add-photo');

        //create image for label
        const sectionSettingsAddPhotoPhoto = this.createElement('img');
        sectionSettingsAddPhotoPhoto.setAttribute('alt', 'user-photo');
        if (data.models.photo) {
            sectionSettingsAddPhotoPhoto.setAttribute('src', data.models.photo);
        } else {
            sectionSettingsAddPhotoPhoto.setAttribute('src', 'static/images/dest/no_avatar.png');
        }


        //append photo into label
        sectionSettingsAddPhotoLabel.append(sectionSettingsAddPhotoPhoto);

        //create input for add photo
        const sectionSettingsAddPhotoInput = this.createElement('input');
        sectionSettingsAddPhotoInput.setAttribute('type', 'file')
        sectionSettingsAddPhotoInput.setAttribute('id', 'add-photo');
        sectionSettingsAddPhoto.append(sectionSettingsAddPhotoLabel, sectionSettingsAddPhotoInput);

        //create button
        const sectionSettingsButtonSubmit = this.createElement('button', 'button-form');
        sectionSettingsButtonSubmit.setAttribute('type', 'submit');
        sectionSettingsButtonSubmit.innerHTML = "Change";

        let inputs = this.generateInputs(data);

        //append inputs and button into form
        sectionSettingsForm.append(sectionSettingsAddPhoto, ...inputs, sectionSettingsButtonSubmit);
        //append all elements
        sectionSettings.append(sectionSettingsHeader, sectionSettingsForm)

    }
    generateInputs(data) {
        let inputsCheck = {
            name: data.models.name,
            surname: data.models.surname,
            password: data.models.password,
            login: data.models.login,
            email: data.models.email
        };

        //information about inputs
        let inputs = [{
                id: 'settings-login',
                type: 'text',
                placeholder: 'Enter changed login',
                labelText: 'Login',
                name: 'login'
            }, {
                id: 'settings-name',
                type: 'text',
                placeholder: 'Enter changed name',
                labelText: 'Name',
                name: 'name'
            },
            {
                id: 'settings-surname',
                type: 'text',
                placeholder: 'Enter changed surname',
                labelText: 'Surname',
                name: 'surname'
            },
            {
                id: 'settings-password',
                type: 'password',
                placeholder: 'Enter changed password',
                labelText: 'Password',
                name: 'password'
            },
            {
                id: 'settings-repeat-password',
                type: 'password',
                placeholder: 'Repeat changed password',
                labelText: 'Repeat password',
                name: 'password'
            },
            {
                id: 'settings-email',
                type: 'email',
                placeholder: 'enter changed email',
                labelText: 'Email',
                name: 'email'
            },
        ];
        let generatedInputs = [];
        inputs.forEach(function(element) {

            //create container for input and label
            const sectionSettingsContainer = document.createElement('div');
            sectionSettingsContainer.classList.add('section-settings__form__element');

            //create label for input
            const sectionSettingsLabel = document.createElement('label');
            sectionSettingsLabel.setAttribute('for', element.id);
            sectionSettingsLabel.innerHTML = element.labelText;
            const sectionSettingsInput = document.createElement('input');

            //create input
            sectionSettingsInput.setAttribute('id', element.id);
            sectionSettingsInput.setAttribute('type', element.type);
            sectionSettingsInput.setAttribute('placeholder', element.placeholder);

            //set value if necessary
            for (let keys in inputsCheck) {
                if (keys === element.name) {
                    if (inputsCheck[keys] !== '' && element.name !== 'password') {
                        sectionSettingsInput.setAttribute('value', inputsCheck[keys]);
                    }
                }
            }

            //append label and input into container
            sectionSettingsContainer.append(sectionSettingsLabel, sectionSettingsInput);

            generatedInputs.push(sectionSettingsContainer);
        })
        return generatedInputs;
    }

}