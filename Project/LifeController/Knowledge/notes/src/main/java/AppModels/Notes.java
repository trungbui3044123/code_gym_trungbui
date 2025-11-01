package AppModels;


public class Notes {
    private int id;
    private String title;
    private String content;
    private int typeid;
    private String typeName;
	private String created;
	
	public void setId(int id) {
		this.id = id;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public void setTypeid(int typeid) {
		this.typeid = typeid;
	}
	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}
	public void setCreated(String created) {
		this.created = created;
	}

	public String getTypeName() {
		return typeName;
	}	
	public String getCreated() {
		return created;
	}
	public int getId() {
		return id;
	}
	public String getTitle() {
		return title;
	}
	public String getContent() {
		return content;
	}
	public int getTypeid() {
		return typeid;
	}
	public Notes(int id, String title, String content, int typeid,String typeName,String created) {
		this.id = id;
		this.title = title;
		this.content = content;
		this.typeid = typeid;
		this.typeName = typeName;
		this.created = created;
	}
	public Notes(String title, String content, int typeid,String typeName,String created) {
		this.title = title;
		this.content = content;
		this.typeid = typeid;
		this.typeName = typeName;
		this.created = created;

	}
	public Notes() {	}
    @Override
    public String toString(){
        return id+ ","+title+ ","+content+ ","+typeid+ ","+typeName+ ","+created;
    }
}
