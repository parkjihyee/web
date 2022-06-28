package co.edu.member;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.tomcat.util.http.fileupload.servlet.ServletFileUpload;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

@WebServlet({ "/memberUpload", "/fileUpload" })
public class MemberUpload extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public MemberUpload() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		// 키 벨류 형식으로 값을 넘길예정
		boolean isMulti = ServletFileUpload.isMultipartContent(request);

		if (isMulti) {
			// multi파트 요청이면
			String mn = request.getParameter("memberName");
			System.out.println(mn);
			String file = request.getServletContext().getRealPath("images");
			int fileSize = 5 * 1023 * 1024; // 5MB 제한
			MultipartRequest mr = new MultipartRequest(request // 요청정보
					, file // 파일 이름
					, fileSize // 파일 사이즈
					, "utf-8" // 인코딩 타입
					, new DefaultFileRenamePolicy()// 리네임 정책
			);

			mn = mr.getParameter("memberName");
			String ph = mr.getParameter("phone");
			String ad = mr.getParameter("address");
			String bi = mr.getParameter("birth");
			String im = mr.getParameter("image");
			im = mr.getFilesystemName("image"); // 중복된 사진파일이름은 바뀐 이름으로 저장

			MemberVO vo = new MemberVO();
			vo.setMembName(mn);
			vo.setMembAddr(ad);
			vo.setMembPhone(ph);
			vo.setMembBirth(bi);
			vo.setMembImage(im);

			MemberDAO dao = new MemberDAO();
			Gson gson = new GsonBuilder().create();
			PrintWriter out = response.getWriter();
			
			dao.insertMember(vo);

			System.out.println(mn);
			// {"retCode": "Fulfilled"}
			out.print("{\"retCode\": \"Fullfilled\"}");
			
		} else {
			String cmd = request.getParameter("cmd");
			String id = request.getParameter("delId");
			PrintWriter out = response.getWriter();

			if (cmd.equals("delete")) {
				MemberDAO dao = new MemberDAO();
				if (dao.deleteMember(Integer.parseInt(id))) {
					out.print("{\"retCode\": \"Success\"}");
				} else {
					out.print("{\"retCode\": \"Fail\"}");
				}
			}
		}
	}
}
