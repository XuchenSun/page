
/** 
 * @author:Xuchen
 * @className:LimaPreZoom
 * @JDK version 11
**/
package LimaPreZoom;

import Model.Object;
import View.FullView;
import Controller.Controller;

public class PreZoomLima {
	 public static void main(String[] args) {
		 
	      //get data from database
		  
	      Object model  = initilizeObj();
	 
	      //create a view and print information about the model which retrieve from database
	      FullView view = new FullView();
	 
	      Controller controller = new Controller(model, view);
	 
	     // controller.updateView();
	 
	      //set new data
	      controller.setObjName("triangle002");
	      controller.setObjId(002);
	      
	      controller.updateView();
     
	
	   
	 
	 
	 }
	 // initialize object in here 
	   private static Object initilizeObj(){
		   Object objects001 = new Object();
		   objects001.setObjName("triangle001");
		   objects001.setObjId(001);
	      return objects001;
	   }
	  
}
