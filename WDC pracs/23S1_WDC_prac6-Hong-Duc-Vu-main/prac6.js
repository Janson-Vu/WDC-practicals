/*

(task 1.5):

Top_menu = [
    { title:'Home',         url:'/' }
    { title:'About',        url:'/about' }
    { title:'Contact Us',   url:'/contact' }
]




Top menu 2 (task 1.7):

{ title:'Home', url:'/', submenus: [] }
{ title:'About', url:'/about',
    submenus: [
        { title:'Who we are',   url:'/about#us' },
        { title:'What we do',   url:'/about#store' },
        { title:'Our range',     url:'/about#range' }
    ]
}
{ title:'Contact Us',   url:'/contact',
    submenus: [
        { title:'Information',   url:'/contact#info' },
        { title:'Returns',   url:'/contact#return' },
        { title:'Locate Us',     url:'/contact#locate' }
    ]
}


Stores (task 1.8):

{ name:'Adelaide City',  address:'45 Florabunda Lane, Adelaide, 5000', counter: 0, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/11_Gloddaeth_Street%2C_Llandudno_shop_front.jpg/320px-11_Gloddaeth_Street%2C_Llandudno_shop_front.jpg' },
{ name:'Steelton South', address:'77 Weigall Avenue, Steelton, 5413',  counter: 0, img:'https://upload.wikimedia.org/wikipedia/commons/4/42/Well-shop-front.jpg' },
{ name:'Milton',         address:'33 McGregor Street, Milton, 5880',   counter: 0, img:'https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Greggs_store_front.JPG/320px-Greggs_store_front.JPG' }

*/

const TOP_MENU = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Contact Us', url: '/contact' }
];

const TOP_MENU2 = [
    {
        title: 'Home',
        url: '/',
        submenus: []
    },
    {
        title: 'About',
        url: '/about',
        submenus: [
            { title: 'Who we are', url: '/about#us' },
            { title: 'What we do', url: '/about#store' },
            { title: 'Our range', url: '/about#range' }
        ]
    },

    {
        title: 'Contact Us',
        url: '/contact',
        submenus: [
            { title: 'Information', url: '/contact#info' },
            { title: 'Returns', url: '/contact#return' },
            { title: 'Locate Us', url: '/contact#locate' }
        ]
    }
];

const SPECIALS = [
    { name: 'Salt', price: '$0.99', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Korean_sea_salt.jpg' },
    { name: 'Pepper', price: '$2.49', url: 'https://live.staticflickr.com/191/449547916_ce1c87adeb_b.jpg' },
    { name: 'Tomato Sauce', price: '$3.50', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Fresh_Tomato_Sauce_%28Unsplash%29.jpg/640px-Fresh_Tomato_Sauce_%28Unsplash%29.jpg' },
    { name: 'Worchestershire Sauce', price: '$4.20', url: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Worcester_Sauce_001.jpg' }
];

const STORES = [
    {
        name: 'Adelaide City',
        address: '45 Florabunda Lane, Adelaide, 5000',
        counter: 0,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/11_Gloddaeth_Street%2C_Llandudno_shop_front.jpg/320px-11_Gloddaeth_Street%2C_Llandudno_shop_front.jpg'
    },

    {
        name: 'Steelton South',
        address: '77 Weigall Avenue, Steelton, 5413',
        counter: 0,
        img: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Well-shop-front.jpg'
    },

    {
        name: 'Milton',
        address: '33 McGregor Street, Milton, 5880',
        counter: 0,
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Greggs_store_front.JPG/320px-Greggs_store_front.JPG'
    }
];

const vueinst = Vue.createApp({

    data(){
        return{
            choose: 'Choose...',
            special: SPECIALS[0],
            show_ad: true,
            dark_mode: false,
            top_menu: TOP_MENU2,
            top_menu_item: -1,
            top_menu_hover: false,
            c_text: 'type your comment here',
            c_arr: [],
            s_arr: STORES,
            search_text: '',
            search_result: []
        };
    },

    // have to use it as computed, else the element won't be updated via invoke of data member
    computed: {
        color(){
            if (this.dark_mode === true){
                return '#F5CB5C';
                // let offButton = document.getElementById('lose');
                // offButton.classList.remove('pure-button-active');
            }
            return '#333533';
        },

        bgcol(){
            if (this.dark_mode === true){
                return '#333533';
            }
            return '#FFFFFF';
        }
    },

    methods: {
        addComment(){
            this.c_arr.push(this.c_text);
        },

        search(){
            let req = new XMLHttpRequest();

            req.onreadystatechange = function(){
                if (this.readyState === 4 && this.status === 200){
                    let result = JSON.parse(req.responseText);
                    vueinst.search_result = result;
                }
            };

            req.open('GET', '/items?q='+encodeURIComponent(this.search_text), true);
            req.send();
        }
    }
}).mount('#app');


// function search(search_text){
//     let req = new XMLHttpRequest();

//     req.onreadystatechange = function(){
//         if (this.readyState === 4 && this.status === 200){
//             let result = JSON.parse(req.responseText);
//             vueinst.search_result = result;
//         }
//     };

//     req.open('GET', '/items?q='+encodeURIComponent(vueinst.search_text), true);
//     req.send();
// }


