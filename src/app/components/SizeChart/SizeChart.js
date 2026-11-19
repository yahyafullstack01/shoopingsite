import React from "react";
import { useLanguage } from "../../Functions/useLanguage"; 
export default function SizeChart({ onClose }) {

  const {  translateList } = useLanguage(); 
  const menuItems = translateList("SizeTable", "header");
  
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-black text-black dark:text-white rounded-lg shadow-lg p-4 md:p-6 w-11/12 sm:w-10/12 md:w-2/3 lg:w-1/2">
        <h2 className="text-lg font-normal mb-4 text-center text-black dark:text-white">{menuItems[0]}</h2>
        <div className="overflow-auto">
          <table className="w-full border-collapse border border-gray-400 dark:border-gray-700 text-xs sm:text-sm text-black dark:text-white">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-800">
                <th className="border border-gray-400 dark:border-gray-700 px-2 sm:px-4 py-2 font-semibold text-black dark:text-white">{menuItems[1]}</th>
                <th className="border border-gray-400 dark:border-gray-700 px-2 sm:px-4 py-2 font-semibold text-black dark:text-white">{menuItems[2]}</th>
                <th className="border border-gray-400 dark:border-gray-700 px-2 sm:px-4 py-2 font-semibold text-black dark:text-white">{menuItems[3]}</th>
                <th className="border border-gray-400 dark:border-gray-700 px-2 sm:px-4 py-2 font-semibold text-black dark:text-white">{menuItems[4]}</th>
                <th className="border border-gray-400 dark:border-gray-700 px-2 sm:px-4 py-2 font-semibold text-black dark:text-white">{menuItems[5]}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 dark:border-gray-700 px-2 sm:px-4 py-2 text-center text-black dark:text-white">XS</td>
                <td className="border border-gray-400 dark:border-gray-700 px-2 sm:px-4 py-2 text-center text-black dark:text-white">32</td>
                <td className="border border-gray-400 dark:border-gray-700 px-2 sm:px-4 py-2 text-center text-black dark:text-white">80-83</td>
                <td className="border border-gray-400 dark:border-gray-700 px-2 sm:px-4 py-2 text-center text-black dark:text-white">60-63</td>
                <td className="border border-gray-400 dark:border-gray-700 px-2 sm:px-4 py-2 text-center text-black dark:text-white">0-88</td>
              </tr>
              <tr>
                <td className="border border-gray-400 dark:border-gray-700 px-2 sm:px-4 py-2 text-center text-black dark:text-white">S</td>
                <td className="border border-gray-400 dark:border-gray-700 px-2 sm:px-4 py-2 text-center text-black dark:text-white">34</td>
                <td className="border border-gray-400 dark:border-gray-700 px-2 sm:px-4 py-2 text-center text-black dark:text-white">84-87</td>
                <td className="border border-gray-400 dark:border-gray-700 px-2 sm:px-4 py-2 text-center text-black dark:text-white">66-69</td>
                <td className="border border-gray-400 dark:border-gray-700 px-2 sm:px-4 py-2 text-center text-black dark:text-white">87-90</td>
              </tr>
              <tr>
                <td className="border border-gray-400 dark:border-gray-700 px-2 sm:px-4 py-2 text-center text-black dark:text-white">M</td>
                <td className="border border-gray-400 dark:border-gray-700 px-2 sm:px-4 py-2 text-center text-black dark:text-white">36</td>
                <td className="border border-gray-400 dark:border-gray-700 px-2 sm:px-4 py-2 text-center text-black dark:text-white">88-91</td>
                <td className="border border-gray-400 dark:border-gray-700 px-2 sm:px-4 py-2 text-center text-black dark:text-white">70-73</td>
                <td className="border border-gray-400 dark:border-gray-700 px-2 sm:px-4 py-2 text-center text-black dark:text-white">90-94</td>
              </tr>
              <tr>
                <td className="border border-gray-400 dark:border-gray-700 px-2 sm:px-4 py-2 text-center text-black dark:text-white">L</td>
                <td className="border border-gray-400 dark:border-gray-700 px-2 sm:px-4 py-2 text-center text-black dark:text-white">38</td>
                <td className="border border-gray-400 dark:border-gray-700 px-2 sm:px-4 py-2 text-center text-black dark:text-white">92-95</td>
                <td className="border border-gray-400 dark:border-gray-700 px-2 sm:px-4 py-2 text-center text-black dark:text-white">74-77</td>
                <td className="border border-gray-400 dark:border-gray-700 px-2 sm:px-4 py-2 text-center text-black dark:text-white">95-99</td>
              </tr>
              <tr>
                <td className="border border-gray-400 dark:border-gray-700 px-2 sm:px-4 py-2 text-center text-black dark:text-white">XL</td>
                <td className="border border-gray-400 dark:border-gray-700 px-2 sm:px-4 py-2 text-center text-black dark:text-white">40</td>
                <td className="border border-gray-400 dark:border-gray-700 px-2 sm:px-4 py-2 text-center text-black dark:text-white">96-99</td>
                <td className="border border-gray-400 dark:border-gray-700 px-2 sm:px-4 py-2 text-center text-black dark:text-white">78-81</td>
                <td className="border border-gray-400 dark:border-gray-700 px-2 sm:px-4 py-2 text-center text-black dark:text-white">100-104</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          onClick={onClose}
          className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 block mx-auto"
        >
          {menuItems[6]}
        </button>
      </div>
    </div>
  );
}
