
/** 
 * @author:Xuchen

 * @className:Controller
 * @JDK version 11
**/
package Controller;
import Model.Object;
import View.FullView;

public class Controller {
	private Object model;
	   private FullView view;
	 
	   public Controller(Object model, FullView view){
	      this.model = model;
	      this.view = view;
	   }
	 
	   public void setObjName(String name){
	      model.setObjName(name);    
	   }
	 
	   public String getObjName(){
	      return model.getObjName();    
	   }
	 
	   public void setObjId(int objId){
	      model.setObjId(objId);      
	   }
	 
	   public int getObjId(){
	      return model.getobjId();     
	   }
	 
	   public void updateView(){           
	      view.printObjDetails(model.getObjName(), model.getobjId());
	    
	     
	   }  
}
