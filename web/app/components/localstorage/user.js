export default function usersStorage() {
    let users = {
        id: 1,
        name: 'Oleg',
        surname: 'dsgvds',


    }

    localStorage.setItem(`users`, JSON.stringify(users))
}