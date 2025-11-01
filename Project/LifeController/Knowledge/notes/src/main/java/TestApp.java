// import java.util.List;

// import AppDAOs.NoteDAO;
// import AppDAOs.NoteTypeDAO;
// import AppModels.NoteType;
// import AppModels.Notes;

import AppDAOs.NoteDAO;

public class TestApp {
    public static void main(String[] args) {
        NoteDAO noteDAO= new NoteDAO();
        String searchTitle="";
        int searchNoteType=3;
        String searchNoteDate="";

        System.out.print(noteDAO.deleteItem(3));

// Test NoteTypeDAO
        // NoteTypeDAO noteTypeDAO= new NoteTypeDAO();
        // NoteType newType= new NoteType("Jobs", "Note about Jobs");
        // // NoteType editType= new NoteType(10,"Jobs222", "Note about Jobs222");
        // // noteTypeDAO.deleteItem(10);
        // // noteTypeDAO.deleteItem(11);
        // // // noteTypeDAO.addItem(newType);
        // // // noteTypeDAO.editItem(editType);
        // //  List<NoteType> listType= noteTypeDAO.getAll();
        // //  listType.forEach(System.out::println);
        // NoteType type= noteTypeDAO.getItem(1);
        // // System.out.print(type);

// Test Note
        // NoteDAO noteDAO= new NoteDAO();
        // Notes note=new Notes("PMBOK", "Requirement changes management", type.getTypeId());
        // // noteDAO.addItem(note);
        // noteDAO.deleteItem(1);
        // List<Notes> listNote=noteDAO.getAll();
        // listNote.forEach(System.out::println);
    }
}
