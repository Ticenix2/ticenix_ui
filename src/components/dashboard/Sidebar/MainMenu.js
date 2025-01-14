import { FaTachometerAlt, FaProductHunt, FaBox, FaUsers, FaChartBar, FaCog, FaSearch, FaFileInvoice, FaUserShield, FaPaintBrush } from 'react-icons/fa';

const MainMenu = [
  {
    name: 'dashboard',
    label: 'Ana Menü',
    icon: <FaTachometerAlt className="text-xl" />,
    subMenu: [
      { label: 'Kişisel Dashboard', path: '/dashboard/personal' },
      { label: 'Canlı Takip', path: '/dashboard/live' },
      { label: 'Notlar ve Hatırlatmalar', path: '/dashboard/notes' }
    ]
  },
  {
    name: 'statistics',
    label: 'Genel İstatistikler',
    icon: <FaChartBar className="text-xl" />,
    subMenu: [
      { label: 'Toplam Siparişler', path: '/dashboard/orders' },
      { label: 'Toplam Satışlar', path: '/dashboard/sales' },
      { label: 'Günlük İstatistikler', path: '/dashboard/daily-statistics' },
      { label: 'Aylık İstatistikler', path: '/dashboard/monthly-statistics' },
      { label: 'Yıllık İstatistikler', path: '/dashboard/annual-statistics' }
    ]
  },
  {
    name: 'orders',
    label: 'Güncel Siparişler',
    icon: <FaBox className="text-xl" />,
    subMenu: [
      { label: 'Yeni Siparişler', path: '/orders/new' },
      { label: 'Sipariş Durumları', path: '/orders/status' },
      { label: 'Geçmiş Siparişler', path: '/orders/history' }
    ]
  },
  {
    name: 'products',
    label: 'Ürünler',
    icon: <FaProductHunt className="text-xl" />,
    subMenu: [
      { label: 'Ürün Ekle', path: '/products/add' },
      { label: 'Ürün Listeleme', path: '/products/list' },
      { label: 'Ürün Kategorileri', path: '/products/categories' },
      { label: 'Stok Yönetimi', path: '/products/stock' },
      { label: 'Fiyat Değişiklikleri', path: '/products/pricing' },
      { label: 'Ürün Görselleri', path: '/products/images' },
      { label: 'Ürün İncelemeleri', path: '/products/reviews' }
    ]
  },
  {
    name: 'admin-panel',
    label: 'Yönetici Paneli',
    icon: <FaUserShield className="text-xl" />,
    subMenu: [
      { label: 'Satış Raporları', path: '/admin/sales-reports' },
      { label: 'Sipariş Raporları', path: '/admin/order-reports' },
      { label: 'Kullanıcı Raporları', path: '/admin/user-reports' },
      { label: 'Stok ve Envanter Yönetimi', path: '/admin/inventory' },
      { label: 'İşlem Geçmişi', path: '/admin/transaction-history' },
      { label: 'Güvenlik ve Kullanıcı Yetkileri', path: '/admin/security' },
      { label: 'Yeni Kullanıcı Yönetimi', path: '/admin/user-management' }
    ]
  },
  {
    name: 'settings',
    label: 'Ayarlar',
    icon: <FaCog className="text-xl" />,
    subMenu: [
      { label: 'Ödeme Sistemleri', path: '/settings/payment' },
      { label: 'Kargo Entegrasyonu', path: '/settings/shipping' },
      { label: 'Sistem Ayarları', path: '/settings/system' },
      { label: 'SEO Ayarları', path: '/settings/seo' },
      { label: 'E-posta Bildirim Ayarları', path: '/settings/email-notifications' },
      { label: 'Özel E-posta Bildirimleri', path: '/settings/custom-email-notifications' }
    ]
  },
  {
    name: 'theme',
    label: 'Tema Yönetimi',
    icon: <FaPaintBrush className="text-xl" />,
    subMenu: [
      { label: 'Tema Seçimi', path: '/settings/theme-selection' }, // Tema seçimi
      { label: 'Tema Ayarları', path: '/settings/theme-settings' } // Tema ayarları
    ]
  },
  {
    name: 'seo',
    label: 'SEO Yönetimi',
    icon: <FaSearch className="text-xl" />,
    subMenu: [
      { label: 'SEO Genel Bakış', path: '/seo/overview' },
      { label: 'Anahtar Kelimeler', path: '/seo/keywords' },
      { label: 'Meta Etiketleri', path: '/seo/meta-tags' },
      { label: 'SEO Performansı', path: '/seo/performance' },
      { label: 'SEO İyileştirmeleri', path: '/seo/improvements' },
      { label: 'SEO Hedefleme', path: '/seo/targeting' }
    ]
  },
  {
    name: 'reports',
    label: 'Raporlar',
    icon: <FaFileInvoice className="text-xl" />,
    subMenu: [
      { label: 'Genel Satış Raporları', path: '/reports/sales' },
      { label: 'Kullanıcı Aktivite Raporları', path: '/reports/user-activity' },
      { label: 'Sipariş ve Stok Raporları', path: '/reports/orders' },
      { label: 'SEO Raporları', path: '/reports/seo' },
      { label: 'Kullanıcı Etkileşim Raporları', path: '/reports/user-engagement' }
    ]
  },
  {
    name: 'support',
    label: 'Destek',
    icon: <FaUsers className="text-xl" />,
    subMenu: [
      { label: 'Destek Talebi', path: '/support/tickets' },
      { label: 'Sık Sorulan Sorular (SSS)', path: '/support/faq' },
      { label: 'E-posta Desteği', path: '/support/email' },
      { label: 'Canlı Destek', path: '/support/live-chat' }
    ]
  }
];

export default MainMenu;
