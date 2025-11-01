package JAVANYUMON;

public class DEMON {
    private String name;
    private   int hp;

    public int getHp() {
        return hp;
    }

    public void setHp(int hp) {
        this.hp -= hp;
    }

    public String getName() {
        return name;
    }
}
