// Dummy data

import person1 from './img/testimonial/person-1.jpg'
import person2 from './img/testimonial/person-2.jpg'
import person3 from './img/testimonial/person-3.jpg'
import person4 from './img/testimonial/person-4.jpg'

const users = [
  {
    id: 1,
    name: 'jaramiah',
    password: 'jaramiah123',
    role: 'admin',
  },
  {
    id: 2,
    name: 'dummyAcc',
    password: 'dummyacc21',
    role: 'test account',
  },
]

const features = [
  {
    id: 1,
    title: 'stay fit! stay healthy.',
    img: 'https://images.pexels.com/photos/7129702/pexels-photo-7129702.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    description:
      "don't compromise on diet! get flat 15% off for new and fresh goods",
  },
  {
    id: 2,
    title: 'quality items',
    img: 'https://images.pexels.com/photos/5709656/pexels-photo-5709656.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    description: "don't compromise on style! get flat 30% off for new arrivals",
  },
  {
    id: 3,
    title: 'trusted brands',
    img: 'https://images.pexels.com/photos/4173116/pexels-photo-4173116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description:
      "don't compromise on prestige! get flat 9% off for latest innovation from famous brands",
  },
  {
    id: 4,
    title: 'varities',
    img: 'https://images.pexels.com/photos/3769025/pexels-photo-3769025.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    description:
      "don't compromise on selection! get flat 20% off for varieties products around the world",
  },
]

const categories = [
  {
    id: 1,
    title: "men's clothing",
    img: 'https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  },
  {
    id: 2,
    title: "women's clothing",
    img: 'https://images.pexels.com/photos/8422323/pexels-photo-8422323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    id: 3,
    title: 'jewelery',
    img: 'https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    id: 4,
    title: 'electronics',
    img: 'https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  },
]

const testimonial = [
  {
    id: 1,
    name: 'Enricko Fernandez',
    image: person1,
    rating: 5,
    job: 'shop owner',
    testimony:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est possimus alias corrupti? Omnis adipisci, molestias dicta magnam sed similique hic ex quidem officiis porro voluptatem sit iusto ipsa quia ipsum.',
  },
  {
    id: 2,
    name: 'Rob Powell',
    image: person3,
    rating: 4,
    job: 'student',

    testimony:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est possimus alias corrupti? Omnis adipisci,sicing elit. Est possimus  Omnis molestias dicta magnam sed similique hic ex adipisci  quidem officiis porro voluptatem sit iusto ipsa quia alias corrupti? ipsum.',
  },
  {
    id: 3,
    name: 'Jessy Smith',
    image: person2,
    rating: 5,
    job: 'house wife',

    testimony:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est possimus alias corrupti?  Omnis molestias dicta magnam sed similique Omnis adipisci, molestias ex quidem officiis porro voluptatem sit iusto ipsa quia ipsum.',
  },
  {
    id: 4,
    name: 'Chris Jones',
    image: person4,
    rating: 5,
    job: 'office worker',

    testimony:
      'Lorem ipsum, consectetur adipisicing elit. Est possimus alias corrupti? Omnis adipisci, molestias dicta magnam sed similique hic ex quidem officiis porro voluptatem sit iusto ipsa quia ipsum.',
  },
]

export { users, features, categories, testimonial }
