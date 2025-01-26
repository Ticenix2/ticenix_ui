// src/models/Customer.js

/**
 * Customer modelini temsil eder.
 */
export default class Customer {
  constructor(id, username, email, role = "customer", createdAt = "", updatedAt = "") {
    this.id = id; // Kullanıcı ID
    this.username = username; // Kullanıcı Adı
    this.email = email; // Kullanıcı E-posta Adresi
    this.role = role; // Kullanıcı Rolü (Varsayılan: customer)
    this.createdAt = createdAt; // Hesap Oluşturma Tarihi
    this.updatedAt = updatedAt; // Hesap Güncelleme Tarihi
  }

  /**
   * API'den gelen JSON verilerini Customer nesnesine dönüştürür.
   * @param {Object} json - API'den gelen veri
   * @returns {Customer} - Customer nesnesi
   */
  static fromJson(json) {
    return new Customer(
      json.id,
      json.username,
      json.email,
      json.role,
      json.createdAt,
      json.updatedAt
    );
  }

  /**
   * Customer nesnesini JSON formatına dönüştürür.
   * @returns {Object} - JSON veri formatı
   */
  toJson() {
    return {
      id: this.id,
      username: this.username,
      email: this.email,
      role: this.role,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
