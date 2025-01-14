import React from 'react';
import { FaCheckCircle, FaHourglass, FaTimesCircle, FaUndo, FaSyncAlt } from 'react-icons/fa';

function OrderStatuses() {
  // Sipariş Durumları
  const orderStatuses = [
    { 
      status: 'Tamamlanan', 
      count: 1200, 
      color: 'bg-blue-50', 
      textColor: 'text-blue-600', 
      icon: <FaCheckCircle className="text-blue-600" size={40} />,
    },
    { 
      status: 'Bekleyen', 
      count: 150, 
      color: 'bg-yellow-50', 
      textColor: 'text-yellow-600', 
      icon: <FaHourglass className="text-yellow-600" size={40} />,
    },
    { 
      status: 'İptal Edilen', 
      count: 150, 
      color: 'bg-red-50', 
      textColor: 'text-red-600', 
      icon: <FaTimesCircle className="text-red-600" size={40} />,
    },
    { 
      status: 'İade Edilen', 
      count: 50, 
      color: 'bg-indigo-50', 
      textColor: 'text-indigo-600', 
      icon: <FaUndo className="text-indigo-600" size={40} />,
    },
    { 
      status: 'Kısmi Tamamlanan', 
      count: 100, 
      color: 'bg-teal-50', 
      textColor: 'text-teal-600', 
      icon: <FaSyncAlt className="text-teal-600" size={40} />,
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-8 space-y-8">
      <h2 className="text-2xl font-semibold text-gray-800">Sipariş Durumları</h2>
      <p className="text-sm text-gray-600 mb-6">
        Aşağıda tüm siparişlerinizin mevcut durumlarını görebilirsiniz. Durumları tıklayarak daha fazla bilgi edinebilirsiniz.
      </p>

      {/* Sipariş Durumları Kartları */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {orderStatuses.map((status) => (
          <div 
            key={status.status} 
            className={`${status.color} p-6 rounded-lg shadow-sm hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {status.icon}
                <h4 className="text-sm font-medium text-gray-600">{status.status} Siparişler</h4>
              </div>
              <div className={`text-4xl font-semibold ${status.textColor}`}>
                {status.count.toLocaleString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderStatuses;
