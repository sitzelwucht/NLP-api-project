

import 'regenerator-runtime/runtime';
import { getAPIKey } from './js/APIkeyGetter.js'
import { validateInput } from './js/inputValidator.js';
import { getData } from './js/dataGetter.js'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

const inputTest = document.getElementById('input-test');
const apiTest = document.getElementById('api-test');
document.getElementById('generate').addEventListener('click', (e) => {
    e.preventDefault();
    getData();
    inputTest.innerHTML = validateInput();
    
});

export { getAPIKey,
        validateInput,
        getData }




