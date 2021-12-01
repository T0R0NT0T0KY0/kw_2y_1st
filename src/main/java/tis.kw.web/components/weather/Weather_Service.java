package tis.kw.web.components.weather;

import static tis.kw.web.components.weather.WeatherResource.getWeatherByCityName;

public class Weather_Service {

	public static Object[] getWeatherByCityNameController(String name) {
		Object[] goList = new Object[2];
		try {
			getWeatherByCityName(name);
		} catch (Exception e) {
			goList[0] = e.getMessage();
		}
		return goList;
	}
}
