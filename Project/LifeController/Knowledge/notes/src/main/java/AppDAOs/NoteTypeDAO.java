package AppDAOs;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import AppModels.NoteType;

public class NoteTypeDAO implements InterfaceDAO<NoteType> {

	@Override
	public Connection conn() {
		try {
            Class.forName(InterfaceDAO.CLASSNAME);
            return DriverManager.getConnection(InterfaceDAO.URL, InterfaceDAO.USER, InterfaceDAO.PASS);
        } catch (Exception e) {
            System.err.print("Connection problem: "+ e.getMessage());
            return null;
        }
	}

	@Override
	public List<NoteType> getAll() {
		List<NoteType> listType= new ArrayList<>();
        final String SQL="SELECT typeId,typeName,typeDes FROM NoteType ORDER BY typeId ASC";
        try (Connection conn=conn(); PreparedStatement pstm=conn.prepareStatement(SQL);ResultSet rs=pstm.executeQuery()) {
            while (rs.next()) {
              int typeId= rs.getInt("typeId");
              String   typeName= rs.getString("typeName");
              String   typeDes= rs.getString("typeDes");
              listType.add(new NoteType(typeId, typeName, typeDes));
            }
        } catch (SQLException e) {
           System.err.print("DAO getAll listType problem: "+ e.getMessage());
        }
        return listType;
	}

	@Override
	public boolean addItem(NoteType newType) {
		final String SQL="INSERT INTO NoteType(typeName,typeDes) VALUES(?,?)";
        try (Connection conn=conn(); PreparedStatement pstm=conn.prepareStatement(SQL)) {
          pstm.setString(1, newType.getTypeName());
          pstm.setString(2, newType.getTypeDes());
          return pstm.executeUpdate()>0;  
        }  catch (SQLException e) {
           System.err.print("DAO addItem newType problem: "+ e.getMessage());
           return false;
        }
	}

	@Override
	public boolean editItem(NoteType editType) {
		final String SQL="UPDATE NoteType set typeName=?,typeDes=? WHERE typeId=? ";
       try (Connection conn=conn(); PreparedStatement pstm=conn.prepareStatement(SQL)) {
          pstm.setString(1, editType.getTypeName());
          pstm.setString(2, editType.getTypeDes());
          pstm.setInt(3, editType.getTypeId());
          return pstm.executeUpdate()>0;  
        }  catch (SQLException e) {
           System.err.print("DAO editItem newType problem: "+ e.getMessage());
           return false;
        } 
	}

	@Override
	public boolean deleteItem(int index) {
		final String SQL="DELETE FROM NoteType WHERE typeId=?";
        try (Connection conn=conn(); PreparedStatement pstm=conn.prepareStatement(SQL)) {
          pstm.setInt(1, index);  
          return pstm.executeUpdate()>0;  
        }  catch (SQLException e) {
           System.err.print("DAO deleteItem  problem: "+ e.getMessage());
           return false;
        }
	}

	@Override
	public NoteType getItem(int index) {
		final String SQL="SELECT typeId,typeName,typeDes FROM NoteType WHERE typeId=?";
        NoteType typeNote= null; 
        try (Connection conn=conn(); PreparedStatement pstm=conn.prepareStatement(SQL)) {
          pstm.setInt(1, index);  
          ResultSet rs=pstm.executeQuery();
          while (rs.next()) {
             int typeId= rs.getInt("typeId");
              String   typeName= rs.getString("typeName");
              String   typeDes= rs.getString("typeDes");
              typeNote=new NoteType(typeId, typeName, typeDes);
          }
        }catch (SQLException e) {
           System.err.print("DAO type  problem: "+ e.getMessage());
        }
        return typeNote;
	}

}
