import  { Component } from 'react'
import "./commonResource/style.css"
import  menu  from "./commonResource/data.js"
import FoodItems from './Components/FoodItems/FoodItems'
export default class App extends Component {
  render() {
    console.log(Component);
    
    return (
      <div className="all-container">
        {/* 1.using Replicating components */}
        <header className="title">
          <h1>Evangadi Menu</h1>
          <div></div>
        </header>
        <div className="foods-container">
          {/* <FoodItems
          image="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-timatim-salata.jpg.webp"
          name="TIMATIM SELAXA (ቲማቲም ሰላጣ)"
          price="$5.99"
          description="     Timatim Salata refers to a type of fresh Ethiopian tomato salad
            that’s also popular in Eritrea. It’s made with diced tomatoes,
            minced onions, and finely chopped peppers dressed with a mixture of
            berbere spices, olive oil, vinegar, and lemon juice."
        />
        <FoodItems
          image="https://media.cnn.com/api/v1/images/stellar/prod/190205144959-shekla-tibs.jpg?q=w_1600,h_900,x_0,y_0,c_fill/w_1280"
          name="TIBS (ጥብስ)"
          price="$22.99"
          description=" Sliced beef or lamb, pan-fried in butter, garlic and onion, tibs is
            one of the most popular dishes among Ethiopians. It comes in a
            variety of forms, varying in type, size or shape of the cuts of meat
            used, and can range from hot to mild or contain..."
        />
        <FoodItems
          image="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-kitfo.jpg.webp"
          name="KITFO (ክትፎ)"
          price="$25.99"
          description=" Made from the leanest meat, kitfo is viewed as a big treat by
            ordinary Ethiopians, while its nutritional powers are also praised.
            Similar to French steak tartare, the meat is minced and warmed in a
            pan with a little butter, mitmita (a stronger version of berbere)..."
        /> */}
          {/* 2.using Array's Map() Method */}
          {/* {menu.map((FoodItemsMenu, i) => {
          console.log(FoodItemsMenu);
          return (
            <FoodItems
            key ={i}
              image={FoodItemsMenu.img}
              name={FoodItemsMenu.title}
              price={FoodItemsMenu.price}
              description={FoodItemsMenu.desc} />
          );
        })} */}
          {/* 3.using destructuring technique */}
          {menu.map(({ id, title, price, img, desc }) => {
            return (
              <FoodItems
                key={id}
                image={img}
                name={title}
                price={`$${price}`}
                description={desc.length>320?desc+"...":desc}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

// substring method
