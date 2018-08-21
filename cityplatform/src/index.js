import _ from 'lodash';
import anime from 'animejs';

function component() {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    anime({
        
    });
    return element;
}

document.body.appendChild(component());
