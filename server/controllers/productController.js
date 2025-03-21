// function for add product
import { getPresignedUrl, uploadImageToS3 } from "../helpers/getPresignedUrl.js";
import Product from "../models/productModel.js";
async function addProduct(req, res) {
  try {
    const {
      name,
      description,
      price,
      category,
      subcategory,
      sizes,
      bestseller,
    } = req.body;

    console.log("Request Body:", req.body);

    const response = await Promise.all(
      Object.keys(req.files).map(async (key) => {
        return await uploadImageToS3("testing545454", req.files[key][0]);
      })
    );

    const image1 = req.files.image1 && req.files.image1[0]?.originalname;
    const image2 = req.files.image2 && req.files.image2[0]?.originalname;
    const image3 = req.files.image3 && req.files.image3[0]?.originalname;
    const image4 = req.files.image4 && req.files.image4[0]?.originalname;

    const images = [image1, image2, image3, image4].filter(
      (item) => item != undefined
    );

    console.log("Uploaded Image Names:", images);

    const parsedSizes = sizes ? JSON.parse(sizes) : [];

    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subcategory,
      bestseller: bestseller === "true" ? true : false,
      sizes: parsedSizes,
      image: images,
      date: Date.now(),
    };

    // Creating and saving the product document in MongoDB
    const product = new Product(productData);
    await product.save();

    res.json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}

// function for list product
async function listProduct(req, res) {
  try {
    const products = await Product.find({});
    for (let product of products) {
      if (product.image && product.image.length > 0) {
        product.image = await Promise.all(
          product.image.map(async (img) => await getPresignedUrl("testing545454", img))
        );
      }
    }
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}

// function for removing product
const removeProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for single product info
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await Product.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addProduct, listProduct, removeProduct, singleProduct };
