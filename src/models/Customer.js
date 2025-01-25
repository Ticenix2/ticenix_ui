class Customer {
    constructor(id, username, email, password, role, createdAt, updatedAt) {
      this.id = id; // Müşteri kimliği
      this.username = username; // Kullanıcı adı
      this.email = email; // E-posta adresi
      this.password = password; // Şifre (hashlenmiş olabilir)
      this.role = role; // Kullanıcı rolü (ör. "customer" veya "admin")
      this.createdAt = createdAt; // Hesap oluşturulma tarihi
      this.updatedAt = updatedAt; // Hesap güncellenme tarihi
    }
  
    // Müşteri verisini JSON formatında döndürür
    toJSON() {
      return {
        id: this.id,
        username: this.username,
        email: this.email,
        password: this.password,
        role: this.role,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
      };
    }
  
    
    // Backend'den gelen verilerle Customer modelini oluşturur
    static fromJSON(jsonData) {
      return new Customer(
        jsonData.id,
        jsonData.username,
        jsonData.email,
        jsonData.password,
        jsonData.role,
        jsonData.createdAt,
        jsonData.updatedAt
      );
    }
  }
  
  export default Customer;
  