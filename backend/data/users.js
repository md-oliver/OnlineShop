import bcrypt from "bcryptjs";

const users = [
    {
        name: "Admin User",
        email: "admin@email.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: "Dummy Jo",
        email: "dj@email.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false,
    },
    {
        name: "JJ Test",
        email: "jjt@email.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false,
    },
];

export default users;
