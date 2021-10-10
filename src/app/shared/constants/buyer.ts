export interface Buyer {
  id: number;
  name: string;
  VATNumber: string;
  buyerPhoneNumber: string;
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

export const BUYERS: Buyer[] = [
  {
    id: 1,
    name: 'شركة بكسل العربية للتسويق الإلكتروني',
    VATNumber: '123452285800003',
    buyerPhoneNumber: "00966599613088",
    address: {
      buildingNo: '7051',
      streetName: ' الأمير سلطان',
      district: 'مركز زهران للأعمال',
      city: 'جدة',
      country: 'المملكة العربية السعودية',
      postalCode: '13360',
      additionalInfo: '',
    },
  },
  {
    id: 2,
    name: 'شركة التقنيات المتطورة',
    VATNumber: '123456185800003',
    buyerPhoneNumber: "00966560226656",
    address: {
      buildingNo: '854',
      streetName: 'طريق انس بن مالك',
      district: 'حي الياسمين',
      city: 'الرياض ',
      country: 'السعودية',
      postalCode: '13366',
      additionalInfo: '',
    },
  },
  // {
  //   id: 3,
  //   name: 'محمد ممدوح فتيح',
  //   VATNumber: '123456455800003',
  //   buyerPhoneNumber: "",
  //   address: {
  //     buildingNo: 'B3',
  //     streetName: 'المحمودية',
  //     district: 'المسلة',
  //     city: 'الفيوم',
  //     country: 'مصر',
  //     postalCode: '3XXXX',
  //     additionalInfo: '',
  //   },
  // },
];
