export interface Room {
  title: string;
  description: string;
  area: string;
  capacity: string;
  beds: string;
  bathrooms: string;
  price: string;
  image: string;
  features: string[];
}

export interface Restaurant {
  title: string;
  description: string;
  image: string;
  specialty: string;
}

export interface Amenity {
  title: string;
  description: string;
  images: string[];
  facilities: string[];
}

export interface Experience {
  title: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  highlights: string[];
}

export interface Schedule {
  time: string;
  activity: string;
  details?: string;
}

export interface TourDay {
  title: string;
  schedule: Schedule[];
}

export interface TourItinerary {
  day1: TourDay;
  day2: TourDay;
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
}
