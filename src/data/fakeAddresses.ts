import type { Address } from 'domain/entities';
import { v4 as uuidv4 } from 'uuid';

export const fakeAddresses: Address[] = [
  {
    addressId: uuidv4(),
    label: 'Home',
    placeName: '',
    fullAddress: '32 Sorsogon Street, Quezon City 1004 Metro Manila Philippines',
    streetAddress1: '32 Sorsogon Street',
    streetAddress2: '',
    streetAddress3: '',
    cityOrSuburb: 'Quezon City',
    stateOrProvince: 'Metro Manila',
    country: '',
    postCode: '1104'
  },
  {
    addressId: uuidv4(),
    label: '',
    placeName: '',
    fullAddress: 'Brgy, Sacred Heart Village 2, #34 Isaiah Street, corner Philippians Street, Quezon City, 1118 Metro Manila, Philippines',
    streetAddress1: '#4 Isaiah Street',
    streetAddress2: 'corner Philippians Street',
    streetAddress3: 'Brgy Sacred Heart Village 2',
    cityOrSuburb: 'Quezon City',
    stateOrProvince: 'Metro Manila',
    country: 'Philippines',
    postCode: '1108'
  },
  {
    addressId: uuidv4(),
    label: '',
    placeName: '',
    fullAddress: 'Unit 6798, 100 9th Avenue, Park East Place, BCG, Taguig',
    streetAddress1: '100 9th Avenue',
    streetAddress2: '',
    streetAddress3: '',
    cityOrSuburb: 'Taguig',
    stateOrProvince: 'Metro Manila',
    country: '',
    postCode: '9090'
  },
  {
    addressId: uuidv4(),
    label: '',
    placeName: 'Venice Luxury Residences',
    fullAddress: 'Venecia Drive, BGC, Western Bicutan, Taguig City, Metro Manila, 1631, National Capital Region',
    streetAddress1: 'Venecia Drive',
    streetAddress2: '',
    streetAddress3: '',
    cityOrSuburb: 'BCG, Western Bicutan, Taguig City, Metro Manila',
    stateOrProvince: 'Natioanal Capital Region',
    country: 'Philippines',
    postCode: '1631'
  },
  {
    addressId: uuidv4(),
    label: '',
    placeName: 'Seda Residences Makati',
    fullAddress: 'Ayala Avenue corner Amorsolo, Salcedo, Legazpi Village, Makati, 1229 Metro Manila, Philippines',
    streetAddress1: 'Ayala Avenue corner Amorsolo,',
    streetAddress2: '',
    streetAddress3: '',
    cityOrSuburb: 'Salcedo, Legazpi Village, Makati',
    stateOrProvince: 'Metro Manila',
    country: 'Philippines',
    postCode: '1229'
  },
  {
    addressId: uuidv4(),
    label: '',
    placeName: 'Fort Palm Sping Condiminuim',
    fullAddress: '30th 1st Ave, Taguig, Metro Manila, Philippines',
    streetAddress1: '30th 1st Ave,',
    streetAddress2: '',
    streetAddress3: '',
    cityOrSuburb: 'Taguig',
    stateOrProvince: 'Metro Manila',
    country: 'Philippines',
    postCode: ''
  },
  {
    addressId: uuidv4(),
    label: '',
    placeName: 'Bellagio Tower 2',
    fullAddress: 'H22V+VF4, 1st Ave, Taguig, Metro Manila, Philippines',
    streetAddress1: '1st Ave',
    streetAddress2: '',
    streetAddress3: '',
    cityOrSuburb: 'Taguig',
    stateOrProvince: 'Metro Manila',
    country: 'Philippines',
    postCode: ''
  },
  {
    addressId: uuidv4(),
    label: '',
    placeName: 'Two Serendra',
    fullAddress: '1634 McKinley Pkwy, Taguig, Metro Manila, Philippines',
    streetAddress1: '1634 McKinley Pkwy',
    streetAddress2: '',
    streetAddress3: '',
    cityOrSuburb: 'Taguig',
    stateOrProvince: 'Metro Manila',
    country: 'Philippines',
    postCode: ''
  },

];
