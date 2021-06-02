import * as actionTypes from './Shopping-types';

const INITIAL_STATE = {
  products: [
    {
      id: '1',
      title: 'Web Designing',
      subTitle: 'Services',
      image: require('../../App/Assets/webdesign.png'),
      price: 250,
      details: [
        '1 .Complete Prototype Design',
        '2 .Complete Web Design on Photoshop or other platforms.',
        '3 .Complete Web Design implementation from psd designs',
      ],
    },
    {
      id: '2',
      title: 'Mobile Application',
      subTitle: 'Development',
      image: require('../../App/Assets/Mobile-Application-Development.png'),
      price: 140,
      details: [
        '1. Complete mobile Application design on React Native.',
        '2. Api and Backend Integration of mobile application.',
      ],
    },
    {
      id: '3',
      title: 'Web Development',
      subTitle: 'Development',
      price: 260,
      image: require('../../App/Assets/web-left-banner.jpg'),
      details: [
        '1. Complete WebDevelopment on wordpress front end & Bacakend.',
        '2. Complete Web app development on React Js.',
        '3. Front End on React js.',
        '4. Backend on Node js,Laravell,Php.',
      ],
    },
    {
      id: '4',
      title: 'Graphics Designing',
      subTitle: 'Services',
      image: require('../../App/Assets/U1a3d11e1f0f04448a279459ec8a72e781.jpg'),
      price: 180,
      details: [
        '1. Brochure design',
        '2. Magazine design.',
        '3. Buisness card design.',
        '4. Flyover design.',
        '5. Banner design.',
        '6. Cover page design.',
        '7. Icon design.',
        '8. 2d graphics design.',
      ],
    },
    {
      id: '5',
      title: 'E-Commerce',
      subTitle: 'Solutions',
      image: require('../../App/Assets/download.png'),
      price: 220,
      details: [
        '1. Complete website developing on Shopify platform',
        '2. Big commerce.',
        '3. Woo commerce.',
        '4. Complete content writing for shopify websites.',
        '5. Complete integration with facebook pixels.',
        '6. Integration of Oberlo.',
        '7. Integration with plugin for Woo commerce.',
      ],
    },
  ], //{id,title,desc,price,img}
  cart: [], //{id,title,desc,price,img,qty}
  currentItem: null,
};
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find(prod => prod.id === action.payload.id);
      const inCart = state.cart.find(item =>
        item.id === action.payload.id ? true : false,
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map(item =>
              item.id === action.payload.id
                ? {...item, qty: item.qty + 1}
                : item,
            )
          : [...state.cart, {...item, qty: 1}],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? {...item, qty: action.payload.qty}
            : item,
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {...state, currentItem: action.payload};
    default:
      return state;
  }
};
export default shopReducer;
