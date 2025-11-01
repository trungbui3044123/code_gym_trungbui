
import java.util.ArrayList;
import java.util.Arrays;

import USERMANAGER.USER;
import USERMANAGER.USERSERVICE;











public class APPLICATION {
// van de o cho la, arraylist khac nhau, va file content khasc nhau. may khogn the nhet vao chugn dc. 
//  private final static String fileName= "C:\\Users\\VMO\\OneDrive\\Desktop\\testjavafile\\customers-100.csv";

    public static void main(String[] args) {
      USER user1= new USER(01, "TRUNG BUI");
      USER user2= new USER(02, "CAM BUI");
      USER user3= new USER(03, "MEO BUI");
      USER user4= new USER(04, "DAU BUI");
      USER user5= new USER(05, "ME NGO");

      ArrayList<USER> listUser1= new ArrayList<>(Arrays.asList(
        user1,user2,user3
      ));
      USERSERVICE group1= new  USERSERVICE(listUser1);
      //       group1.showListUser();
      group1.addNew(user4);
      // group1.editUser(100, "BUI VAN TRUNG");
      // group1.deleteUser(01);
      group1.searchUserName("DAU BUI");

    //  String[] words = {"cat", "dog", "apple", "bat", "car"};
    //     for (int len = 1; len <= 10; len++) {
    //         System.out.print("Length " + len + ": ");
    //         for (int i = 0; i < words.length; i++) {
    //             if (words[i].length() == len) {
    //                 System.out.print(words[i] + " ");
    //             }
    //         }
    //         System.out.println();
    //     }

    //  int[] arr = {1, 2, 3, 4, 5, 6};
    //     for (int i = 0; i < arr.length; i++) {
    //         if (arr[i] % 2 == 0) {
    //             System.out.print(arr[i] + " ");
    //         }
    //     }   
}
}