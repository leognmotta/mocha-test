const { expect } = require('chai');

const Cart = require('../../src/models/Cart');

describe('some', () => {
  // beforeEach(done => mongoose.connection.collections.carts.drop(() => done()));
  // after(done => mongoose.connection.collections.carts.drop(() => done()));

  it('creates a cart', async () => {
    const cart = new Cart({ name: 'someCart' });
    const savedCart = await cart.save();

    expect(savedCart.name).to.equal('someCart');
  });
});
