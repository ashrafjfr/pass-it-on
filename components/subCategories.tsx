import React, { useState } from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function SubCategories(
  {selectedMainCategory, handleMainCategoryClick, selectedSubCategory, handleSubCategoryClick} : 
  {selectedMainCategory:any, handleMainCategoryClick:any, selectedSubCategory:any, handleSubCategoryClick:any}) {
  const [hoveredMainCategory, setHoveredMainCategory] = useState('Category');
  const [hoveredSubCategory, setHoveredSubCategory] = useState('');

  const handleMainCategoryHover = (mainCategory: React.SetStateAction<string>) => {
    setHoveredMainCategory(mainCategory);
    setHoveredSubCategory(''); // Reset selected subcategory when main category changes
  };

  const handleSubCategoryHover = (subCategory: React.SetStateAction<string>) => {
    setHoveredSubCategory(subCategory);
  };

  // Define subcategory options for each main category
  const subcategoryOptions: { [key: string]: string[] } = {
    'Attires / Clothings': ['Adult (Female) dress/pants/casual', 'Adult (Male) shirts/pants/casual', 'Adult (Uni) shirts/pants/casual', 
                            'Children (Female) dress/pants/casual', 'Children (Male) shirts/pants/casual', 'Children (Uni) shirts/pants/casual', 
                            'Teenage (Female) dress/pants/casual', 'Teenage (Male) shirts/pants/casual', 'Teenage (Uni) shirts/pants/casual', 'Others'],
    'Electrical Home Appliances': ['Blender', 'Bread Toaster', 'Clothes Dryer', 'Coffee Maker', 'Electric Kettle', 'Electric Oven', 'Fan', 'Food Mixer', 
                                    'Induction Cooker', 'Microwave Oven', 'Radio', 'Refrigerator', 'Rice Cooker', 'Standing Fan', 'Standing Lamp', 
                                    'Table Fan', 'Television', 'Vacuum Cleaner', 'Washing Machine', 'Others'],
    'Home Furnishing': ['Bed', 'Chairs', 'Drawers', 'Cupboard', 'Cabinet', 'Desk', 'Dining Table', 'Double-Decker Bed', 'Dressing Table', 'Sofa', 'Table', 
                        'TV Console', 'Wardrobe', 'Others'],
    'Infant and Children Items': ['Baby Awaken Alert', 'Baby Bathtub', 'Baby Chair', 'Baby Changing Table', 'Baby Cot', 'Baby Swing', 'Breastpump', 'Cradle', 
                                  'Diapers', 'Feeding Bottle', 'High Chair', 'Milk Bottle Warmer', 'Playpen', 'Steam Sterilizer', 'Stroller', 'Toys', 'Walker', 'Others'],
    'Kitchen Utility Items': ['Chopping Board', 'Cups/Bowls/Saucers', 'Cutlery and Crockery', 'Knives', 'Pots and Pans', 'Others'],
    'Leisure and Healthy Living': ['Bicycle', 'Electronic Keyboard', 'Electric Organ', 'Exercise Equipment', 'Guitar', 'Piano', 'Musical Equipment', 
                                  'Massaging/Fitness Equipment', 'Treadmill', 'Others'],
    'Learning Aids': ['Assessment Books', 'Computer - Desktop', 'Computer - Laptop', 'Magazines', 'Past-Year Exam Paper', 'Ten-Year Series', 'Text Books', 'Others'],
    'Medical Aids': ['Blood Pressure Measuring Meter', 'Blood Sugar Measuring Meter', 'Diapers (Adult)', 'Weighing Scale', 'Others'],
    'Mobility Aids': ['Commode', 'Crutches', 'Hospital Bed', 'Hospital Bed Mattress', 'Walking Frame', 'Walking Stick', 'Wheel Chair', 'Others'],
    'Others': []
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button id="sub-cat-drop" className="inline-flex w-80 justify-center h-10 items-center gap-x-1.5 rounded-full bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {selectedSubCategory || selectedMainCategory}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-72 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {Object.keys(subcategoryOptions).map((mainCategory) => (
              <Menu.Item key={mainCategory}>
                {({ active }) => (
                  <div className="relative">
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm flex items-center justify-between'
                      )}
                      onMouseEnter={() => handleMainCategoryHover(mainCategory)}
                      onClick={() => handleMainCategoryClick(mainCategory)}
                    >
                      {mainCategory} {subcategoryOptions[mainCategory]?.length > 0 && <ChevronRightIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />}
                    </a>
                    {hoveredMainCategory === mainCategory && (
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="absolute left-full top-0 mt-0.5 w-72 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {(subcategoryOptions[hoveredMainCategory] || []).map((subcategory) => (
                            <Menu.Item key={subcategory}>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                  )}
                                  onMouseEnter={() => handleSubCategoryHover(subcategory)}
                                  onClick={() => handleSubCategoryClick(subcategory)}
                                >
                                  {subcategory}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </Transition>
                    )}
                  </div>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
