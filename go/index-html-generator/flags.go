package main

import "flag"

var flags struct {
	googleMapsAPIKey string
	templateHTMLFile string
	outputHTML       string
}

func init() {
	flag.StringVar(&flags.googleMapsAPIKey, "google-maps-api-key", "", "Google Maps API Key")
	flag.StringVar(&flags.templateHTMLFile, "template", "index-template.html", "Input template HTML file")
	flag.StringVar(&flags.outputHTML, "output", "index.html", "Output HTML file")
}
