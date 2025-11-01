package AppServlets;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.rmi.ServerException;
import java.util.List;

import com.google.gson.Gson;

import AppDAOs.NoteTypeDAO;
import AppModels.NoteType;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet(name = "NoteTypeServlet", urlPatterns = { "/notetypes", "/notetypes/add", "/notetypes/edit",
    "/notetypes/delete" })

public class NoteTypeServlet extends HttpServlet {
  NoteTypeDAO noteTypeDAO = new NoteTypeDAO();

  Gson gson = new Gson();

  class Result {
    String status;
    String message;
  }

  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    String path = req.getServletPath();
    switch (path) {
      case "/notetypes":
        listNoteTypes(req, resp);
        break;
      case "/notetypes/add":
        listNoteTypes(req, resp);
        break;

      default:
        resp.sendError(HttpServletResponse.SC_NOT_FOUND);
    }
  }

  @Override
  protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    String path = req.getServletPath();
    switch (path) {
      case "/notetypes/add":
        addNoteType(req, resp);
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
    Result result = new Result();
    try {
      int deleteId = Integer.parseInt(req.getParameter("id"));
      boolean isDelete = noteTypeDAO.deleteItem(deleteId);
      if (isDelete) {
        result.status = "Success";
        result.message = "New Note Type deleted";
      } else {
        result.status = "Error";
        result.message = "Delete  Note Type fails";
      }
      resp.getWriter().write(gson.toJson(result));
    } catch (Exception e) {
      System.err.print("Servlet doDelete Error:" + e.getMessage());
      resp.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "delete  NoteType error");
    }

  }

  // function
  private void listNoteTypes(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    req.setCharacterEncoding("UTF-8");
    resp.setCharacterEncoding("UTF-8");
    resp.setContentType("application/json");

    try (PrintWriter out = resp.getWriter()) {
      String idParam = req.getParameter("Id");
      String json;
      if (idParam != null && !idParam.isBlank()) {
        int id = Integer.parseInt(idParam);
        NoteType item = noteTypeDAO.getItem(id);
        json = gson.toJson(item);
      } else {
        List<NoteType> list = noteTypeDAO.getAll();
        json = gson.toJson(list);
      }
      out.print(json);
      out.flush();
    } catch (Exception e) {
      System.err.print("Servlet doGet Error:" + e.getMessage());
      resp.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "get List  NoteType error");
    }

  }

  private void addNoteType(HttpServletRequest req, HttpServletResponse resp) throws ServerException, IOException {
    req.setCharacterEncoding("UTF-8");
    resp.setCharacterEncoding("UTF-8");
    resp.setContentType("application/json");

    Result result = new Result();
    BufferedReader addTypeReq = req.getReader();
    try {
      NoteType newNoteType = gson.fromJson(addTypeReq, NoteType.class);
      System.out.println(newNoteType);
      boolean isAdded = noteTypeDAO.addItem(newNoteType);
      if (isAdded) {
        result.status = "Success";
        result.message = "New Note Type added";
      } else {
        result.status = "Error";
        result.message = "Add new Note Type fails";
      }
      resp.getWriter().write(gson.toJson(result));

    } catch (Exception e) {
      System.err.print("Servlet doPost Error:" + e.getMessage());
      resp.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "add  NoteType error");
    }

  }

}
