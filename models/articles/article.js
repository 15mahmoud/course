const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minlength: [
        5,
        "Less than the number of characters allowed,The minimum length is 5",
      ],
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ArticleCategory",
    },
    status: {
      type: String,
      enum: ["Draft", "Published"],
      default: "Draft",
    },
    content: {
      type: String,
      required: [true, "The Content is required"],
      trim: true,
    },
    publishDate: {
      type: Date,
    },
    coverPhoto: {
      type: String,
      default: "https://i.postimg.cc/nzSxXqPQ/image.jpg",
    },
    reacts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "ArticleReact", // المرجعية للمراجعات
    }],
    
    reviews: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "ArticleReview", // المرجعية للمراجعات
    }],
    comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "ArticleComment", // المرجعية للتعليقات
    }],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Article = mongoose.model("Article", articleSchema);
module.exports = Article;
