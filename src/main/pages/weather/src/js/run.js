import { addWeatherButtonEL } from "./components/weathers/weather.js";

export const setData = async () => {
    await Promise.all([addWeatherButtonEL()]);
};
