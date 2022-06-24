package co.edu.member;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class MemberDAO extends co.edu.DAO {

	// 전체조회 ()
	public List<MemberVO> memberList() {
		getConnect();
		List<MemberVO> list = new ArrayList();
		try {
			psmt = conn.prepareStatement("select * from member order by memb_no");
			rs = psmt.executeQuery(); // 조회: executeQuery / 추가, 수정, 삭제: executeUpdate
			while (rs.next()) { // rs의 데이터를 가져와서
				MemberVO mem = new MemberVO();
				mem.setMembNo(rs.getInt("memb_no"));
				mem.setMembName(rs.getString("memb_name"));
				mem.setMembPhone(rs.getString("memb_phone"));
				mem.setMembAddr(rs.getString("memb_addr"));
				mem.setMembBirth(rs.getString("memb_birth"));
				mem.setMembImage(rs.getString("memeb_image"));

				list.add(mem);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return list;
	}

	// 입력.(MemberVO)
	public MemberVO insertMember(MemberVO vo) {
		getConnect();
		String sql = "insert into member(memb_no, memb_name, memb_addr, memb_phone, memb_birth, memeb_image) values(?,?,?,?,?,?)";
		String seqSql = "select memb_seq.nextval from dual"; // 다음에 만들어질 순번이 얼마인지 seqSql쿼리를
		try {
			int nextSeq = 0;
			psmt = conn.prepareStatement(seqSql); // 시퀀스를 가져오기위한 쿼리를 실행하겠다.
			rs = psmt.executeQuery(); // 그 결과값을 rs에 담고
			if (rs.next()) {
				nextSeq = rs.getInt(1); // int타입으로 가지고 오겠다. 이번에 만들어진 시퀀스를!
			}

			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, nextSeq); // 시퀀스 정보를 가져와서 입력 처리?
			psmt.setString(2, vo.getMembName());
			psmt.setString(3, vo.getMembAddr());
			psmt.setString(4, vo.getMembPhone());
			psmt.setString(5, vo.getMembBirth());
			psmt.setString(6, vo.getMembImage());

			vo.setMembNo(nextSeq);

			int r = psmt.executeUpdate();
			System.out.println(r + "건 입력.");

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return vo;
	}

	// 수정.(MemberVO)
	public boolean updateMember(MemberVO vo) {
		getConnect();
		String sql = "update member " + "set    memb_name = ?, " + "       memb_addr = ?, " + "       memb_phone = ?, "
				+ "       memb_birth = ?, " + "       memeb_image = ? " + "where  memb_no = ?";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getMembName());
			psmt.setString(2, vo.getMembAddr());
			psmt.setString(3, vo.getMembPhone());
			psmt.setString(4, vo.getMembBirth());
			psmt.setString(5, vo.getMembImage());
			psmt.setInt(6, vo.getMembNo());

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

	// 삭제.(memb_no)
	public boolean deleteMember(int membNo) {
		getConnect();
		String sql = "delete from member where memb_no = ?";

		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, membNo);
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

	// 조건 조회 (memb_no)
	public MemberVO searchMember(int membNo) {
		getConnect();
		MemberVO mem = null;

		try {
			psmt = conn.prepareStatement("select * from member where memb_no = ?");
			rs = psmt.executeQuery(); // 조회: executeQuery / 추가, 수정, 삭제: executeUpdate
			while (rs.next()) { // rs의 데이터를 가져와서
				mem = new MemberVO();
				mem.setMembNo(rs.getInt("memb_no"));
				mem.setMembName(rs.getString("memb_name"));
				mem.setMembPhone(rs.getString("memb_phone"));
				mem.setMembAddr(rs.getString("memb_addr"));
				mem.setMembBirth(rs.getString("memb_birth"));
				mem.setMembImage(rs.getString("memb_image"));

			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return mem;
	}
}