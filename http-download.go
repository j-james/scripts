package main

import (
	"io"
	"log"
	"net/http"
	"os"
	"strconv"
)

func main() {
	for i := 100; i <= 386; i++ {
		resp, err := http.Get("https://www.serebii.net/red_green/pokemon/" + strconv.Itoa(i) + ".gif")
		if err != nil {
			log.Fatal(err)
		}
		defer resp.Body.Close()

		out, err := os.Create(strconv.Itoa(i) + ".gif")
		if err != nil {
			log.Fatal(err)
		}
		defer out.Close()

		_, err = io.Copy(out, resp.Body)
		if err != nil {
			log.Fatal(err)
		}
	}
}
