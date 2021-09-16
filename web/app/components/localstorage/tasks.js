export default function tasksStorage() {
    let tasks = [{
            year: 2021,
            month: 8,
            day: 14,
            categorie: 'work',
            id: 10,
            tittle: 'work',
            status: 'completed',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis condimentum urna, id consequat urna. Fusce accumsan risus tellus, eu tincidunt lectus iaculis vitae. Integer euismod convallis purus, eu dignissim odio ultricies id. Curabitur auctor tempor convallis. Quisque molestie felis non ultrices mattis. Maecenas tristique blandit lacus eget fringilla. Sed mi arcu, accumsan id vestibulum accumsan, scelerisque id lorem. Duis nec auctor nisl. Sed non erat in ex porta pretium vel in elit. Pellentesque sagittis accumsan est, nec ullamcorper eros vehicula non.'
        },
        {
            year: 2021,
            month: 8,
            day: 16,
            categorie: 'education',
            id: 11,
            tittle: 'education',
            status: 'in progress',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis condimentum urna, id consequat urna. Fusce accumsan risus tellus, eu tincidunt lectus iaculis vitae. Integer euismod convallis purus, eu dignissim odio ultricies id. Curabitur auctor tempor convallis. Quisque molestie felis non ultrices mattis. Maecenas tristique blandit lacus eget fringilla. Sed mi arcu, accumsan id vestibulum accumsan, scelerisque id lorem. Duis nec auctor nisl. Sed non erat in ex porta pretium vel in elit. Pellentesque sagittis accumsan est, nec ullamcorper eros vehicula non.'
        },
        {
            year: 2021,
            month: 7,
            day: 14,
            categorie: 'other',
            id: 12,
            tittle: 'other',
            status: 'to-do',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis condimentum urna, id consequat urna. Fusce accumsan risus tellus, eu tincidunt lectus iaculis vitae. Integer euismod convallis purus, eu dignissim odio ultricies id. Curabitur auctor tempor convallis. Quisque molestie felis non ultrices mattis. Maecenas tristique blandit lacus eget fringilla. Sed mi arcu, accumsan id vestibulum accumsan, scelerisque id lorem. Duis nec auctor nisl. Sed non erat in ex porta pretium vel in elit. Pellentesque sagittis accumsan est, nec ullamcorper eros vehicula non.'
        },
        {
            year: 2021,
            month: 8,
            day: 20,
            categorie: 'sport',
            id: 13,
            tittle: 'sport',
            status: 'to-do',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis condimentum urna, id consequat urna. Fusce accumsan risus tellus, eu tincidunt lectus iaculis vitae. Integer euismod convallis purus, eu dignissim odio ultricies id. Curabitur auctor tempor convallis. Quisque molestie felis non ultrices mattis. Maecenas tristique blandit lacus eget fringilla. Sed mi arcu, accumsan id vestibulum accumsan, scelerisque id lorem. Duis nec auctor nisl. Sed non erat in ex porta pretium vel in elit. Pellentesque sagittis accumsan est, nec ullamcorper eros vehicula non.'
        },
        {
            year: 2021,
            month: 8,
            day: 20,
            categorie: 'sport',
            id: 14,
            tittle: 'sport',
            status: 'to-do',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis condimentum urna, id consequat urna. Fusce accumsan risus tellus, eu tincidunt lectus iaculis vitae. Integer euismod convallis purus, eu dignissim odio ultricies id. Curabitur auctor tempor convallis. Quisque molestie felis non ultrices mattis. Maecenas tristique blandit lacus eget fringilla. Sed mi arcu, accumsan id vestibulum accumsan, scelerisque id lorem. Duis nec auctor nisl. Sed non erat in ex porta pretium vel in elit. Pellentesque sagittis accumsan est, nec ullamcorper eros vehicula non.'
        },
        {
            year: 2021,
            month: 7,
            day: 20,
            categorie: 'hobby',
            id: 15,
            tittle: 'hobby',
            status: 'in progress',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis condimentum urna, id consequat urna. Fusce accumsan risus tellus, eu tincidunt lectus iaculis vitae. Integer euismod convallis purus, eu dignissim odio ultricies id. Curabitur auctor tempor convallis. Quisque molestie felis non ultrices mattis. Maecenas tristique blandit lacus eget fringilla. Sed mi arcu, accumsan id vestibulum accumsan, scelerisque id lorem. Duis nec auctor nisl. Sed non erat in ex porta pretium vel in elit. Pellentesque sagittis accumsan est, nec ullamcorper eros vehicula non.'
        },
        {
            year: 2021,
            month: 8,
            day: 7,
            categorie: 'education',
            id: 16,
            tittle: 'education',
            status: 'in progress',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis condimentum urna, id consequat urna. Fusce accumsan risus tellus, eu tincidunt lectus iaculis vitae. Integer euismod convallis purus, eu dignissim odio ultricies id. Curabitur auctor tempor convallis. Quisque molestie felis non ultrices mattis. Maecenas tristique blandit lacus eget fringilla. Sed mi arcu, accumsan id vestibulum accumsan, scelerisque id lorem. Duis nec auctor nisl. Sed non erat in ex porta pretium vel in elit. Pellentesque sagittis accumsan est, nec ullamcorper eros vehicula non.'
        }
    ]
    localStorage.setItem(`task`, JSON.stringify(tasks))
}