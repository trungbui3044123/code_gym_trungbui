package AppServlets;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import com.google.gson.Gson;

import AppDAOs.NoteDAO;
import AppModels.Notes;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


@WebServlet(name = "NoteServlet",urlPatterns = {"/notelist","/note/add","/note/edit","/note/delete"})
public class NoteServlet extends HttpServlet{
    NoteDAO noteDAO=new NoteDAO();
    Gson gson =new Gson();

  class Result {
    String status;
    String message;
  }
  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
      req.setCharacterEncoding("UTF-8");
      resp.setCharacterEncoding("UTF-8");
      resp.setContentType("application/json");
      String path=req.getServletPath();
      switch (path) {
        case "/notelist":
            listNotes(req,resp);    
            break;
      
        default:
           resp.sendError(HttpServletResponse.SC_NOT_FOUND);
      }
  }


  @Override
  protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
     req.setCharacterEncoding("UTF-8");
     resp.setCharacterEncoding("UTF-8");
     resp.setContentType("application/json");
     String path=req.getServletPath();
     switch (path) {
        case "/note/add":
            addNote(req,resp);
            break;
     
        case "/notelist":
            searchNotes(req,resp);
            break;
     
        default:
            resp.sendError(HttpServletResponse.SC_NOT_FOUND);
     }
  }

  @Override
  protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
     req.setCharacterEncoding("UTF-8");
      resp.setCharacterEncoding("UTF-8");
      resp.setContentType("application/json");
    deleteNote(req, resp);
    }
  
 
  @Override
  protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
      req.setCharacterEncoding("UTF-8");
      resp.setCharacterEncoding("UTF-8");
      resp.setContentType("application/json");  
      editNote(req, resp);
  }
 
  //   function
  private void listNotes(HttpServletRequest req,HttpServletResponse resp) throws ServletException, IOException {
    try (PrintWriter out=resp.getWriter()) {
        String idParam= req.getParameter("id");
        String json;
        if(idParam!=null&& !idParam.isBlank()){
            int id= Integer.parseInt(idParam);
            Notes note=noteDAO.getItem(id);
            json=gson.toJson(note);
        }else{
            List<Notes> listNote= noteDAO.getAll();
            json=gson.toJson(listNote);
        }
        out.print(json);
        out.flush();
    } catch (Exception e) {
      System.err.print("Servlet doGet Error:" + e.getMessage());
      resp.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "get List  Note error");
    }

  }

  private void addNote(HttpServletRequest req,HttpServletResponse resp) throws ServletException, IOException {
    Result result=new Result();
    try(BufferedReader inputNote=req.getReader()) {
        Notes newNote=gson.fromJson(inputNote, Notes.class);
        boolean isAdded= noteDAO.addItem(newNote);
        if(isAdded){
            result.status="Success";
            result.message="New Note added";
        }else{
             result.status="Error";
            result.message="Add new Note  fails";           
        }
        resp.getWriter().write(gson.toJson(result));
    } catch (Exception e) {
      System.err.print("Servlet doPost Error:" + e.getMessage());
      resp.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "add  Note error");
    }

  }

  public class SearchNote {
    public String  searchTitle;
    public int  searchNoteType;
    public String  searchNoteDate;
    
  }
  private void searchNotes(HttpServletRequest req,HttpServletResponse resp) throws ServletException, IOException {
    try (BufferedReader bfr=req.getReader();PrintWriter out=resp.getWriter()) {
      String json;
       SearchNote searchNote= gson.fromJson(bfr, SearchNote.class);
       List<Notes> listSearch=noteDAO.searchItem(searchNote.searchTitle, searchNote.searchNoteType, searchNote.searchNoteDate);
       if(listSearch==null){
        json=gson.toJson("");

       }else{
        json=gson.toJson(listSearch);
       }
        out.print(json);
        out.flush();
    }catch (Exception e) {
      System.err.print("Servlet searchNote Error:" + e.getMessage());
      resp.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "search  Note error");
    }
    

  }

  private void deleteNote(HttpServletRequest req,HttpServletResponse resp)throws ServletException, IOException{
    Result result=new Result();
    try (PrintWriter out=resp.getWriter()) {
      String idParam= req.getParameter("id");
      int id= Integer.parseInt(idParam);
      boolean isDelete=noteDAO.deleteItem(id);      
      if(isDelete){
        result.status="Success";
        result.message="Item deleted";

      }else{
        result.status="Error";
        result.message="Item delete fails";
      }
      out.write(gson.toJson(result));
    }catch (Exception e) {
      System.err.print("Servlet doGet Error:" + e.getMessage());
      resp.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "get List  Note error");
    }
  }

  private void editNote(HttpServletRequest req,HttpServletResponse resp)throws ServletException, IOException{
    
    try (BufferedReader bfr=req.getReader()) {
      Result result=new Result();
      Notes editNote=gson.fromJson(bfr, Notes.class);
      boolean isEdit= noteDAO.editItem(editNote);
      if(isEdit){
        result.status="Success";
        result.message="Item edited";

      }else{
        result.status="Error";
        result.message="Item edit fails";
      }
      resp.getWriter().write(gson.toJson(result));
    } catch (Exception e) {
      System.err.print("Servlet edit Note Error:" + e.getMessage());
      resp.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "edit  Note error");
    }
    
  }
}

  