import React, { Component } from 'react';
import DrawPie from '../recharts/pie-chart-with-customized-label';
import WorldwideSpread from '../maps/worldwide-spread';
import { formatData, getPieData, getMapData, sortCountries } from '../utils/homeUtils';
import Loading from '../includes/loading';

var countrySlug = {};

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            Countries: [],
            overview: {}
        };
        this.pieAttributes = { svgHeight: 350, svgWidth: 350, outerClassName: "border border-dark mb-5", cx: 175, cy: 150, outerRadius: 120 };
    }

    componentDidMount() {
        fetch("https://api.covid19api.com/summary")
            .then(res => res.json())
            .then(
                (result) => {
                    var formattedData = formatData(result.Countries);
                    countrySlug = formattedData.country_slug;
                    formattedData = formattedData.formatted_data;
                    var that = this;
                    sortCountries(formattedData, "Confirmed", (sortedConfirmedData) => {
                        sortCountries(formattedData, "Deaths", (sortedDeathData) => {
                            sortCountries(formattedData, "Recovered", (sortedRecoveredData) => {
                                var pieData = {
                                    confirmed: getPieData(sortedConfirmedData.slice(0, 4), result.Global.TotalConfirmed, "Confirmed"),
                                    deaths: getPieData(sortedDeathData.slice(0, 4), result.Global.TotalDeaths, "Deaths"),
                                    recovered: getPieData(sortedRecoveredData.slice(0, 4), result.Global.TotalRecovered, "Recovered")
                                };
                                that.setState({
                                    isLoaded: true,
                                    Countries: formattedData,
                                    overview: result.Global,
                                    pieData: pieData
                                });
                            });
                        });
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
        var scriptsToLoad = [
            "https://unpkg.com/react/umd/react.production.min.js",
            "https://unpkg.com/react-dom/umd/react-dom.production.min.js",
            "https://unpkg.com/prop-types/prop-types.min.js",
            "https://unpkg.com/recharts/umd/Recharts.min.js"
        ];

        for (var index in scriptsToLoad) {
            var script = document.createElement("script");
            script.src = scriptsToLoad[index];
            script.async = true;
            document.body.appendChild(script);
        }
    }

    render() {
        const { error, isLoaded, Countries, overview, pieData } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (<div>
                <Loading />
            </div>);
        } else {
            var data = [];
            Countries.map(Country => (
                data.push({ name: Country.Country, "Total Confirmed": Country.TotalConfirmed, "Total Recovered": Country.TotalRecovered, "Total Deaths": Country.TotalDeaths })
            ));
            const mapData = getMapData(Countries);
            return (
                <>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 mt-2 mb-2 text-center">
                                <h3>Country wise spread of COVID-19</h3>
                            </div>
                            <div className="col-12">
                                <div className="row mt-2 mb-2">
                                    <div className="col-lg-4 col-mg-4 col-sm-12 col-xs-12 text-center">
                                        <h5 className="p-2" style={{ color: "blue", fontWeight: "bold", fontSize: "1.7em" }}>Confirmed: {overview.TotalConfirmed.toLocaleString('en-IN')}</h5>
                                    </div>
                                    <div className="col-lg-4 col-mg-4 col-sm-12 col-xs-12 text-center">
                                        <h5 className="p-2" style={{ color: "red", fontWeight: "bold", fontSize: "1.7em" }}>Deaths: {overview.TotalDeaths.toLocaleString('en-IN')}</h5>
                                    </div>
                                    <div className="col-lg-4 col-mg-4 col-sm-12 col-xs-12 text-center">
                                        <h5 className="p-2" style={{ color: "green", fontWeight: "bold", fontSize: "1.7em" }}>Recovered: {overview.TotalRecovered.toLocaleString('en-IN')}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <div className="col-12">
                                <WorldwideSpread mapData={mapData} countrySlug={countrySlug} />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mt-5 mb-5">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                        <DrawPie heading="Countries with most cases of COVID-19" data={pieData.confirmed} COLORS={['#7e0505af', '#8828a7cf', '#00C49Fcf', '#FFBB28cf', '#FF8042cf']} attributes={this.pieAttributes} />
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                        <DrawPie heading="Countries with most deaths due to COVID-19" data={pieData.deaths} COLORS={['#7e0505af', '#8828a7cf', '#00C49Fcf', '#FFBB28cf', '#FF8042cf']} attributes={this.pieAttributes} />
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                        <DrawPie heading="Countries with most recoveries from COVID-19" data={pieData.recovered} COLORS={['#7e0505af', '#8828a7cf', '#00C49Fcf', '#FFBB28cf', '#FF8042cf']} attributes={this.pieAttributes} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    }
}

export default Home;