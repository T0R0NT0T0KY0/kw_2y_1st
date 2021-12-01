package tis.kw.web.routes.weather;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Objects;

import static tis.kw.web.components.weather.Weather_Service.getWeatherByCityNameController;
@WebServlet(name = "weather", urlPatterns = "/api/weather")
public class WeatherRoutes extends HttpServlet {
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String city = req.getParameter("city");
		PrintWriter writer = resp.getWriter();
		Object[] information = getWeatherByCityNameController(city);
		System.out.println(information[0]);
		System.out.println(information[1]);
		if (Objects.nonNull(information[0])) {
			writer.write((String) information[0]);
			resp.setStatus(400);
		}
		writer.write(String.valueOf(information[1]));
	}
}
