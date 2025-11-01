package JAVANYUMON;

public class SUPPERHERO extends HERO {
    private  boolean isFlying;

    public SUPPERHERO(String name, int hp) {
        super(name, hp);
    }
    // fly
    public void fly(){
        this.isFlying=true;
        System.out.println("Bayying roi day!!");
    }
    @Override
    public void run(){
        this.isFlying=false;
        System.out.println(super.getName()+" Deo dc bay dau");
    }
}
