// front-end/src/app/components/game/card/card.component.js
import { Component } from "../../../utils/component";

import "./card.component.css";
import template from "./card.component.html";




export class CardComponent extends Component {

    getTemplate() {
            return template;
        }
    
        constructor(id) {
            super("card");
        
            // ...
            // TODO Step 7: Update the path for images
            this._imageElt.querySelector(
              "img.front-face"
            ).src = `src/app/components/game/card/assets/card-${this._id}.png`;
            this._imageElt.querySelector("img.back-face").src =
              "src/app/components/game/card/assets/back.png";
          }
        
        
    
        flip() {
            this._imageElt.classList.toggle('flip');
            this._flipped = !this._flipped;
        }
    
        equals(card) {
            return card._id === this._id;
        }
    

        get flipped() {
            return this._flipped;
        }
        
    }

    // put component in global scope, tu be runnable right from the HTML.
 
    
;
