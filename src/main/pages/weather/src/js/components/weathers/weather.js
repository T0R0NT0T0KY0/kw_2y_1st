import { showWeatherAlert } from "../aleerts/alerts.js";

export const addWeatherButtonEL = async () => {
    document.querySelector("#weather_button")
        .addEventListener("click", async () => {
            await showWeatherAlert();
        });
};

export default { addWeatherButtonEL };
