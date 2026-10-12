const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
      min: 0
    },
    currency: {
      type: String,
      required: true,
      uppercase: true,
      trim: true
    },
    status: {
      type: String,
      required: true,
      enum: [
        "pending", 
        "completed", 
        "cancelled"
      ]
    },
    payment_method: {
      type: String,
      required: true,
      enum: [
        "cash",
        "bank",
        "gcash",
        "credit_card"
      ]
    }
  },
  {
    timestamps: true
  }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;