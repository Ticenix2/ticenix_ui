// models/Product.js
class Product {
    constructor({
      productId = '',
      productName = '',
      description = '',
      stock = 0,
      price = 0,
      discountPrice = 0,
      imgUrl = '',
      categoryId = '',
      status = 'active',
      imageFile = null,
    }) {
      this.productId = productId;
      this.productName = productName;
      this.description = description;
      this.stock = stock;
      this.price = price;
      this.discountPrice = discountPrice;
      this.imgUrl = imgUrl;
      this.categoryId = categoryId;
      this.status = status;
      this.imageFile = imageFile;
    }
  
    // Ürün objesini server ile uyumlu hale getirmek için kullanılır
    toFormData() {
      const formData = new FormData();
      formData.append('productName', this.productName);
      formData.append('description', this.description);
      formData.append('stock', this.stock);
      formData.append('price', this.price);
      formData.append('discountPrice', this.discountPrice);
      formData.append('categoryId', this.categoryId);
      formData.append('status', this.status);
      if (this.imageFile) {
        formData.append('imageFile', this.imageFile);
      }
      return formData;
    }
  }
  
  export default Product;
  