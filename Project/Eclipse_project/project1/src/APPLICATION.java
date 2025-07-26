
import TASKMANAGER.TASK;
import TASKMANAGER.TASKSERVICE;

public class APPLICATION {



    public static void main(String[] args) {
       TASK task1= new  TASK(01, "Nghe Nhac chill chil ty") ;
       TASK task2= new  TASK(02, "Xem bao cong") ;
       TASK task3= new  TASK(03, "DI NGU LOZ ME") ;
       TASK task4= new  TASK(04, "Di an sang") ;
       TASKSERVICE taskList1=new  TASKSERVICE("taskNgay_19/7");

       taskList1.addTask(task3); 
       taskList1.addTask(task4); 
       taskList1.addTask(task1); 
       taskList1.editTask(task4, "Di choi kurasiki");
       taskList1.deleteTask(task1);
       taskList1.doTask(task4);


        taskList1.showTask("DONE");
        // System.out.println(task3);
    //    task_19_7.addTask(task2) file no la 1 string file.write(vvvv)

       

    }

}
