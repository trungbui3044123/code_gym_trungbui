package USERMANAGER;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

public class FILECONNECT {

    private static void writerFile(USER user, boolean isCreate, String fileName) {
        try (BufferedWriter bfw = new BufferedWriter(new FileWriter(fileName, isCreate))) {
            bfw.write(user.toString());
            bfw.newLine();
        } catch (IOException e) {
            System.err.println(e);
        }
    }

    public static void createFile(ArrayList<USER> listUser, String fileName) {

        File targetFile = new File(fileName);
        try {
            if (targetFile.createNewFile()) {
                System.out.println("File USERS.txt has been created");
                for (USER user : listUser) {
                    // writerFile(user, false);
                }
            } else {
                System.out.println("File USERS.txt has existed");

            }
        } catch (IOException e) {
            System.out.println(e);
        }
    }
//

    public static void readFile(String fileName) {
        try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println(e);
        }
    }

}
