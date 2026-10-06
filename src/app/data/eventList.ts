export interface Event {
  id: string;
  imageText: string;
  badge: string;
  title: string;
  date: string;
  venue: string;
  duration: string;
  description?: string;
  fee?: string;
}

export const eventList: Event[] = [
  {
    id: 'bootcamp',
    imageText: 'BOOTCAMP',
    badge: 'Training',
    title: 'YRA Global Research Bootcamp 2026',
    date: '20 Aug',
    venue: 'Online',
    duration: '4 Weeks',
    fee: '₦15,000',
  },
  {
    id: 'slr',
    imageText: 'SLR',
    badge: 'Seminar',
    title: 'How to Write a Systematic Literature Review',
    date: '30 Aug',
    venue: 'Online',
    duration: '1 Day',
    description: 'Practical SLR writing and publication session.',
  },
  {
    id: 'spss',
    imageText: 'SPSS',
    badge: 'Workshop',
    title: 'Data Analysis with SPSS for Researchers',
    date: '10 Sep',
    venue: 'Online',
    duration: '2 Days',
    description: 'Hands-on statistical analysis workshop.',
    
  },
];
