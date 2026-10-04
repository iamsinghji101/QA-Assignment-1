const validUserCreds = {
    username: process.env.testUserName!,
    password: process.env.testPassword!
};

const invalidUserCreds = {
    username: `fakeUser_${Date.now()}`,
    password: `Fake@${Date.now()}`
};

export { validUserCreds, invalidUserCreds };