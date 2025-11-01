package JAVANYUMON;

public class HERO {
    private String name;
    private int hp;
    // attack
    private final int lostHP=5;
    public HERO(String name, int hp) {
        this.name = name;
        this.hp = hp;
    }
    public void acttack(DEMON demon){

        System.out.println(this.name+" Danh day");
        demon.setHp(lostHP);
        System.out.println(" Danh no het 5HP roi");
    }
    // run
    public void run(){
        System.out.println(this.name+" Deo an duoc. Chay day");        
    }

    public String getName() {
        return name;
    }
}
