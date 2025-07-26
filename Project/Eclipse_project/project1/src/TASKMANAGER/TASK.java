package TASKMANAGER;

import java.time.LocalDate;

public class TASK {
//         id: A unique identifier for the task
// description: A short description of the task
// status: The status of the task (todo, in-progress, done)
// createdAt: The date and time when the task was created
// updatedAt: The date and time when the task was last updated

    private int id;
    private String title;
    private String status;
    private String createdAt;
    private String updatedAt;
    private final  LocalDate createDate= LocalDate.now();
//

    public TASK(int id, String title) {
        this.id = id;
        this.title = title;
        this.createdAt=createDate.toString();
        this.status="TO DO";
    }
// 

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public String getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
    }


    @Override
    public  String toString(){
                   return id+"_TASK :"+title +". Status: "+status+ ". Created at: "+ createdAt+"\n";
    }

}
