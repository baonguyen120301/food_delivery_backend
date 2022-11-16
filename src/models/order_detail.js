const { sequelize } = require("../services/common");
const { DataTypes } = require("sequelize");

const orderDetail = sequelize.define(
  "order_detail",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    order_id: {
      type: DataTypes.STRING(25),
      allowNull: false,
      references: {
        model: "order",
        key: "id",
      },
    },
    product_id: {
      type: DataTypes.STRING(25),
      allowNull: false,
      primaryKey: true,
      references: {
        model: "menu",
        type: "id",
      },
    },
    quantity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

async function insertOrderDetail(id, account_id, product_id, quantity) {
  try {
    await Order.create({
      id: id,
      account_id: account_id,
      product_id: product_id,
      quantity: quantity,
    });

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

module.exports = { orderDetail, insertOrderDetail };
