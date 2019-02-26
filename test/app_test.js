const mongoose = require('mongoose');
const { expect } = require('chai');

const User = require('../src/models/User');

describe('some', () => {
  // beforeEach(done => mongoose.connection.collections.users.drop(() => done()));
  // after(done => mongoose.connection.collections.users.drop(() => done()));

  it('creates a user', async () => {
    const user = new User({ name: 'Leo', age: 26 });
    const savedUser = await user.save();

    expect(savedUser.name).to.equal('Leo');
  });
});
