

export function getData() {

    const urlInput = document.getElementById('url-input');
    const langInput = document.getElementById('language-input')
    const spinner = document.querySelector('.loader');
    spinner.classList.add('spin');

    Client.getAPIKey().then(apiKey => {

        const url = 'http://api.meaningcloud.com/sentiment-2.1?key=' + apiKey + '&lang=' + langInput.value + '&url=' + urlInput.value;
        
        try {
            fetch(url).then(serverResponse => {
                serverResponse.json().then(data => {
                    document.getElementById('agreement').innerHTML = data.agreement;
                    document.getElementById('subjectivity').innerHTML = data.subjectivity;
                    document.getElementById('confidence').innerHTML = data.confidence;
                    document.getElementById('irony').innerHTML = data.irony;
                    spinner.classList.remove('spin');
                    })
                }        
            )
        }
        catch (err) {
            console.log('Error occurred', err);
            }
        
        }
    )
}
