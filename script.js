fetch ("https://api.nasa.gov/planetary/apod?api_key=e7uTTsc27yBCuR0kYTqyjCfn1pKrEqeG7bEOKQBT")
.then((response) => response.JSON())
.then((data) =>{
    data.forEach(element => {
        const space = {
            ...element ,
            copyright: element.copyright,
            explanation: element.explanation,
            title: element.title
        }
        nasaspace(space)
    });
}).catch((error => console.log ("error")));

function nasaspace({copyright,explanation,title}){
    document.body.innerHTML +=`
    <div class="container">
    <div class="card">
    <div class="card-header">
    <h1>tvshows</h1>
    </div>
    <div class="info">
    <p><span>Title : <span/>${title}</p>
    <p><span>Copyright : <span/>${copyright}</p>
    <p><span>Explanation : <span/>${explanation}}</p>
    </div>
    </div>
    </div>`
}