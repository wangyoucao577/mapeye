package main

import "flag"

var flags struct {
	Tokens

	templateHTMLFile string
	outputHTML       string
}

func init() {
	flag.StringVar(&flags.Tokens.GoogleMapsAPIKey, "google-maps-api-key", "", "Google maps API key")
	flag.StringVar(&flags.Tokens.MapboxAccessToken, "mapbox-access-token", "", "Mapbox access token")
	flag.StringVar(&flags.Tokens.HereAPIKey, "here-api-key", "", "HERE maps API key")
	flag.StringVar(&flags.Tokens.TomtomAPIKey, "tomtom-api-key", "", "TOMTOM maps API key")
	flag.StringVar(&flags.templateHTMLFile, "template", "index-template.html", "Input template HTML file")
	flag.StringVar(&flags.outputHTML, "output", "index.html", "Output HTML file")
}
