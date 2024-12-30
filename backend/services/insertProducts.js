const Product = require("../models/productModel");
const convertImageToBase64 = require("../utils/imageToBase64");
const path = require("path");

// 이미지 파일 경로
const imageFilePath = path.join(
  __dirname,
  "../images/mika-baumeister-7KLpKCG05vI-unsplash.jpg"
);

// Base64 인코딩된 이미지
const base64Image = convertImageToBase64(imageFilePath);

// 초기 데이터 생성
const initialProducts = Array.from({ length: 30 }, (_, index) => ({
  name: `Product ${index + 1}`,
  price: (index + 1) * 100,
  image: base64Image,
  description: `Description for Product ${index + 1}`,
}));

// 초기 데이터 삽입 함수
const insertInitialData = async () => {
  try {
    const count = await Product.countDocuments();
    if (count === 0) {
      await Product.insertMany(initialProducts);
      console.log("Initial products inserted successfully.");
    } else {
      console.log("Products already exist. Skipping insertion.");
    }
  } catch (error) {
    console.error("Failed to insert initial products:", error.message);
  }
};

module.exports = insertInitialData;
