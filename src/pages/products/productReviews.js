import React, { useState } from 'react';

const ProductReviewsPage = () => {
  // Ürün Bilgisi (Her ürün için farklı yorumlar olabilir)
  const products = [
    { id: 1, name: 'SuperPhone X100' },
    { id: 2, name: 'Wireless Earbuds Z500' },
    { id: 3, name: 'Smartwatch Pro 4' },
  ];

  // Yorumlar (Her yorum bir ürüne ait)
  const reviewsData = [
    {
      id: 1,
      productId: 1,
      userName: 'Ahmet Y.',
      rating: 5,
      comment: 'Mükemmel telefon, çok hızlı ve kullanımı kolay!',
      date: '2025-01-10',
    },
    {
      id: 2,
      productId: 2,
      userName: 'Zeynep D.',
      rating: 4,
      comment: 'Genel olarak iyi, ancak bataryası biraz zayıf.',
      date: '2025-01-08',
    },
    {
      id: 3,
      productId: 1,
      userName: 'Murat K.',
      rating: 4.5,
      comment: 'Fiyat/performans oranı gerçekten çok iyi.',
      date: '2025-01-05',
    },
    {
      id: 4,
      productId: 3,
      userName: 'Emre S.',
      rating: 3,
      comment: 'Ekran çözünürlüğü düşük, ancak fiyata göre idare eder.',
      date: '2025-01-02',
    },
  ];

  // Filtreleme durumu
  const [filter, setFilter] = useState('all'); // all, 5, 4, 3 gibi
  const [sort, setSort] = useState('newest'); // newest, highest, lowest

  // Ürün adı almak için fonksiyon
  const getProductName = (productId) => {
    const product = products.find((p) => p.id === productId);
    return product ? product.name : 'Ürün Bilgisi Bulunamadı';
  };

  // Filtreleme ve sıralama işlemleri
  const filteredReviews = reviewsData.filter((review) => {
    if (filter === 'all') return true;
    return review.rating === parseInt(filter);
  });

  const sortedReviews = filteredReviews.sort((a, b) => {
    if (sort === 'newest') {
      return new Date(b.date) - new Date(a.date);
    }
    if (sort === 'highest') {
      return b.rating - a.rating;
    }
    if (sort === 'lowest') {
      return a.rating - b.rating;
    }
    return 0;
  });

  return (
    <div className="bg-white shadow-md rounded-lg p-8 space-y-8">
      {/* Ürün Bilgisi */}
      <h2 className="text-2xl font-semibold text-gray-700">Ürün İncelemeleri</h2>

      {/* Yorum Sıralama ve Filtreleme */}
      <div className="flex justify-between items-center mt-6">
        <div className="flex items-center space-x-4">
          <label className="text-sm font-medium text-gray-600">Yorumları Filtrele:</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 text-sm"
          >
            <option value="all">Tümü</option>
            <option value="5">5 Yıldız</option>
            <option value="4">4 Yıldız</option>
            <option value="3">3 Yıldız</option>
          </select>
        </div>

        <div className="flex items-center space-x-4">
          <label className="text-sm font-medium text-gray-600">Yorumları Sıralama:</label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 text-sm"
          >
            <option value="newest">En Yeni</option>
            <option value="highest">En Yüksek Puan</option>
            <option value="lowest">En Düşük Puan</option>
          </select>
        </div>
      </div>

      {/* Yorumlar */}
      <div className="mt-6 space-y-6">
        {sortedReviews.map((review) => (
          <div key={review.id} className="border p-6 rounded-lg shadow-sm">
            {/* Ürün Başlığı */}
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              {getProductName(review.productId)}
            </h3>

            <div className="flex items-center justify-between">
              <div className="flex text-yellow-400">
                {/* Yıldızlar */}
                {Array.from({ length: 5 }, (_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={index < review.rating ? 'currentColor' : 'none'}
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.049 2.927C9.532 1.876 10.468 1.876 10.951 2.927l1.493 3.022 3.332.487c.91.134 1.276 1.254.616 1.869l-2.415 2.355.57 3.332c.159.919-.809 1.613-1.648 1.182l-3.005-1.577-3.003 1.577c-.839.43-1.807-.263-1.648-1.182l.57-3.332-2.415-2.355c-.66-.615-.294-1.735.616-1.869l3.332-.487L9.049 2.927z"
                    />
                  </svg>
                ))}
              </div>
              <p className="ml-2 text-gray-600">{review.rating} / 5</p>
            </div>

            <p className="text-sm text-gray-600 mt-2">{review.comment}</p>
            <p className="text-xs text-gray-500 mt-2">{review.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReviewsPage;
