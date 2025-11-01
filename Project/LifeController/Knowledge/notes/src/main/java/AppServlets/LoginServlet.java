package AppServlets;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;

import com.google.gson.Gson;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet(name = "LoginServlet",urlPatterns = "/login")
public class LoginServlet extends HttpServlet{
    class LoginRequest {
    String username;
    String password;
     }
    public class LoginResult {
        String status;
        String message ;
        
    }
    Gson gson=new Gson();
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("UTF-8");
        resp.setCharacterEncoding("UTF-8");

        resp.setContentType("application/json");
        LoginResult loginResult=new LoginResult();
        // String nameValue=req.getParameter("userName");
        // String passValue=req.getParameter("password");
        BufferedReader loginReq= req.getReader();
        LoginRequest loginRequest=gson.fromJson(loginReq, LoginRequest.class);

        if("TrungBui".equals(loginRequest.username)&& "TrungBui123".equals(loginRequest.password)){
            loginResult.status="Success";
            loginResult.message ="Logged-in";
        }else{
           loginResult.status="Error";
            loginResult.message ="Login fail"; 
        }
        try (PrintWriter out=resp.getWriter()) {
        String json=gson.toJson(loginResult);
        out.write(json);            
        } catch (Exception e) {
           System.err.println("LoginServlet error: "+e.getMessage());
        }

    }
}
