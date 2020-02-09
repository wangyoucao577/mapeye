package main

import (
	"flag"
	"html/template"
	"log"
	"os"
)

// Tokens stores tokens/keys for various of map providers, e.g. Google, Mapbox, etc.
type Tokens struct {
	GoogleMapsAPIKey string
}

func main() {
	flag.Parse()

	data := struct {
		Tokens
	}{
		Tokens{
			GoogleMapsAPIKey: flags.googleMapsAPIKey,
		},
	}

	// prepare output HTML file
	if err := os.Remove(flags.outputHTML); err != nil && !os.IsNotExist(err) { // remove if exist
		log.Fatal(err)
	}
	f, err := os.Create(flags.outputHTML)
	if err != nil {
		log.Fatal(err)
	}
	defer f.Close()
	defer f.Sync()

	// generate HTML from template
	tpl, err := template.ParseFiles(flags.templateHTMLFile)
	if err != nil {
		log.Fatal(err)
	}
	if err := tpl.Execute(f, data); err != nil {
		log.Fatal(err)
	}
}
