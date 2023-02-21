export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    rating: '8.7',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=113220100#!/item',
    image:'https://scontent-hel3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/264371896_434691238150579_6379466365734956132_n.jpg?_nc_ht=scontent-hel3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=kE6Fb4wPvPcAX-pbaae&edm=AABBvjUBAAAA&ccb=7-4&oh=88cd7e3e905dc3b52e655cbb8627fbec&oe=61B7A182&_nc_sid=83d603'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    rating: '9.0',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=113220100#!/item',
    image:'https://scontent-hel3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/264371896_434691238150579_6379466365734956132_n.jpg?_nc_ht=scontent-hel3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=kE6Fb4wPvPcAX-pbaae&edm=AABBvjUBAAAA&ccb=7-4&oh=88cd7e3e905dc3b52e655cbb8627fbec&oe=61B7A182&_nc_sid=83d603'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'Nice phone with standard size',
    rating: '7.8',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=113220100#!/item',
    image:'https://scontent-hel3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/264371896_434691238150579_6379466365734956132_n.jpg?_nc_ht=scontent-hel3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=kE6Fb4wPvPcAX-pbaae&edm=AABBvjUBAAAA&ccb=7-4&oh=88cd7e3e905dc3b52e655cbb8627fbec&oe=61B7A182&_nc_sid=83d603'
  },
  {
    id: 4,
    name: 'Watch Xl',
    price: 799,
    description: 'A large phone with one of the best screens',
    rating: '9.1',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=113220100#!/item',
    image:'https://scontent-hel3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/264371896_434691238150579_6379466365734956132_n.jpg?_nc_ht=scontent-hel3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=kE6Fb4wPvPcAX-pbaae&edm=AABBvjUBAAAA&ccb=7-4&oh=88cd7e3e905dc3b52e655cbb8627fbec&oe=61B7A182&_nc_sid=83d603'
  },
  {
    id: 5,
    name: 'Watch S',
    price: 400,
    description: 'A large phone with one of the best screens',
    rating: '7.6',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=113220100#!/item',
    image:'https://scontent-hel3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/264371896_434691238150579_6379466365734956132_n.jpg?_nc_ht=scontent-hel3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=kE6Fb4wPvPcAX-pbaae&edm=AABBvjUBAAAA&ccb=7-4&oh=88cd7e3e905dc3b52e655cbb8627fbec&oe=61B7A182&_nc_sid=83d603'
  },
  {
    id: 6,
    name: 'Watch 5',
    price: 600,
    description: 'A large phone with one of the best screens',
    rating: '6.8',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=113220100#!/item',
    image:'https://scontent-hel3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/264371896_434691238150579_6379466365734956132_n.jpg?_nc_ht=scontent-hel3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=kE6Fb4wPvPcAX-pbaae&edm=AABBvjUBAAAA&ccb=7-4&oh=88cd7e3e905dc3b52e655cbb8627fbec&oe=61B7A182&_nc_sid=83d603'
  },
  {
    id: 7,
    name: 'Earphone 12',
    price: 500,
    description: 'A large phone with one of the best screens',
    rating: '7.4',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=113220100#!/item',
    image:'https://scontent-hel3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/264371896_434691238150579_6379466365734956132_n.jpg?_nc_ht=scontent-hel3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=kE6Fb4wPvPcAX-pbaae&edm=AABBvjUBAAAA&ccb=7-4&oh=88cd7e3e905dc3b52e655cbb8627fbec&oe=61B7A182&_nc_sid=83d603'
  },
  {
    id: 8,
    name: 'Earphone 13',
    price: 990,
    description: 'A large phone with one of the best screens',
    rating: '8.9',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=113220100#!/item',
    image:'https://scontent-hel3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/264371896_434691238150579_6379466365734956132_n.jpg?_nc_ht=scontent-hel3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=kE6Fb4wPvPcAX-pbaae&edm=AABBvjUBAAAA&ccb=7-4&oh=88cd7e3e905dc3b52e655cbb8627fbec&oe=61B7A182&_nc_sid=83d603'
  },
  {
    id: 9,
    name: 'Earphone 2',
    price: 300,
    description: 'A large phone with one of the best screens',
    rating: '8.0',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=113220100#!/item',
    image:'https://scontent-hel3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/264371896_434691238150579_6379466365734956132_n.jpg?_nc_ht=scontent-hel3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=kE6Fb4wPvPcAX-pbaae&edm=AABBvjUBAAAA&ccb=7-4&oh=88cd7e3e905dc3b52e655cbb8627fbec&oe=61B7A182&_nc_sid=83d603'
  }, 
  {
    id: 10,
    name: 'Notebook',
    price: 899,
    description: 'A large phone with one of the best screens',
    rating: '9.7',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=113220100#!/item',
    image:'https://scontent-hel3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/264371896_434691238150579_6379466365734956132_n.jpg?_nc_ht=scontent-hel3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=kE6Fb4wPvPcAX-pbaae&edm=AABBvjUBAAAA&ccb=7-4&oh=88cd7e3e905dc3b52e655cbb8627fbec&oe=61B7A182&_nc_sid=83d603'
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/