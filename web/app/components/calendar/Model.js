export default class Model {
    constructor() {
        this.models = JSON.parse(localStorage.getItem('task')) || [];
        this.default();
    }
    default () {
        let tasks = [{
                year: 2021,
                month: 8,
                day: 14,
                categorie: 'work',
                id: 10,
                tittle: 'work',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis condimentum urna, id consequat urna. Fusce accumsan risus tellus, eu tincidunt lectus iaculis vitae. Integer euismod convallis purus, eu dignissim odio ultricies id. Curabitur auctor tempor convallis. Quisque molestie felis non ultrices mattis. Maecenas tristique blandit lacus eget fringilla. Sed mi arcu, accumsan id vestibulum accumsan, scelerisque id lorem. Duis nec auctor nisl. Sed non erat in ex porta pretium vel in elit. Pellentesque sagittis accumsan est, nec ullamcorper eros vehicula non.'
            },
            {
                year: 2021,
                month: 8,
                day: 16,
                categorie: 'work',
                id: 10,
                tittle: 'work',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis condimentum urna, id consequat urna. Fusce accumsan risus tellus, eu tincidunt lectus iaculis vitae. Integer euismod convallis purus, eu dignissim odio ultricies id. Curabitur auctor tempor convallis. Quisque molestie felis non ultrices mattis. Maecenas tristique blandit lacus eget fringilla. Sed mi arcu, accumsan id vestibulum accumsan, scelerisque id lorem. Duis nec auctor nisl. Sed non erat in ex porta pretium vel in elit. Pellentesque sagittis accumsan est, nec ullamcorper eros vehicula non.'
            },
            {
                year: 2021,
                month: 8,
                day: 14,
                categorie: 'other',
                id: 10,
                tittle: 'work',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis condimentum urna, id consequat urna. Fusce accumsan risus tellus, eu tincidunt lectus iaculis vitae. Integer euismod convallis purus, eu dignissim odio ultricies id. Curabitur auctor tempor convallis. Quisque molestie felis non ultrices mattis. Maecenas tristique blandit lacus eget fringilla. Sed mi arcu, accumsan id vestibulum accumsan, scelerisque id lorem. Duis nec auctor nisl. Sed non erat in ex porta pretium vel in elit. Pellentesque sagittis accumsan est, nec ullamcorper eros vehicula non.'
            },
            {
                year: 2021,
                month: 8,
                day: 14,
                categorie: 'work',
                id: 10,
                tittle: 'work',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis condimentum urna, id consequat urna. Fusce accumsan risus tellus, eu tincidunt lectus iaculis vitae. Integer euismod convallis purus, eu dignissim odio ultricies id. Curabitur auctor tempor convallis. Quisque molestie felis non ultrices mattis. Maecenas tristique blandit lacus eget fringilla. Sed mi arcu, accumsan id vestibulum accumsan, scelerisque id lorem. Duis nec auctor nisl. Sed non erat in ex porta pretium vel in elit. Pellentesque sagittis accumsan est, nec ullamcorper eros vehicula non.'
            }
        ]

        localStorage.setItem(`task`, JSON.stringify(tasks))



    }


}