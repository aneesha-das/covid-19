import { getCode } from 'country-list';

var countrySlug = {};

export const sortCountries = (countries, type, callback) => {
    if (type === "Confirmed") {
        var confirmedSort =  JSON.parse(JSON.stringify(countries));
        return callback(confirmedSort.sort(function (a, b) {
            return b.TotalConfirmed - a.TotalConfirmed;
        }));
    } else if (type == "Deaths") {
        var deathSort = JSON.parse(JSON.stringify(countries));
        return callback(deathSort.sort(function (a, b) {
            return b.TotalDeaths - a.TotalDeaths;
        }));
    } else {
        var recoveredSort = JSON.parse(JSON.stringify(countries));
        return callback(recoveredSort.sort(function (a, b) {
            return b.TotalRecovered - a.TotalRecovered;
        }));
    }
}

export const formatData = (countries) => {
    var formattedData = [];
    for (var index = 0; index < countries.length; index++) {
        if (countries[index].TotalConfirmed > 0) {
            formattedData.push(countries[index]);
        }
        countrySlug[getCode(countries[index].Country)] = countries[index].CountryCode;
    }
    return { formatted_data: formattedData, country_slug: countrySlug };
};

export const getPieData = (topCountries, total, type) => {
    var pieData = [];
    var topTotal = 0;
    topCountries.forEach(country => {
        if (type === "Confirmed") {
            pieData.push({ name: country.Country, value: country.TotalConfirmed });
            topTotal += country.TotalConfirmed;
        } else if (type == "Deaths") {
            pieData.push({ name: country.Country, value: country.TotalDeaths });
            topTotal += country.TotalDeaths;
        } else {
            pieData.push({ name: country.Country, value: country.TotalRecovered });
            topTotal += country.TotalRecovered;
        }
    });
    pieData.push({ name: "Others", value: total - topTotal });
    return pieData;
}

export const getMapData = (countries) => {
    var mapData = {};
    countries.forEach(country => {
        var countryCode = getCode(country.Country);
        mapData[countryCode] = country.TotalConfirmed;
    });
    return mapData;
}