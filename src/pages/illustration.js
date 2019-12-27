import { Link } from "gatsby"
import React from "react"
import Berlin from "../images/illustration/berlin.jpg"
import CharacterRed from "../images/illustration/character-red.jpg"
import Innovation from "../images/illustration/innovation.jpg"
import Ecconomy from "../images/illustration/ecconomy.jpg"
import Forastero from "../images/illustration/forastero.jpg"
import Gallereplay from "../images/illustration/innovation.jpg"
import HandsCollection from "../images/illustration/hands.jpg"
import IsicCard from "../images/illustration/isic.jpg"
import Mapuches from "../images/illustration/mapuches.jpg"
import OldMan from "../images/illustration/old-man.jpg"

const IllustrationPage = () => (
 <section class="illustration main flex-vertical">
   <div id="grid" class="grid" data-columns>
     <div class="grid-item-container flex">

     <Link to="/" class="grid-item">
       <img src={Berlin} alt="Berlinesco"/>
       <span class="grid-item-caption">Victorinox</span>
     </Link>

     <Link to="/" class="grid-item">
       <img src={CharacterRed} alt="Character Red"/>
       <span class="grid-item-caption">Character Red</span>
     </Link>

     <Link to="/" class="grid-item">
       <img src={Innovation} alt="Innovation 4.0"/>
       <span class="grid-item-caption">Innovation 4.0</span>
     </Link>

     <Link to="/" class="grid-item">
       <img src={Ecconomy} alt="Ecconomy"/>
       <span class="grid-item-caption">Ecconomy</span>
     </Link>

     <Link to="/" class="grid-item">
       <img src={Forastero} alt="Forastero"/>
       <span class="grid-item-caption">Forastero</span>
     </Link>

     <Link to="/" class="grid-item">
       <img src={Gallereplay} alt="Gallereplay"/>
       <span class="grid-item-caption">Gallereplay</span>
     </Link>

     <Link to="/" class="grid-item">
       <img src={HandsCollection} alt="Hands collection"/>
       <span class="grid-item-caption">Hands collection</span>
     </Link>

     <Link to="/" class="grid-item">
       <img src={IsicCard} alt="Isic Card"/>
       <span class="grid-item-caption">Isic Card</span>
     </Link>

     <Link to="/" class="grid-item">
       <img src={Mapuches} alt="Mapuches"/>
       <span class="grid-item-caption">Mapuches</span>
     </Link>

     <Link to="/" class="grid-item">
       <img src={OldMan} alt="Old Man"/>
       <span class="grid-item-caption">Old Man</span>
     </Link>

     </div>
   </div>
 </section>
)

export default IllustrationPage
