package main

import (
	"encoding/json"
	"github.com/grafana/grafana-plugin-sdk-go/backend/datasource"
	"github.com/grafana/grafana-plugin-sdk-go/backend/log"
	"io/ioutil"
	"net/http"
	_ "net/http/pprof"
	"os"
	"path/filepath"
)

func main() {
	// Start listening to requests sent from Grafana. This call is blocking so
	// it won't finish until Grafana shuts down the process or the plugin choose
	// to exit by itself using os.Exit. Manage automatically manages life cycle
	// of datasource instances. It accepts datasource instance factory as first
	// argument. This factory will be automatically called on incoming request
	// from Grafana to create different instances of SampleDatasource (per datasource
	// ID). When datasource configuration changed Dispose method will be called and
	// new datasource instance created using NewSampleDatasource factory.

	openPprof()
	if err := datasource.Manage("aliyun-log-backend-datasource", NewSLSDatasource, datasource.ManageOpts{}); err != nil {
		log.DefaultLogger.Error(err.Error())
		os.Exit(1)
	}
}

func openPprof() {
	ex, err := os.Executable()
	if err != nil {
		log.DefaultLogger.Error(err.Error())
		return
	}
	exPath := filepath.Dir(ex)
	b, err := ioutil.ReadFile(exPath + "/plugin.json")
	if err != nil {
		log.DefaultLogger.Error(err.Error())
		return
	}
	m := map[string]interface{}{}
	err = json.Unmarshal(b, &m)
	if err != nil {
		log.DefaultLogger.Error(err.Error())
		return
	}
	isOpen := m["pprof"]
	if isOpen != nil && isOpen.(bool) == true {
		go func() {
			log.DefaultLogger.Error(http.ListenAndServe("localhost:60600", nil).Error())
		}()
	}
}
