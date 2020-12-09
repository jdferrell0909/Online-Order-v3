const products = [
  {
    _id: '1',
    name: 'Bacon Cheeseburger',
    image: '/images/bacon-burger.jpg',
    description:
      'Angus beef patty, lettuce, tomato, onion, pickle, bacon, brioche bun',
    category: 'Handhelds',
    price: 12.00,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: '2',
    name: 'Chef\'s Salad',
    image: '/images/chef_salad.jpg',
    description:
      'Greens, tomato, cheddar, swiss, ham, cucumber, egg, cream Italian dressing',
    category: 'Salads',
    price: 11.00,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: '3',
    name: 'Margherita Flatbread',
    image: '/images/flatbread.jpg',
    description:
      'Handrolled dough, fresh mozzarella, tomatoes, fresh basil',
    category: 'Appetizer',
    price: 9.00,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: '4',
    name: 'Chicken Alfredo Pasta',
    image: '/images/pasta.jpg',
    description:
      'Fettucine noodles, parmesan cream sauce, chicken breast',
    category: 'Pasta',
    price: 18.00,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: '5',
    name: 'Vegan Stuffed Peppers',
    image: '/images/stuffed-peppers.jpg',
    description:
      'Roasted bell peppers stuffed with corn, black beans, tofu, veggies',
    category: 'Entrees',
    price: 15.00,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: '6',
    name: 'Filet Mignon',
    image: '/images/filet.jpg',
    description:
      'Grilled tenderloin, served with mashed potatoes and asparagus, finished with cabernet demi glace',
    category: 'Entrees',
    price: 34.00,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
]

module.exports = products;