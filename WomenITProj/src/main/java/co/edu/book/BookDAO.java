package co.edu.book;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;


public class BookDAO extends DAO {

	// 전체조회
	public List<BookVO> bookList() {
		getConnect();
		List<BookVO> list = new ArrayList<>();
		try {
			psmt = conn.prepareStatement("select * from book order by book_code");
			rs = psmt.executeQuery(); 
			while (rs.next()) { 
				BookVO book = new BookVO();
				book.setBook_code(rs.getString("book_code"));
				book.setBook_name(rs.getString("book_name"));
				book.setBook_auth(rs.getString("book_Auth"));
				book.setBook_pres(rs.getString("book_Pres"));
				book.setBook_amt(rs.getString("book_Amt"));

				list.add(book);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return list;
	}

	// 입력
	public BookVO insertBook(BookVO vo) {
		getConnect();
		String sql = "insert into book(book_code, book_name, book_auth, book_pres, book_amt) values(?,?,?,?,?)";
		
		try {
			psmt = conn.prepareStatement(sql); 
			rs = psmt.executeQuery(); // 그 결과값을 rs에 담고
			
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getBook_code());
			psmt.setString(2, vo.getBook_name());
			psmt.setString(3, vo.getBook_auth());
			psmt.setString(4, vo.getBook_pres());
			psmt.setString(5, vo.getBook_amt());

			int r = psmt.executeUpdate();
			System.out.println(r + "건 입력.");

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return vo;
	}


	// 삭제
	public boolean deleteBook(String book_code) {
		getConnect();
		String sql = "delete from book where book_code = ?";

		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, book_code);
			int r = psmt.executeUpdate(); // 수정된 건 수를 반환
			if (r > 0) {
				return true;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return false;
	}
}

