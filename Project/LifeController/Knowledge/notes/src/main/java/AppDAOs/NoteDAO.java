package AppDAOs;

import java.sql.Connection;

import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import AppModels.Notes;

// import java.sql.Connection;
// import java.sql.DriverManager;
// import java.sql.PreparedStatement;
// import java.sql.ResultSet;
// import java.sql.SQLException;
// import java.util.ArrayList;
// import java.util.List;

// import AppModels.Notes;

public class NoteDAO implements InterfaceDAO<Notes> {

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
    public List<Notes> getAll() {
       List<Notes> listNotes=new ArrayList<>();
       final String SQL="SELECT note.id,note.title,note.content,notetype.typename,note.created "+
                        "FROM note JOIN notetype ON note.typeid=notetype.typeid" ;
        try (Connection conn=conn();PreparedStatement pstm=conn.prepareStatement(SQL);ResultSet rs=pstm.executeQuery()) {
           while (rs.next()) {
             Notes note=new Notes();
             note.setId(rs.getInt("id"));
             note.setTitle(rs.getString("title"));
             note.setContent(rs.getString("content"));
             note.setTypeName(rs.getString("typename"));
             note.setCreated(rs.getString("created"));
             listNotes.add(note);
           } 
        }  catch (SQLException e) {
           System.err.print("DAO getAll  List<Notes> problem: "+ e.getMessage());
           return null;
        }
        return listNotes;
    }

    @Override
    public Notes getItem(int index) {
        final String SQL="SELECT note.id,note.title,note.content,notetype.typename,note.created "+
                        "FROM note JOIN notetype ON note.typeid=notetype.typeid "+
                        "WHERE note.id= ?" ;
        Notes note=new Notes();
        
        try (Connection conn=conn();PreparedStatement pstm=conn.prepareStatement(SQL)) {
            pstm.setInt(1, index);
            ResultSet rs=pstm.executeQuery();
            while (rs.next()) {
             note.setId(rs.getInt("id"));
             note.setTitle(rs.getString("title"));
             note.setContent(rs.getString("content"));
             note.setTypeName(rs.getString("typename"));
             note.setCreated(rs.getString("created"));
           } 
        }  catch (SQLException e) {
           System.err.print("DAO getItem  List<Notes> problem: "+ e.getMessage());
           return null;
        }
             return note;
                       
    }

    @Override
    public boolean addItem(Notes item) {
        final String SQL="INSERT INTO note(title,content,typeid,created) VALUES(?,?,?,?)";
        try (Connection conn=conn();PreparedStatement pstm=conn.prepareStatement(SQL)) {
          pstm.setString(1, item.getTitle());  
          pstm.setString(2, item.getContent());
          pstm.setInt(3, item.getTypeid());
          pstm.setString(4, item.getCreated());
          return pstm.executeUpdate()>0;  
        }  catch (SQLException e) {
           System.err.print("DAO getAll  List<Notes> problem: "+ e.getMessage());
           return false;
        }
    }

    @Override
    public boolean editItem(Notes item) {
        final String SQL="UPDATE note set title=?, content=?,typeid=?,created=?  WHERE id= ?";
        try (Connection conn=conn();PreparedStatement pstm=conn.prepareStatement(SQL)) {
          pstm.setString(1, item.getTitle());  
          pstm.setString(2, item.getContent());
          pstm.setInt(3, item.getTypeid());  
          pstm.setString(4, item.getCreated());
          pstm.setInt(5, item.getId());  
          return pstm.executeUpdate()>0;
        }  catch (SQLException e) {
           System.err.print("DAO Edit Notes problem: "+ e.getMessage());
           return false;
        }
    }

    @Override
    public boolean deleteItem(int index) {
        final String SQL="DELETE FROM note WHERE note.id= ?";
        try (Connection conn=conn();PreparedStatement pstm=conn.prepareStatement(SQL)) {
            pstm.setInt(1, index);
            return pstm.executeUpdate()>0;
        } catch (SQLException e) {
           System.err.print("DAO getAll  List<Notes> problem: "+ e.getMessage());
           return false;
        }
    }

    public List<Notes> searchItem(String searchTitle,int searchNoteType,String searchNoteDate){
      StringBuilder stb=new StringBuilder("SELECT note.id,note.title,note.content,note.typeid,notetype.typename,note.created FROM note JOIN notetype ON note.typeid=notetype.typeid ");
      List<Object> param=new ArrayList<>();
      List<Notes> listNotes= new ArrayList<>();

      if(!searchTitle.isBlank()){
         stb.append(" WHERE note.title ILIKE ? ");
         param.add(searchTitle);
      }
      if(searchNoteType>0){
         stb.append(" AND  note.typeid = ? ");
         param.add(searchNoteType);
      }
      if(!searchNoteDate.isBlank()){
         stb.append(" AND  note.created = ? ");
         param.add(searchNoteDate);
      }
      final String SQL= stb.toString();
      try (Connection conn=conn();PreparedStatement pstm=conn.prepareStatement(SQL)) {
         for (int i = 0; i < param.size(); i++) {
            pstm.setObject(i+1, param.get(i));
         }
         ResultSet rs=pstm.executeQuery();
          while (rs.next()) {
             Notes note=new Notes();
             note.setId(rs.getInt("id"));
             note.setTitle(rs.getString("title"));
             note.setContent(rs.getString("content"));
             note.setTypeName(rs.getString("typename"));
             note.setCreated(rs.getString("created"));
             listNotes.add(note);
           } 
      }  catch (SQLException e) {
           System.err.print("DAO getAll  List<Notes> problem: "+ e.getMessage());
           return null;
        }
        return listNotes;
    }
}
