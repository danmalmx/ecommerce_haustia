import brcypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: brcypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Mack Daddy',
        email: 'mack@daddy.com',
        password: brcypt.hashSync('123456', 10),
    },
    {
        name: 'Miss Piggy',
        email: 'miss@piggy.com',
        password: brcypt.hashSync('123456', 10),
    },
]

export default users;
