const { expect } = require('chai');

const User = require('../src/models/User');

describe('some', () => {
  it('creates a user', async () => {
    const user = new User({ name: 'Leo', age: 26 });
    const savedUser = await user.save();

    expect(savedUser.name).to.equal('Leo');
  });
});
