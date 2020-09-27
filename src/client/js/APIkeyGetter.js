export async function getAPIKey() {
    const response = await fetch('/api');
    try {
        const data = await response.json();
        return data.key;
   }
      catch (err) {
        console.log('Error occurred:', err);
      }
  }