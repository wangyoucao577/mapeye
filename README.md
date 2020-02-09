# Mapeye
Play [leaflet](https://leafletjs.com/) to show various of contents on maps.     

## Usage

```bash
$ ./go/index-html-generator/index-html-generator -google-maps-api-key YOUR_GOOGLE_API_KEY -here-api-key YOUR_HERE_API_KEY -tomtom-api-key YOUR_TOMTOM_API_KEY -mapbox-access-token YOUR_MAPBOX_ACCESS_TOKEN
$ 
$ open index.html # in browser
```

## index-html-generator
It's used to generate `index.html` from `index-template.html` based on `Go`'s `html/template`.        
Instead of put your personal API keys/access tokens in HTML directly, we can use this tool for insertion.         
Prepare `go 1.13` at least if you'd like to build/modify the code.     

```bash
$ cd go/index-html-generator
$ go build
$ ./index-html-generator -h
Usage of ./index-html-generator:
  -google-maps-api-key string
    	Google maps API key
  -here-api-key string
    	HERE maps API key
  -mapbox-access-token string
    	Mapbox access token
  -output string
    	Output HTML file (default "index.html")
  -template string
    	Input template HTML file (default "index-template.html")
  -tomtom-api-key string
    	TOMTOM maps API key
```