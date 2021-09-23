export default function usersStorage() {
    let users = {
        id: 1,
        name: 'Oleg',
        surname: 'dsgvds',
        password: '131',
        login: 'kek',
        email: 'oleg123@gmail.com',
        photo: 'https://klike.net/uploads/posts/2019-07/1564314090_3.jpg'
    }

    localStorage.setItem(`users`, JSON.stringify(users))
}