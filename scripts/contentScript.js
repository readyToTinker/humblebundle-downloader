function getScriptContent(htmlString) {
    console.log("htmlString", htmlString);
    const regex = /<script\s+id="user-home-json-data"\s+type="application\/json">([\s\S]*?)<\/script>/;
    const match = regex.exec(htmlString);

    try {

        if (match) {
            const scriptContent = match[1]; // The captured content of the <script> tag
            keys = JSON.parse(scriptContent).gamekeys
            console.log("gamekeys: ", keys);
            return keys

        } else {
            console.log('No match found');
        }
    } catch (e) {
        console.error(e)
    }
}

function constructServiceUrl(gamekeys) {
    const searchParams = new URLSearchParams();

    gamekeys.forEach((value) => {
        searchParams.append("gamekeys", value);
    });
    searchParams.append("all_tpkds", true)

    url = "https://www.humblebundle.com/api/v1/orders?" + searchParams.toString()
    console.log("serviceUrl", url)
    return url
}

function main() {
    console.log("Runs on the page");
    return fetch('https://www.humblebundle.com/home/library')
        .then(response => response.text()) // Parse the response as text
        // Get gamekeys from user-home-json-data script (JSON)
        .then(getScriptContent)
        // Fetch library as JSON
        .then(gamekeys => {
            url = constructServiceUrl(gamekeys)
            return fetch(url, {
                "headers": {
                    "accept": "application/json, text/javascript, */*; q=0.01",
                },
            })
        })
        .then(response => response.json()) // Parse the response as json
        .then(json => {
            console.log("payload",json)
            return json
        })

}

main();