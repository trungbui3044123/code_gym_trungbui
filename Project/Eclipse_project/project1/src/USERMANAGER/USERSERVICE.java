package USERMANAGER;

import java.util.ArrayList;

public class USERSERVICE {

    ArrayList<USER> listUser;

    public USERSERVICE(ArrayList<USER> listUser) {
        this.listUser = listUser;
        // FILECONNECT.createFile(listUser);
    }

    public ArrayList<USER> getListUser() {
        return listUser;
    }
// ktra user co ton tai hay ko? search ko the dung filter dc
    private boolean  checkUser(int idUser){
        for (USER user : listUser) {
            if(user.getId()==idUser){
                return true;
            }
        }        
        return false;     

    }
// find index 
    private int findIndex(int idUser){
        int notfound=-1;
        for (USER user : listUser) {
            if(user.getId()==idUser){
                return listUser.indexOf(user);
            }
        }        
        return notfound;          
    }    
//add user : ktra user da ton tai chua? ok thi add ko thi loi
    public void addNew(USER user){
       boolean isExist= this.checkUser(user.getId());
       if(isExist){
        System.out.println("User has already added before");
        return;
       }
       this.listUser.add(user);
        System.out.println("User has been added thanh cong");
    }
// edit User: ktra ton tai hay khong, co thi thay doi noi dung 
        public void editUser(int idUser,String newUserName){
            boolean isExist= this.checkUser(idUser);
            if(!isExist){ System.out.println("User nay khong ton tai");return;}
            int userIndex= this.findIndex(idUser);
            USER targetUser= this.listUser.get(userIndex);
            targetUser.setUsername(newUserName);
            System.out.println("User has been edit thanh cong");
        }
// delete User:
        public void deleteUser(int idUser){
            boolean isExist= this.checkUser(idUser);
            if(!isExist){ System.out.println("User nay khong ton tai");return;}
            int userIndex= this.findIndex(idUser);
            this.listUser.remove(userIndex);
             System.out.println("User has been xoa thanh cong");
        }
// getList user
        public void showListUser(){
            for (USER user : listUser) {
                System.out.println(user);
            }
        }
// searchUser
        public void searchUserName(String name){
            boolean isExist=false;
            for (USER user : listUser) {
               if(user.getUsername().toLowerCase().contains(name.toLowerCase())){
                 System.out.println("Found it!!! \n"+user);
                    isExist=true;
               }
            } 
            if(isExist==false){System.out.println("User not found");}
           
        }

}
