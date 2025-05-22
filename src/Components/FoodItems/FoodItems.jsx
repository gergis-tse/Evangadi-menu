import  { Component } from 'react'
import  "./Fooditems.css"
export default class FoodItems extends Component { 
  render() {
     console.log(this.props);
    let {image, name, price,description} = this.props;
    return (
      <div className="single-food">
        <div className="img">
          <img src={image} />
        </div>
        <div className="title-price">
          <h3>{name}</h3>

          <p>{price}</p>
          
          
        </div>
        <div className="food-desc">{description}</div>
      </div>
    );
  }
}
