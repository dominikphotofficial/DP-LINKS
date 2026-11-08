export interface PhotoItem {
  id: string;
  url: string;
  title: string;
  subtitle: string;
  category: string;
  location?: string;
  year?: string;
}

export interface NavigationCard {
  id: string;
  title: string;
  badge: string;
  description: string;
  buttonLabel: string;
  url: string;
  badgeColor?: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  handle: string;
  url: string;
  iconName: 'Instagram' | 'Share2' | 'Youtube' | 'Video' | 'Globe' | 'Linkedin' | 'Camera';
  colorClass: string;
}
