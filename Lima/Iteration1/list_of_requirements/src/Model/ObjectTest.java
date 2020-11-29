
/**
 * @author:Xuchen 
 * 
 * @className:ObjectTest
 * @description:Test for four functions, they are good. 
 * @JUnitVersion:5
 **/
package Model;

import static org.junit.jupiter.api.Assertions.*;

import java.awt.List;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;




class ObjectTest {
	
	
	
	
	
	/*
	 * Object Attributes 
	 */
	   private int objId;
	   private String objName;
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

	
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@SuppressWarnings("null")
	@Test
	void testGetobjId() {
		int RandomObjId=5534321;
		objId=RandomObjId;
		int newId=getobjId();
		if(objId ==newId) {
			System.out.println("getObjId() works good");
			
			}
		else {
			System.out.print("getObjId() has errors");
			
		}
		
	}

	@Test
	void testSetObjId() {
		setObjId(213241654);
		if(objId==213241654) {
			System.out.println("setObjId() works good");
		
		}
		else {
			System.out.print("setObjId() has errors");
		
		}
	}

	@Test
	void testGetObjName() {
		String RandomObjName="An important Object";
		objName=RandomObjName;
		String newObjName=getObjName();
		if(objName ==newObjName) {
			System.out.println("getObjName() works good");
			objName=(String) null;
			}
		else {
			System.out.print("getObjName() has errors");
			objName=(String) null;
		}
	}

	@Test
	void testSetObjName() {
		setObjName("A classic object");
		if(objName=="A classic object") {
			System.out.println("setObjName(String objName) works good");
			objName=(String) null;
		}
		else {
			System.out.print("setObjName(String ObjName) has errors");
			objName=(String) null;
		}
	}

	

}
