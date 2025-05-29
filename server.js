const sequelize = require('sequelize');
const { User, Store, Rating } = require('./models');

sequelize.sync({ alter: true }) // or { force: true } for dev-only resets
    .then(() => console.log('Database synced'))
    .catch(err => console.error('Sync failed:', err));
