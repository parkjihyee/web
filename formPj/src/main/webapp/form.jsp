<%@page import="co.edu.Employee"%>
<%@page import="java.util.List"%>
<%@page import="co.edu.EmpDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
  <% //java영역
    String ln = request.getParameter("last_name"); //form > input:last_name을 받아서 ln에 담겠다 라는 메소드임(getParameter)
    String em = request.getParameter("email");
    String ji = request.getParameter("job_id");
    String hd = request.getParameter("hire_date");
    String[] hobbies = request.getParameterValues("hobby"); //read, run, cook
    for(String hobby : hobbies){
    	out.print("<li>" + hobby + "</li>");
    }
    
    Employee emp = new Employee();
    emp.setLastName(ln);
    emp.setEmail(em);
    emp.setJobId(ji);
    emp.setHireDate(hd);
    
    EmpDAO dao = new EmpDAO();
    dao.insertEmp(emp);
    
    List<String> list = dao.getNames(); //first_name 컬렉션
    for(String str : list){
    	out.print("<h3>firstName: " + str + "</h3>");
    }
    
  %>
  <h3>사용자 입력 아이디: </h3>
  <h3>사용자 입력 비번: </h3>
</body>
</html>