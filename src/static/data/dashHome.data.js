import { CashIcon, FolderIcon, UsersIcon } from '@heroicons/react/outline';
import { CheckIcon, ThumbUpIcon, UserIcon } from '@heroicons/react/solid';

// ======= detaiks for info cards at the top -->
export const stats = [
  {
    id: 1,
    name: 'Total Staff',
    stat: '43',
    icon: UsersIcon,
    change: '122',
    link: 'staff',
    changeType: 'increase',
  },
  {
    id: 2,
    name: 'Total claims',
    stat: '124',
    icon: FolderIcon,
    change: '5.4%',
    link: 'claims',
    changeType: 'increase',
  },
  {
    id: 3,
    name: 'Total Amt. approved',
    stat: '#7,340,000',
    icon: CashIcon,
    change: '3.2%',
    link: 'reports',
    changeType: 'decrease',
  },
];

// ======= Details for events component -->
export const timeline = [
  {
    id: 1,
    content: 'Applied to',
    target: 'Front End Developer',
    href: '#',
    date: 'Sep 20',
    datetime: '2020-09-20',
    icon: UserIcon,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 2,
    content: 'Advanced to phone screening by',
    target: 'Bethany Blake',
    href: '#',
    date: 'Sep 22',
    datetime: '2020-09-22',
    icon: ThumbUpIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 3,
    content: 'Completed phone screening with',
    target: 'Martha Gardner',
    href: '#',
    date: 'Sep 28',
    datetime: '2020-09-28',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 4,
    content: 'Advanced to interview by',
    target: 'Bethany Blake',
    href: '#',
    date: 'Sep 30',
    datetime: '2020-09-30',
    icon: ThumbUpIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 5,
    content: 'Completed interview with',
    target: 'Katherine Snyder',
    href: '#',
    date: 'Oct 4',
    datetime: '2020-10-04',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
];
