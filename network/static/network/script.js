//Receive a file name and load the HTML on the page
function loadHtml(fileName) {
    fetch(`file/${fileName}.html`)
    
    .then(function (response) {
        // The API call was successful!
        return response.text();

    }).then(function (html) {
        // This is the HTML from our response as a text string
        document.querySelector('.body').innerHTML = html
        console.log(html);

    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
    
}

document.querySelectorAll('.nav-link').forEach(element => {
    element.onclick = function() {
        if (this.dataset.file == "logout") {
            window.location.replace("/logout");
        }
        else{
            loadHtml(this.dataset.file)
        }
        
    }
})