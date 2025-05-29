const User = require('./User');
const Store = require('./Store');
const Rating = require('./Rating');

// User has many Ratings
User.hasMany(Rating, { foreignKey: 'userId' });

// Store has many Ratings
Store.hasMany(Rating, { foreignKey: 'storeId' });

// Store belongs to User (as owner)
User.hasMany(Store, { foreignKey: 'ownerId' });

module.exports = { User, Store, Rating };
