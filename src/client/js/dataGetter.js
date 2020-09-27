
import { validateInput } from './inputValidator.js'
import { getAPIKey } from './APIkeyGetter.js'

export function getData() {
    const urlInput = validateInput();
    Client.getAPIKey().then(apiKey => {
        const url = 'http://api.meaningcloud.com/sentiment-2.1?key=' + apiKey + '&lang=en&url=' + urlInput;
        
        fetch(url).then(serverResponse => {
            serverResponse.json().then(data => {
                document.getElementById('agreement').innerHTML = data.agreement;
                document.getElementById('subjectivity').innerHTML = data.subjectivity;
                document.getElementById('confidence').innerHTML = data.confidence;
                document.getElementById('irony').innerHTML = data.irony;
                })
            }        
        )
        
        }
    )
}
