import UserSchema from "@schemas/UserSchema"


test('verify userschema', () => {

    const user = new UserSchema('Juniodev', 13)

    expect(user.name).toEqual('Juniodev')
    expect(user.idade).toEqual(13)
})