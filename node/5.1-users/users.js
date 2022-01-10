
import fs from 'fs'
import chalk from 'chalk'
import { v4 as uuidv4 } from 'uuid';

const loadUsers = () => {
    try {
        const dataBuffer = fs.readFileSync('users.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const saveUsers = (users) => {
    const dataJSON = JSON.stringify(users)
    fs.writeFileSync('users.json', dataJSON)
}

export const createUser = (name, email) => {
    const users = loadUsers()
    const id= uuidv4();
    users.push({
        id,
        name,
        email
    })

    saveUsers(users)
    console.log(chalk.green.inverse('New user added with id:'+id));
}


export const removeUser = (id) => {
    const users = loadUsers()
    const usersToKeep = users.filter((user) => user.id !== id)

    if (users.length > usersToKeep.length) {
        console.log(chalk.green.inverse('User removed!'))
        saveUsers(usersToKeep)
    } else {
        console.log(chalk.red.inverse('No user found!'))
    }    
}

export const listUsers = () => {
    const users = loadUsers()

    console.log(chalk.inverse('Your users'))

    users.forEach((user) => {
        console.log(`(${user.id}): name: ${user.name}, email: ${user.email}`);
    });
}

export const readUser = (id) => {
    const users = loadUsers()

    const user = users.find((user) => user.id === id)

    if (user) {
        console.log(chalk.inverse(`(${user.id}): name: ${user.name}, email: ${user.email}`))
    } else {
        console.log(chalk.red.inverse('User not found!'))
    }
}


export const updateUser = (id, name, email) => {
    const users = loadUsers()
    
    const user = users.find((user) => user.id === id)

    if (user) {
        user.name=name;
        user.email=email;
        console.log(chalk.inverse(`user updated!`))
    } else {
        console.log(chalk.red.inverse('User not found!'))
    }   

    saveUsers(users)
    console.log(chalk.green.inverse('New user added with id:'+id));
}

