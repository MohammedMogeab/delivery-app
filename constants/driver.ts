export const driverTheme = {
  lightBackground: '#F4F6F6',
  darkBackground: '#0A0F12',
  cardLight: '#FFFFFF',
  cardDark: '#11181C',
  borderLight: '#E2E8F0',
  borderDark: '#1D2935',
  accent: '#22C55E',
  accentSoft: '#2DD36F',
  accentMuted: '#134E32',
  accentWarn: '#FACC15',
  accentError: '#F87171',
  textPrimary: '#F8FAFC',
  textSecondary: '#94A3B8',
  textMuted: '#64748B',
  textDark: '#0F172A',
  link: '#22C55E',
};

export const driverProfileSummary = {
  name: 'Alex Johnson',
  avatar:
    'https://images.unsplash.com/photo-1614283488798-324f2c1bfa9e?auto=format&fit=facearea&w=256&h=256&q=80',
  phone: '+1-202-555-0142',
  rating: 4.8,
  deliveries: 1250,
  earnings: '$1.2k',
  verified: true,
  level: 'Pro Driver',
};

export const driverStatHighlights = [
  {
    id: 'active',
    title: 'Active Deliveries',
    value: '3',
    icon: 'truck',
  },
  {
    id: 'completed',
    title: 'Completed Today',
    value: '12',
    icon: 'check',
  },
  {
    id: 'earnings',
    title: 'Earnings',
    value: '$150.75',
    icon: 'credit-card',
  },
  {
    id: 'rating',
    title: 'Rating',
    value: '4.9 ★',
    icon: 'star',
  },
];

export const driverQuickActions = [
  {
    id: 'browse',
    title: 'Browse Orders',
    icon: 'list',
  },
  {
    id: 'wallet',
    title: 'Wallet',
    icon: 'credit-card',
  },
  {
    id: 'rewards',
    title: 'Rewards',
    icon: 'gift',
  },
  {
    id: 'history',
    title: 'History',
    icon: 'clock',
  },
];

export const driverPerformanceSummary = [
  {
    id: 'deliveries',
    title: 'Deliveries This Week',
    value: 45,
    goal: 60,
  },
  {
    id: 'earnings',
    title: 'Earnings Target',
    value: 550,
    goal: 800,
    prefix: '$',
  },
];

export const driverOrders = [
  {
    id: 'DLV-1042',
    price: '2500 YER',
    reward: '+ 300 YER Reward',
    pickup: 'AromaMart – Taiz',
    dropoff: 'Al-Qahera, Taiz',
    distance: '4.8 km — 12 min',
    status: 'available',
    fee: 2500,
    bonus: 300,
    total: 2800,
    paymentMethod: 'Cash on Delivery',
    customer: {
      name: 'Ali Saeed',
      phone: '+967-77-111-2222',
    },
    additionalInfo: 'Handle package carefully – fragile.',
    createdAt: 'Today, 2:45 PM',
  },
  {
    id: 'DLV-1043',
    price: '1800 YER',
    reward: '+ 200 YER Reward',
    pickup: 'Central Post Office – Taiz',
    dropoff: 'Hayel Street, Taiz',
    distance: '2.1 km — 8 min',
    status: 'available',
    fee: 1800,
    bonus: 200,
    total: 2000,
    paymentMethod: 'Cash on Delivery',
    customer: {
      name: 'Sara Ahmed',
      phone: '+967-71-555-3344',
    },
    additionalInfo: 'Leave at reception desk.',
    createdAt: 'Today, 1:15 PM',
  },
  {
    id: 'DLV-1044',
    price: '3500 YER',
    reward: '+ 500 YER Reward',
    pickup: 'Al-Saeed Mall – Taiz',
    dropoff: '26 September St, Taiz',
    distance: '7.3 km — 20 min',
    status: 'available',
    fee: 3500,
    bonus: 500,
    total: 4000,
    paymentMethod: 'Cash on Delivery',
    customer: {
      name: 'Mohammed G',
      phone: '+967-73-222-7788',
    },
    additionalInfo: 'Call upon arrival to confirm.',
    createdAt: 'Today, 12:00 PM',
  },
];

export const driverDocumentRequirements = [
  {
    id: 'driver-id',
    title: 'Driver ID Card',
    required: true,
    status: 'Uploaded',
    filename: 'driver_id.jpg',
    size: '1.2 MB',
    image:
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=320&q=60',
    notes: null,
  },
  {
    id: 'license',
    title: 'Driving License',
    required: true,
    status: 'Rejected: Image is blurry',
    filename: 'license.png',
    size: '2.5 MB',
    image:
      'https://images.unsplash.com/photo-1503377986601-d0b8af145f82?auto=format&fit=crop&w=320&q=60',
    notes: 'Image is blurry',
  },
  {
    id: 'vehicle-registration',
    title: 'Vehicle Registration',
    required: false,
    status: 'Pending upload',
    filename: null,
    size: null,
    image: null,
    notes: null,
  },
];

export const driverProfileActions = [
  {
    id: 'vehicle-information',
    label: 'Vehicle Information',
    icon: 'truck',
    route: '/(driver)/profile/vehicle-info',
  },
  {
    id: 'service-areas',
    label: 'Service Area Selector',
    icon: 'map',
    route: '/(driver)/profile/service-area',
  },
  {
    id: 'preferences',
    label: 'Preferences',
    icon: 'sliders',
    route: null,
  },
  {
    id: 'documents',
    label: 'Documents Center',
    icon: 'folder',
    route: '/(driver)/auth/document-upload',
  },
  {
    id: 'support',
    label: 'Help & Support',
    icon: 'life-buoy',
    route: null,
  },
];

export const driverServiceAreas = [
  'Al-Qahera, Taiz',
  'Al-Mudhaffar, Taiz',
  'Salh, Taiz',
  'Al Hawban, Taiz',
];

export const driverVehicleTypes = ['Truck', 'Van', 'Motorcycle', 'Sedan'];

export const driverLanguages = ['EN', 'AR'];
