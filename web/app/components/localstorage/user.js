export default function usersStorage() {
    let users = {
        id: 1,
        name: 'Oleg',
        surname: 'dsgvds',
        password: '131',
        login: 'kek',
        email: 'oleg123@gmail.com'

    }

    localStorage.setItem(`users`, JSON.stringify(users))
}