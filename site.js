fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects')
    .then(response => response.json())
    .then(data => {
        const randomIndex = Math.floor(Math.random() * data.total);
        const objectId = data.objectIDs[randomIndex];

        return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`);
    })
    .then(response => response.json())
    .then(objectData => {
        if (objectData.primaryImage) {
            document.getElementById('content').innerHTML = `<img id="artImage" src="${objectData.primaryImage}" alt="${objectData.title}">`;
        } else {
            document.getElementById('content').innerHTML = 'No image available for this art piece.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('content').innerHTML = `Error: ${error.message}`;
    });
