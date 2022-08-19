import {
  CogIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  UserCircleIcon,
  LogoutIcon,
  UsersIcon,
} from '@heroicons/react/outline';

// ======= Data containing Side bar options -->
export const navOptions = [
  { name: 'Dashboard', href: 'home', icon: HomeIcon },
  { name: 'Staff', href: 'staff', icon: UsersIcon },
  { name: 'Profile', href: 'profile', icon: UserCircleIcon },
  { name: 'Claims', href: 'claims', icon: FolderIcon },
  { name: 'Reports', href: 'reports', icon: ChartBarIcon },
  { name: 'Settings', href: 'settings', icon: CogIcon },
  { name: 'Logout', href: '/', icon: LogoutIcon },
];

// ======= data specific to the user  -->
export const userNavigation = [
  { name: 'Your Profile', href: 'profile' },
  { name: 'Settings', href: 'settings' },
  { name: 'Sign out', href: '/' },
];
