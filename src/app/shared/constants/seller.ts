export interface Seller {
  id: string;
  name: string;
  VATNumber: string;
  address: {
    buildingNo: string;
    streetName: string;
    district: string;
    city: string;
    country: string;
    postalCode: string;
    additionalInfo?: string;
  };
}

export const SELLERS: Seller[] = [
  {
    id: 'ID 1',
    name: 'بلاك استون',
    VATNumber: 'GB2245533333',
    address: {
      buildingNo: 'B1',
      streetName: 'شارع 1',
      district: 'حي 1',
      city: 'مدينة 1',
      country: 'دولة 1',
      postalCode: '1XXXX',
      additionalInfo: 'عنوان معلومات إضافية 1',
    },
  },
  {
    id: 'ID 2',
    name: 'المورد 2',
    VATNumber: 'GB2245533333',
    address: {
      buildingNo: 'B2',
      streetName: 'شارع 2',
      district: 'حي 2',
      city: 'مدينة 2',
      country: 'دولة 2',
      postalCode: '2XXXX',
      additionalInfo: 'عنوان معلومات إضافية 2',
    },
  },
  {
    id: 'ID 3',
    name: 'المورد 3',
    VATNumber: 'GB345533333',
    address: {
      buildingNo: 'B3',
      streetName: 'شارع 3',
      district: 'حي 3',
      city: 'مدينة 3',
      country: 'دولة 3',
      postalCode: '3XXXX',
      additionalInfo: 'عنوان معلومات إضافية 3',
    },
  },
];
