package co.edu.member;

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

@WebServlet("/member") // 이걸 입력하면 get방식이면 doGet, post방식이면 doPost가 실행됨
public class MemberServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public MemberServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 응답 정보에 한글 처리
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/json;charset=utf-8");

		String cmd = request.getParameter("cmd"); // 파라미터에 cmd를 읽어서
		Gson gson = new GsonBuilder().create(); // json 형태의 데이터를 만들고싶다 / json 데이터 생성
		MemberDAO dao = new MemberDAO();

		if (cmd.equals("list")) { // list이면 제이슨 화면 보여주고
			// 전체 리스트 가져와서 -> json 화면 보여주기
			List<MemberVO> list = dao.memberList();
			response.getWriter().print(gson.toJson(list)); // json 데이터로 변환

		} else if (cmd.equals("insert")) { //
			String name = request.getParameter("name");
			String addr = request.getParameter("addr");
			MemberVO vo = new MemberVO();
			vo.setMembName(name);
			vo.setMembAddr(addr);

			dao.insertMember(vo);

			response.getWriter().print(gson.toJson(vo));

		} else if (cmd.equals("update")) {
			// 9번 회원 - 전화번호 추가
			String numb = request.getParameter("no");
			String phone = request.getParameter("ph");

			MemberVO vo = new MemberVO();
			vo.setMembNo(Integer.parseInt(numb)); // "9"가 문자타입이라서 정수타입으로 변환
			vo.setMembPhone(phone);

			if (dao.updateMember(vo)) {
				// {"retCode": "Sucess"}
				response.getWriter().print("{\"retCode\": \"Sucess\"}");
			} else {
				// {"retCode": "Fail"}
				response.getWriter().print("{\"retCode\": \"Fail\"}");
			}
		} else if (cmd.equals("delete")) {
			String delNo = request.getParameter("delNumber");

			if (dao.deleteMember(Integer.parseInt(delNo))) {
				response.getWriter().print("{\"retCode\": \"Sucess\"}");
			} else {
				response.getWriter().print("{\"retCode\": \"Fail\"}");
			}
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 한글 처리
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/json;charset=utf-8");
		
		// post방식의 요청이 되면 실행 메소드
		String cmd = request.getParameter("cmd"); // cmd라는 파라미터를 읽어서 그 값이 vo에 담긴다?
		
		String membName = request.getParameter("name");
		String membAddr = request.getParameter("addr");
		String membPhon = request.getParameter("phone");
		String membBirt = request.getParameter("birth");
		String membImag = request.getParameter("image");
		
		MemberVO vo = new MemberVO();
		vo.setMembName(membName);
		vo.setMembAddr(membAddr);
		vo.setMembPhone(membPhon);
		vo.setMembBirth(membBirt);
		vo.setMembImage(membImag);
		
		MemberDAO dao = new MemberDAO();
		
		Gson gson = new GsonBuilder().create();
		
		PrintWriter out = response.getWriter();
		
		// 1.입력
		if(cmd.equals("add")) {
			dao.insertMember(vo);
			out.print(gson.toJson(vo));
			
		// 2.수정
		} else if (cmd.equals("modify")) {
			String mNo = request.getParameter("membNo");
			vo.setMembNo(Integer.parseInt(mNo));
			
			JsonObject obj = new JsonObject(); // {"name":"홍길동", "age":20}
			if(dao.updateMember(vo)) {
			//넘겨주는 타입을 json으로 만든다? 	
			// {"membNo": "mNO", "membName": "membName", "membAddr": "membAddr", "memberPhone": "membPhon", "membBirth": "membBirth", "retCode": "Success"} 
			// {"mno":?, "mName":?, "mAddr":?, ...} => object
			   out.print("{\"retCode\": \"Sucess\"}");
			   
			// out.print("{\"membNo\": \""+mNO+"\", \"membName\": \"membName\", \"membAddr\": \"membAddr\", \"memberPhone\": \"membPhon\", \"membBirth\": \"membBirth\", \"retCode\": \"Success\"}");
			
			   obj.addProperty("membNo", mNo); // {"membNo": 10}
			   obj.addProperty("membName", membName); // {"membNo": 10, "membName": "홍길동"}
			   obj.addProperty("membAddr", membAddr); 
			   obj.addProperty("membPhon", membPhon);
			   obj.addProperty("membBirth", membBirt);
			   obj.addProperty("retcode", "Success");
			   
			} else {
			   obj.addProperty("retcode", "Fail");
			}
			System.out.println(gson.toJson(obj));
			out.print(gson.toJson(obj)); // obj의 값을 json형태로 바꿈
			
		// 3.삭제
		} else if (cmd.equals("remove")) {
			String delNo = request.getParameter("delNo");
			if (dao.deleteMember(Integer.parseInt(delNo))) {
			   out.print("{\"retCode\": \"Success\"}");
			} else {
				out.print("{\"retCode\": \"Fail\"}");
			}
		}
		
	}
}