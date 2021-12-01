import Swal from "../../../../node_modules/sweetalert2/src/sweetalert2.js";

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
    }).then(async ({ value: city }) => {
        if (!city) return;
        const [err, res] = await fetch(`http://localhost:8080/api/weather?city=${city}`)
            .then((res) => res.json())
            .then((res) => [null, res])
            .catch((err) => [err, null])
        if (err) return errAlert(err);
        Swal.fire({
            icon: "info",
            title: "Information",
            text: res,
            imageUrl: "../img/weather_2.jfif",
            imageAlt: "No information, sorry",
            showDenyButton: true,
            denyButtonText: "next",
            denyButtonColor: "#3085d6",
        });
    });


export const errAlert = (e) =>
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! \n ${e?.message ?? ""}`,
    });
