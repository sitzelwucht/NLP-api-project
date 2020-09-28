

import 'regenerator-runtime/runtime';
import { getAPIKey } from './js/APIkeyGetter.js'
import { validateInput } from './js/inputValidator.js';
import { getData } from './js/dataGetter.js'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'



document.getElementById('generate').addEventListener('click', (e) => {
    e.preventDefault();
    Client.validateInput()

    
});

export { getAPIKey,
        validateInput,
        getData }


       