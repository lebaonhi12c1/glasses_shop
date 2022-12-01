$(function(){
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://throne-of-glass-api-2.p.rapidapi.com/api/characters",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "1658ff66aamsh699b709b3f58e9cp117eb4jsnef6fcb8655ea",
            "X-RapidAPI-Host": "throne-of-glass-api-2.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
})