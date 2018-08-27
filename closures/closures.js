const setCounter = function (num) {
    let counter = 0
  
    const count = function () {
      counter += num;
      console.log(counter)

    }
  
    return count
  }
  
  const increment = setCounter(2)
  increment()

  const m = mathOperations()
  m.add(13, 29)
  m.mult (1.75 , 24)
  m.mult(7 , m.div(36 , 6))

  const UsersModule = function () {
    const users = ['Aaron', 'Avi'];

    const addUser = function (user) {
        users.push(user)
    }

    const listUsers = function () {
        for (user of users) {
            user
        }
    }

    return {
        addUser: addUser,
        listUsers: listUsers
    }
}

const usersModule = UsersModule()

usersModule.addUser('Narkis')
usersModule.listUsers()
