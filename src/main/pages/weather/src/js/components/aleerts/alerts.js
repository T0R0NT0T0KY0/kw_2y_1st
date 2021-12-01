import Swal from "../../../../node_modules/sweetalert2/src/sweetalert2.js";

const parseWeatherToHTML = ({coord, weather, main}) =>
    `Coordinates: <br>
        Longitude=${coord?.lon},<br>
        Latitude=${coord?.lat}<br>
    Weather: ${JSON.stringify(weather?.[0]?.main)}<br>
    Weather description: ${JSON.stringify(weather?.[0]?.description)}<br>
    Temperature: ${main?.temp}<br>
    Feels like: ${main?.feels_like}<br>
    Humidity: ${main?.humidity}`;

export const showWeatherAlert = async () =>
    Swal.fire({
        title: "Weather",
        text: "Information about the weathers at the point of the earth",
        input: "text",
        inputPlaceholder: "Kazan",
        showCloseButton: true,
        confirmButtonText: "search🔍",
        confirmButtonColor: "#ff6a00",
        showLoaderOnConfirm: true,
        focusConfirm: true,
        imageUrl: "../img/world.jpg",
        showConfirmButton: true,
    }).then(async ({value: city}) => {
        if (!city) return errAlert("City field is empty");
        const [err, res] = await fetch(`http://localhost:8080/api/weather?city=${city}`)
            .then((res) => res.json())
            .then((res) => [null, res])
            .catch((err) => [err, null])
        if (err) return errAlert(err);
        Swal.fire({
            icon: "info",
            title: "Information",
            html: parseWeatherToHTML(res),
            imageUrl: "../img/weather_2.jfif",
            imageAlt: "No information, sorry",
        });
    });


export const errAlert = (e) =>
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! ${JSON.stringify(e) ?? ""}`,
    });
