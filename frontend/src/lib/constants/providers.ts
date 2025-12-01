export interface WearableProvider {
  id: string;
  name: string;
  description: string;
  logoPath: string; // Path to logo in public folder
  brandColor: string;
  isAvailable: boolean;
  features: string[];
}

/**
 * Hardcoded list of wearable providers based on backend API spec.
 * These are the OAuth providers supported by the backend.
 */
export const WEARABLE_PROVIDERS: WearableProvider[] = [
  {
    id: 'garmin',
    name: 'Garmin',
    description: 'Fitness trackers, running watches and smartwatches',
    logoPath: '/garmin.svg',
    brandColor: '#007DC3',
    isAvailable: true,
    features: ['Heart Rate', 'Activity', 'Sleep', 'Workouts'],
  },
  {
    id: 'polar',
    name: 'Polar',
    description: 'Heart rate monitors and sports watches',
    logoPath: '/polar.svg',
    brandColor: '#D40029',
    isAvailable: true,
    features: ['Heart Rate', 'Training', 'Recovery'],
  },
  {
    id: 'suunto',
    name: 'Suunto',
    description: 'GPS multisport and outdoor watches',
    logoPath: '/suunto.svg',
    brandColor: '#E41F1C',
    isAvailable: true,
    features: ['GPS', 'Heart Rate', 'Activity'],
  },
  {
    id: 'apple',
    name: 'Apple Health',
    description: 'iPhone and Apple Watch health data',
    logoPath: '/apple-health.svg',
    brandColor: '#FF2D55',
    isAvailable: true,
    features: ['Heart Rate', 'Activity', 'Sleep', 'Workouts'],
  },
] as const;

export type WearableProviderId = (typeof WEARABLE_PROVIDERS)[number]['id'];
