export type Movie = {
  id: string;
  title: string;
  genre: string;
  runtime: string;
  rating: string;
  poster: number;
  cinema: string;
  area: string;
  distance: string;
  times: string[];
  attendees: { name: string; age: number; distance: string; minutes: string }[];
  description: string;
};

export const movies: Movie[] = [
  {
    id: 'last-signal', title: 'The Last Signal', genre: 'Mystery · Thriller', runtime: '2h 08m', rating: '8.6', poster: require('@/assets/images/last-signal.jpg'), cinema: 'VOX Cinemas', area: 'Mall of the Emirates', distance: '2.4 km', times: ['4:15 PM', '6:45 PM', '9:20 PM'],
    attendees: [{ name: 'Rohan Arora', age: 24, distance: '1.2 km away', minutes: '20 min ago' }, { name: 'Vaibhav Singh', age: 20, distance: '3.1 km away', minutes: '45 min ago' }, { name: 'Anjali Sharma', age: 22, distance: '800 m away', minutes: '13 min ago' }],
    description: 'A radio astronomer hears a message from the edge of space that seems to predict the next 24 hours — and someone is listening back.',
  },
  {
    id: 'neon-monsoon', title: 'Neon Monsoon', genre: 'Drama · Romance', runtime: '1h 54m', rating: '8.1', poster: require('@/assets/images/neon-monsoon.jpg'), cinema: 'Reel Cinemas', area: 'The Dubai Mall', distance: '5.7 km', times: ['5:30 PM', '8:10 PM'],
    attendees: [{ name: 'Maya Patel', age: 26, distance: '2.0 km away', minutes: '8 min ago' }, { name: 'Arjun Rao', age: 25, distance: '4.5 km away', minutes: '31 min ago' }],
    description: 'Two strangers keep meeting on the same rainy bus route, in a city that never seems to sleep.',
  },
];