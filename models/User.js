const users = [
    {
        id: 1,
        name: "abc"
    }
]

class User {
    constructor(id, name) {
        this.id = id      
        this.name = name;
    }

    static getUserById(id) {
        return users.filter(user => user.id = id);
    }

    static addUser(user) {
        users.push(user);
    }
}