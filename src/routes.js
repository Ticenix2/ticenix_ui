const ROUTES = {
  // Ana sayfa
  HOME: "/",

  // Kayıt ol ve giriş yap sayfaları
  REGISTER: "/register", // Kayıt ol
  LOGIN: "/login", // Giriş yap

  // Google ile giriş
  GOOGLE_LOGIN: "/google-login", // Google ile giriş yapılacak sayfa

  // Şifre sıfırlama ve ilgili işlemler
  FORGOT_PASSWORD: "/forgot-password", // Şifremi unuttum
  RESET_PASSWORD: "/reset-password", // Şifre sıfırlama (parolayı yeniden oluşturma)
  PASSWORD_RESET_CONFIRMATION: "/password-reset-confirmation", // Şifre sıfırlama onayı

  // Profil tamamlama süreci
  PROFILE_COMPLETE: "/profile-complete", // Profil tamamlama
  PROFILE_BUSINESS_INFO: "/profile-complete/business-info", // İşletme bilgileri
  PROFILE_CONTACT_INFO: "/profile-complete/contact-info", // İletişim bilgileri
  PROFILE_PAYMENT_INFO: "/profile-complete/payment-info", // Ödeme bilgileri
  PROFILE_CONFIRMATION: "/profile-complete/confirmation", // Profil onay

  // Dashboard
  DASHBOARD: "/dashboard", // Ana Menü
  PERSONAL_DASHBOARD: "/dashboard/personal", // Kişisel Dashboard
  LIVE_TRACKING: "/dashboard/live", // Canlı Takip
  NOTES_AND_REMINDERS: "/dashboard/notes", // Notlar ve Hatırlatmalar

  // İstatistikler
  SALES_STATISTICS: "/dashboard/sales", // Toplam Satışlar
  ACTIVE_USERS: "/dashboard/active-users", // Aktif Kullanıcılar
  TOTAL_ORDERS: "/dashboard/orders", // Toplam Siparişler
  MONTHLY_STATISTICS: "/dashboard/monthly-statistics", // Aylık İstatistikler
  ANNUAL_STATISTICS: "/dashboard/annual-statistics", // Yıllık İstatistikler

  // Siparişler
  NEW_ORDERS: "/orders/new", // Yeni Siparişler
  ORDER_STATUS: "/orders/status", // Sipariş Durumları
  ORDER_HISTORY: "/orders/history", // Geçmiş Siparişler

  // Ürünler
  PRODUCTS: "/products", // Ürünler
  ADD_PRODUCT: "/products/add", // Ürün Ekle
  LIST_PRODUCTS: "/products/list", // Ürün Listeleme
  PRODUCT_CATEGORIES: "/products/categories", // Ürün Kategorileri
  STOCK_MANAGEMENT: "/products/stock", // Stok Yönetimi
  PRICE_CHANGES: "/products/pricing", // Fiyat Değişiklikleri
  PRODUCT_IMAGES: "/products/images", // Ürün Görselleri
  PRODUCT_REVIEWS: "/products/reviews", // Ürün İncelemeleri
  PRODUCT_SUGGESTIONS: "/products/suggestions", // Ürün Önerileri

  // Yönetici Paneli
  ADMIN_PANEL: "/admin-panel", // Yönetici Paneli
  SALES_REPORTS: "/admin/sales-reports", // Satış Raporları
  ORDER_REPORTS: "/admin/order-reports", // Sipariş Raporları
  USER_REPORTS: "/admin/user-reports", // Kullanıcı Raporları
  INVENTORY_MANAGEMENT: "/admin/inventory", // Stok ve Envanter Yönetimi
  TRANSACTION_HISTORY: "/admin/transaction-history", // İşlem Geçmişi
  SECURITY_AND_USER_RIGHTS: "/admin/security", // Güvenlik ve Kullanıcı Yetkileri
  USER_MANAGEMENT: "/admin/user-management", // Yeni Kullanıcı Yönetimi

  // Ayarlar
  SETTINGS: "/settings", // Ayarlar
  PAYMENT_SETTINGS: "/settings/payment", // Ödeme Sistemleri
  SHIPPING_INTEGRATION: "/settings/shipping", // Kargo Entegrasyonu
  SYSTEM_SETTINGS: "/settings/system", // Sistem Ayarları
  SEO_SETTINGS: "/settings/seo", // SEO Ayarları
  EMAIL_NOTIFICATIONS: "/settings/email-notifications", // E-posta Bildirim Ayarları
  CUSTOM_EMAIL_NOTIFICATIONS: "/settings/custom-email-notifications", // Özel E-posta Bildirimleri

  // Tema Yönetimi
  THEME_SELECTION: "/settings/theme-selection", // Tema Seçimi
  THEME_SETTINGS: "/settings/theme-settings", // Tema Ayarları

  // SEO Yönetimi
  SEO_OVERVIEW: "/seo/overview", // SEO Genel Bakış
  SEO_KEYWORDS: "/seo/keywords", // Anahtar Kelimeler
  META_TAGS: "/seo/meta-tags", // Meta Etiketleri
  SEO_PERFORMANCE: "/seo/performance", // SEO Performansı
  SEO_IMPROVEMENTS: "/seo/improvements", // SEO İyileştirmeleri
  SEO_TARGETING: "/seo/targeting", // SEO Hedefleme

  // Raporlar
  REPORTS: "/reports", // Raporlar
  SALES_REPORTS_GENERAL: "/reports/sales", // Genel Satış Raporları
  USER_ACTIVITY_REPORTS: "/reports/user-activity", // Kullanıcı Aktivite Raporları
  ORDER_AND_STOCK_REPORTS: "/reports/orders", // Sipariş ve Stok Raporları
  SEO_REPORTS: "/reports/seo", // SEO Raporları
  USER_ENGAGEMENT_REPORTS: "/reports/user-engagement", // Kullanıcı Etkileşim Raporları

  // Destek
  SUPPORT: "/support", // Destek
  SUPPORT_TICKETS: "/support/tickets", // Destek Talebi
  FAQ: "/support/faq", // Sık Sorulan Sorular (SSS)
  SUPPORT_EMAIL: "/support/email", // E-posta Desteği
  LIVE_CHAT_SUPPORT: "/support/live-chat", // Canlı Destek
};

export default ROUTES;
