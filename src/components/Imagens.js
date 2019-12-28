import React, { Component } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// import "../layouts/masonry.scss";
import { Link } from "gatsby"

import Berlin from "../images/illustration/berlin.jpg"
import CharacterRed from "../images/illustration/character-red.jpg"
import Innovation from "../images/illustration/innovation.jpg"
import Ecconomy from "../images/illustration/ecconomy.jpg"
import Forastero from "../images/illustration/forastero.jpg"
import Gallereplay from "../images/illustration/gallereplay.jpg"
import HandsCollection from "../images/illustration/hands.jpg"
import IsicCard from "../images/illustration/isic.jpg"
import Mapuches from "../images/illustration/mapuches.jpg"
import OldMan from "../images/illustration/old-man.jpg"
import Foodora from "../images/illustration/foodora.jpg"
import Tregul from "../images/illustration/tregul.jpg"
import Boolean from "../images/illustration/boolean.jpg"




class Imagenes extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
    this.loadimg();
  }
  // componentWillUnmount() {}

  loadimg() {
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=iphone&client_id=a322a1eeefcea7de09bd284c21489afcb274af47aed1dbda8a9e197546780f93`
    )
      .then(res => res.json())
      .then(res => this.setState({ items: res.results }));
  }

  render() {
    console.log(this.state.items);
    return (
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>

            <Link to="/" className="grid-item flex" style={{ padding: "7px" }}>
              <img src={Berlin} alt="Berlinesco"/>
              <span className="grid-item-caption">Victorinox</span>
            </Link>

            <Link to="/" className="grid-item flex" style={{ padding: "7px" }}>
              <img src={CharacterRed} alt="CharacterRed"/>
              <span className="grid-item-caption">Character Red</span>
            </Link>

            <Link to="/" className="grid-item flex" style={{ padding: "7px" }}>
              <img src={Innovation} alt="Innovation"/>
              <span className="grid-item-caption">Innovation</span>
            </Link>

            <Link to="/" className="grid-item flex" style={{ padding: "7px" }}>
              <img src={Boolean} alt="Boolean"/>
              <span className="grid-item-caption">Boolean</span>
            </Link>

            <Link to="/" className="grid-item flex" style={{ padding: "7px" }}>
              <img src={Foodora} alt="Foodora"/>
              <span className="grid-item-caption">Foodora</span>
            </Link>

            <Link to="/" className="grid-item flex" style={{ padding: "7px" }}>
              <img src={Tregul} alt="Tregul"/>
              <span className="grid-item-caption">Tregul</span>
            </Link>

            <Link to="/" className="grid-item flex" style={{ padding: "7px" }}>
              <img src={Ecconomy} alt="Ecconomy"/>
              <span className="grid-item-caption">Ecconomy</span>
            </Link>

            <Link to="/" className="grid-item flex" style={{ padding: "7px" }}>
              <img src={Forastero} alt="Forastero"/>
              <span className="grid-item-caption">Forastero</span>
            </Link>

            <Link to="/" className="grid-item flex" style={{ padding: "7px" }}>
              <img src={Gallereplay} alt="Gallereplay"/>
              <span className="grid-item-caption">Gallereplay</span>
            </Link>

            <Link to="/" className="grid-item flex" style={{ padding: "7px" }}>
              <img src={HandsCollection} alt="HandsCollection"/>
              <span className="grid-item-caption">HandsCollection</span>
            </Link>

            <Link to="/" className="grid-item flex" style={{ padding: "7px" }}>
              <img src={IsicCard} alt="IsicCard"/>
              <span className="grid-item-caption">IsicCard</span>
            </Link>

            <Link to="/" className="grid-item flex" style={{ padding: "7px" }}>
              <img src={Mapuches} alt="Mapuches"/>
              <span className="grid-item-caption">Mapuches</span>
            </Link>

            <Link to="/" className="grid-item flex" style={{ padding: "7px" }}>
              <img src={OldMan} alt="OldMan"/>
              <span className="grid-item-caption">OldMan</span>
            </Link>



        </Masonry>
      </ResponsiveMasonry>
    );
  }
}





export default Imagenes;
