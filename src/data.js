// Dummy data

// Importing local images

// Features
import img1 from './img/features/feature-1.jpg'
import img2 from './img/features/feature-2.jpg'
import img3 from './img/features/feature-3.jpg'
import img4 from './img/features/feature-4.jpg'

// Categories
import img5 from './img/categories/category-1.jpg'
import img6 from './img/categories/category-2.jpg'
import img7 from './img/categories/category-3.jpg'
import img8 from './img/categories/category-4.jpg'

const products = [
  {
    id: 1,
    name: 'item 1',
    price: 7.99,
    category: "men's",
    description:
      'The item 1 is Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet reiciendis sapiente qui odio incidunt quod ipsam sequi beatae iure magni velit deleniti nisi reprehenderit voluptatibus excepturi sed eius non earum harum, molestias a quia, repellat amet. Maxime, sapiente aliquam odio quasi, commodi nobis numquam aperiam ea explicabo earum eligendi minus!',
  },
  {
    id: 2,
    name: 'item 2',
    price: 12.99,
    category: "women's",
    description:
      'The item 2 is Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet reiciendis sapiente qui odio incidunt quod ipsam sequi beatae iure magni velit deleniti nisi reprehenderit voluptatibus excepturi sed eius non earum harum, molestias a quia, repellat amet. Maxime, sapiente aliquam odio quasi, commodi nobis numquam aperiam ea explicabo earum eligendi minus!',
  },
  {
    id: 3,
    name: 'item 3',
    price: 19.25,
    category: "toy's",
    description:
      'The item 3 is Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet reiciendis sapiente qui odio incidunt quod ipsam sequi beatae iure magni velit deleniti nisi reprehenderit voluptatibus excepturi sed eius non earum harum, molestias a quia, repellat amet. Maxime, sapiente aliquam odio quasi, commodi nobis numquam aperiam ea explicabo earum eligendi minus!',
  },
]

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
    img: img1,
    description:
      "don't compromise on diet! get flat 15% off for new and fresh goods",
  },
  {
    id: 2,
    title: 'quality items',
    img: img2,
    description: "don't compromise on style! get flat 30% off for new arrivals",
  },
  {
    id: 3,
    title: 'trusted brands',
    img: img3,
    description:
      "don't compromise on prestige! get flat 9% off for latest innovation from famous brands",
  },
  {
    id: 4,
    title: 'varities',
    img: img4,
    description:
      "don't compromise on selection! get flat 20% off for varieties products around the world",
  },
]

const categories = [
  {
    title: "men's clothing",
    img: img5,
  },
  {
    title: "women's clothing",
    img: img6,
  },
  {
    title: 'jewelery',
    img: img8,
  },
  {
    title: 'electronics',
    img: img7,
  },
]

export { products, users, features, categories }
