
export function validateInput() {
    
    const input = document.getElementById('url-input').value;    
    const urlRegex = /^(https:\/\/www\.|http:\/\/www\.|http:\/\/|https:\/\/)[a-zA-Z0-9!\_$%?\-]+\.([a-zA-Z]|[a-zA-Z\/]{2,5})/;
    
    if (urlRegex.test(input)) {
        Client.getData();
        
        }
    else 
        document.getElementById('error').innerHTML = 'Please enter a valid url';

} 
