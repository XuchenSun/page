/** 
 * @author:Xuchen
 * @className:FullView
 * @JDK version 11
**/

package Model;

import java.awt.List;

public class Object {
	  
	
	
	
	/*
	 * Object Attributes 
	 */
	   public int objId;
	   public  String objName;
	   private int objType;
	   private int objAttrPositonX;
	   private int objAttrPositonY;
	   private int objAttrSize;
	   private int objAttrOrient;
	   private int objAttrOutlineColour;
	   private int objAttrThickness;
	   private int objAttrFillColour;
	   private int objAttrTextColour;
	   private int objAttrTextSize;
	   private int objAttrTextValue;
	   private boolean objAttrVisibility;
	
	   
	   
	   public int getobjId() {
	      return objId;
	   }
	   public void setObjId(int objId) {
	      this.objId = objId;
	   }
	   public String getObjName() {
	      return objName;
	   }
	   public void setObjName(String objName) {
	      this.objName = objName;
	   }
	   
	   /*
	    * object States
	    */
	  
	   private int objStateld;
	   private List objStateLoop;
	   public void objStateAdd(int objId) {
		  
	   }
	   public void objStateDelete(int objId) {
			  
	   }
	   public void objStateView(List objStateLoop) {
			  
	   }
	   
	   
}
