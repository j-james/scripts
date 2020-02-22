package main

import (
	"fmt"
	"log"
	"os"
	"strconv"
)

func main() {
	numbers := []int{77, 82, 88}
	for i := 0; i < len(numbers); i++ {
		file, err := os.Create(strconv.Itoa(numbers[i]) + ".html")
		if err != nil {
			log.Fatal(err)
		}
		var padded string = fmt.Sprintf("%05d", numbers[i])
		fmt.Fprintln(file, "---")
		fmt.Fprintln(file, "layout: flash")
		fmt.Fprintln(file, "---")
		fmt.Fprintln(file, "")
		fmt.Fprintln(file, "<embed src=\"https://www.homestuck.com/flash/hs2/"+padded+"/"+padded+".swf\" quality=\"high\" width=\"100%\" height=\"100%\" allowScriptAccess=\"sameDomain\" allowFullScreen=\"false\" type=\"application/x-shockwave-flash\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" />")
	}
}
