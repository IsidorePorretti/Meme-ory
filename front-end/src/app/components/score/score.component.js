import template from './score.component.html';
import "./score.component.html";
import "./score.component.css";

import {Component} from '../../utils/component';
import { parseUrl} from '../../utils/utils';

export class ScoreComponent extends Component {
    
    constructor(){
        super('score')
    
                const params = parseUrl();
        this.name = params.name;
        this.size = parseInt(params.size);
        this.time = parseInt(params.time);
            }
        init() {
            document.getElementById('name').innerText = this.name;
            document.getElementById('size').innerText = this.size;
            document.getElementById('time').innerText = this.time;
                }

    
                getTemplate(){
                    return template;
                }

                parseUrl() {
               

                    return (window.location.href
                        .split('?')[1] || ''
                        )
                        .split('&')
                        .map(element => element.split('='))
                        .reduce((acc, [key, value]) => {
                        acc[key] = value;
                        return acc;
                        }, {});
                    
                }
        }

     



   

 
