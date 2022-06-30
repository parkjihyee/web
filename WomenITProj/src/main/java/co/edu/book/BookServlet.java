package co.edu.book;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;

@WebServlet("/book") 
public class BookServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public BookServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/json;charset=utf-8");

		String cmd = request.getParameter("cmd"); 
		Gson gson = new GsonBuilder().create(); 
		BookDAO dao = new BookDAO();

		if (cmd.equals("list")) { 
			List<BookVO> list = dao.bookList();
			response.getWriter().print(gson.toJson(list)); 

		} else if (cmd.equals("insert")) { //
			String code = request.getParameter("code");
			String name = request.getParameter("name");
			BookVO vo = new BookVO();
			vo.setBook_code(code);
			vo.setBook_name(name);

			dao.insertBook(vo);

			response.getWriter().print(gson.toJson(vo));

		} else if (cmd.equals("delete")) {
			String delCode = request.getParameter("delCode");

			if (dao.deleteBook(delCode)) {
				response.getWriter().print("{\"retCode\": \"Sucess\"}");
			} else {
				response.getWriter().print("{\"retCode\": \"Fail\"}");
			}
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/json;charset=utf-8");
		
		// post방식의 요청이 되면 실행 메소드
		String cmd = request.getParameter("cmd"); 
		String bookCode = request.getParameter("code");
		String bookName = request.getParameter("name");
		String bookAuth = request.getParameter("auth");
		String bookPres = request.getParameter("pres");
		String bookAmt  = request.getParameter("amt");
		
		BookVO vo = new BookVO();
		vo.setBook_code(bookCode);
		vo.setBook_name(bookName);
		vo.setBook_auth(bookAuth);
		vo.setBook_pres(bookPres);
		vo.setBook_amt(bookAmt);
		
		BookDAO dao = new BookDAO();
		
		Gson gson = new GsonBuilder().create();
		PrintWriter out = response.getWriter();

		
		// 입력
		if(cmd.equals("insert")) {
			dao.insertBook(vo);
			out.print(gson.toJson(vo));
			
		// 삭제
		} else if (cmd.equals("delete")) {
			String delCode = request.getParameter("delCode");
			if (dao.deleteBook(delCode)) {
			   out.print("{\"retCode\": \"Success\"}");
			} else {
				out.print("{\"retCode\": \"Fail\"}");
			}
		}
		
	}
}