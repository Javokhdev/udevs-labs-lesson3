const Order = require('../models/order');
const Product = require('../models/product');

// Create an order
exports.createOrder = async (req, res) => {
  try {
    const { productId, quantity, customerName } = req.body;

    // Fetch the product to calculate totalPrice
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    const totalPrice = product.price * quantity;

    const order = new Order({ productId, quantity, totalPrice, customerName });
    await order.save();

    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all orders with pagination
exports.getOrders = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const orders = await Order.find()
      .populate('productId') // Fetch product details
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Order.countDocuments();

    res.json({ total, orders });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update an order
exports.updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('productId');
    res.json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete an order
exports.deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
