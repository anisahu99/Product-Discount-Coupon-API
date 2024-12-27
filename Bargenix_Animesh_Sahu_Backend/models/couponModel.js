const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../database/db.json');

const readDatabase = () => {
    const data = fs.readFileSync(dbPath, 'utf-8');
    return JSON.parse(data);
};

const writeDatabase = (data) => {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

module.exports = {
    getProducts: () => readDatabase().products,
    getUsers: () => readDatabase().users,
    getCoupons: () => readDatabase().coupons,
    saveCoupon: (coupon) => {
        const db = readDatabase();
        db.coupons.push(coupon);
        writeDatabase(db);
    }
};
