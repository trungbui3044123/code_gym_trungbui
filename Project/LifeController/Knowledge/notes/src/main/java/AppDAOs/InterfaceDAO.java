package AppDAOs;

import java.sql.Connection;
import java.util.List;

public interface InterfaceDAO<T> {
    public final String CLASSNAME = "org.postgresql.Driver";
    public final String URL = "jdbc:postgresql://localhost:5432/SELFCONTROLLER";
    public final String USER = "postgres";
    public final String PASS = "123";

    public Connection conn();
    public List<T> getAll();
    public T getItem(int index);
    public boolean addItem(T item);
    public boolean editItem(T item);
    public boolean deleteItem(int index);

}
