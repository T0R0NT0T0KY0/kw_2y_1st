package tis.kw.web.helpers;


import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(urlPatterns = {"/*"})
public class CORSMiddleware implements Filter {

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		System.out.println("DefaultFilter initialized");
	}

	@Override
	public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain chain) throws IOException, ServletException {
		HttpServletResponse response = (HttpServletResponse) servletResponse;
		System.out.println("url: " + ((HttpServletRequest)servletRequest).getRequestURL());
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setHeader("Access-Control-Allow-Credentials", "true");
		response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT,OPTIONS, DELETE");
		response.setHeader("Access-Control-Max-Age", "3600");
		response.setHeader("Access-Control-Allow-Headers", "x-requested-with");
		response.setHeader("Access-Control-Expose-Headers", "Set-Cookie");
		System.out.println("URL=" + ((HttpServletRequest) servletRequest).getRequestURL());
		chain.doFilter(servletRequest, servletResponse);
	}
}
