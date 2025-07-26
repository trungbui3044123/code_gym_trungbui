package TASKMANAGER;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Scanner;

public class TASKSERVICE {
    private ArrayList<TASK> listTask;
    private  String listName;
    private  final  String fileName="C:\\Users\\VMO\\OneDrive\\Desktop\\testjavafile\\TASKManager\\TASKMANAGER.txt"; 
// CONSTRUCTOR
    public TASKSERVICE(String listName) {
        this.listName = listName;
        this.listTask=new ArrayList<>(); 
        this.fileCreate(this.listTask);
    }
// getter      
    public ArrayList<TASK> getListTask() {return this.listTask;
    }
    public String getListName() {return this.listName;
    }
// validate task
    private  int  validateTask(TASK task){
        for(int i=0;i<this.listTask.size();i++){
           if(this.listTask.get(i).getId()==task.getId()){
            return  i;// DA TON TAI KHONG THEM DUOC NUA, EDIT VA DELETE DC
           }            
        }
        return -1; // KHONG TON TAI THEM MOI DUOC. KHONG EDIT, DELETE DC
    }
// fileCreate
    private  void fileCreate(ArrayList<TASK> nlistTask){

        try {
            File newFile= new File(fileName);
            if(newFile.createNewFile()){
                try(FileWriter content= new FileWriter(fileName, false)){
                    content.write("Task manager: "+ this.getListName()+"\n");
                    for (TASK task : nlistTask) {
                        content.write("- "+task.toString()+"\n");
                    }

                    content.close();
                }
            }
        } catch (IOException e) { System.err.println("Ghi file thất bại: " + e.getMessage());
        }
    }
// FileHanderler  

    // addTask
    public void addTask(TASK task){
        if(this.validateTask(task)==-1){
            this.listTask.add(task);
             System.out.println("Task has been added successfully");
        }else{
            System.out.println("Task has already in the list");
        }

    }
    // editTask
    public void editTask(TASK task,String ntitle){
        int index= this.validateTask(task);
        if(index>-1){
            this.listTask.get(index).setTitle(ntitle);
            System.out.println("Task "+task.getId() +" has been update title"); 
        }else{
            System.out.println("Task not in the list.Can not edit"); 
        }

    }
    // deleteTask
    public void deleteTask(TASK task){
      int index=  this.validateTask(task);
      if(index>-1){
        this.listTask.remove(index);
        System.out.println("Task "+task.getId() +" has been delete"); 
      }else{
        System.err.println("Task not in the list. Can not delete");
      }
    }
    // doTask

    public void doTask(TASK task){
        int index= this.validateTask(task);
        try(Scanner scObject= new  Scanner(System.in);) {
         System.out.println("Input new status for "+task.getId()); 
        String status= scObject.nextLine();
        this.listTask.get(index).setStatus(status);
        scObject.close();
         System.out.println("Task "+task.getId() +" has been updated status");             
        } catch (Exception e) { System.err.println(e);
        }
        ArrayList<TASK> copy = new ArrayList<>();
        copy.addAll(this.listTask);
        this.fileCreate(copy);
    }

    public void showTask(String status){
        for (TASK task : this.listTask) {
            boolean isExist= task.getStatus().endsWith(status);
            if(isExist){
                System.err.println(task);
            }else{System.err.println("Dont have this status");
        }
    }
}
}