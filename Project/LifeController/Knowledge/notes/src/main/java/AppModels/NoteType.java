package AppModels;

public class NoteType {
    private int typeId;
    private String typeName;
    private String typeDes;
	public int getTypeId() {
		return typeId;
	}
	public String getTypeName() {
		return typeName;
	}
	public String getTypeDes() {
		return typeDes;
	}
	public NoteType(int typeId, String typeName, String typeDes) {
		this.typeId = typeId;
		this.typeName = typeName;
		this.typeDes = typeDes;
	}
	public NoteType(String typeName, String typeDes) {
		this.typeName = typeName;
		this.typeDes = typeDes;
	}
	public NoteType() {	}
    @Override
    public String toString(){
        return typeId+ ","+typeName+ ","+typeDes;
    }
}
