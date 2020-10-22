const categories=[
    {
        id:'plants',
        name: 'Plants',
        tags:['products', 'inspirations'],
        count: 147,
        image: require('../assets/icons/plants.png')

    },
    {
        id:'seeds',
        name: 'Seeds',
        tags:['products', 'shop'],
        count: 16,
        image: require('../assets/icons/seeds.png')

    },
    {
        id:'flowers',
        name: 'Flowers',
        tags:['products', 'inspirations'],
        count: 68,
        image: require('../assets/icons/flowers.png')

    },
    {
        id:'sprayers',
        name: 'Sprayers',
        tags:['products', 'inspirations'],
        count: 17,
        image: require('../assets/icons/sprayers.png')

    },
    {
        id:'pots',
        name: 'Pots',
        tags:['products', 'shop'],
        count: 47,
        image: require('../assets/icons/pots.png')

    },
    {
        id:'fertilizer',
        name: 'Fertilizer',
        tags:['products', 'shop'],
        count: 47,
        image: require('../assets/icons/fertilizers.png')

    },
];
const products=[
    {
        id=1,
        name:'16 Best Plants That Thribe In Your Bedroom',
        description:'Bedrooms deserve to be decorated with lush greenery just like every other room in the house -but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain huseplants will filourish',
        tags:['interior', '27m²','Ideas'],
        gallery:[
            require('../assets/images/plants_1.png'),
            require('../assets/images/plants_2.png'),
            require('../assets/images/plants_3.png'),
            //showing only tree images, show +3 images for the rest!
            require('../assets/images/plants_1.png'),
            require('../assets/images/plants_2.png'),
            require('../assets/images/plants_3.png'),
        ]
    }
];
const explore=[
//images
require('../assets/images/explore_1.png'),
require('../assets/images/explore_2.png'),
require('../assets/images/explore_3.png'),
require('../assets/images/explore_4.png'),
require('../assets/images/explore_5.png'),
require('../assets/images/explore_6.png'),
];
const profile={
    username: 'react-ui-kit',
    location: 'Dhaka',
    email: 'sanimridha307@gmail.com',
    avatar: require('../assets/images/avatar.png'),
    budget: 1000,
    monthly_cap:5000,
    notifications: true,
    newsletter: false,
};
export {
    categories,
    products,
    explore,
    products,
}
