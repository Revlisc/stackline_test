// SalesTable.tsx
import React from 'react';
import { SalesData } from '../types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

interface SalesTableProps {
  sales: SalesData[];
}

const SalesTable: React.FC<SalesTableProps> = ({ sales }) => {
  
  
  
  return (
    <div className="overflow-x-auto mt-12 bg-white">
      <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md">
        <thead className="">
          <tr className=''>
            <th className="px-6 py-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Week Ending <FontAwesomeIcon icon={faAngleDown} className=" h-4absolute right-0 transform -translate-y-1/4"/></th>
            <th className="px-6 py-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Retail Sales <FontAwesomeIcon icon={faAngleDown} className=" h-4absolute right-0 transform -translate-y-1/4"/></th>
            <th className="px-6 py-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wholesale Sales <FontAwesomeIcon icon={faAngleDown} className=" h-4absolute right-0 transform -translate-y-1/4"/></th>
            <th className="px-6 py-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Units Sold <FontAwesomeIcon icon={faAngleDown} className=" h-4absolute right-0 transform -translate-y-1/4"/></th>
            <th className="px-6 py-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Retailer Margin <FontAwesomeIcon icon={faAngleDown} className=" h-4absolute right-0 transform -translate-y-1/4"/></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sales.map((data, index) => {
            const date = new Date(data.weekEnding);
            const formattedDate = date.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'numeric',
              day: '2-digit'
            });

            return (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formattedDate.replaceAll('/', '-')}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${data.retailSales.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${data.wholesaleSales.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.unitsSold.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${data.retailerMargin.toLocaleString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
