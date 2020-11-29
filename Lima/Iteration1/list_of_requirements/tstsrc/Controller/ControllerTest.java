/**
 * @author:Xuchen 
 * 
 * @className:ControllerTest
 * @Attention: For test, I change some private variables into public in class Object, it should be private.
 * @description:Test the performance of 4 function for exchanging data,and print objects data by Viewer in controller.
 * @JUnitVersion:5 
 **/

package Controller;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import Model.Object;
import View.FullView;
class ControllerTest {
	
	
	
	
	/*
	 * test for Controller(objects,view)
	 */
	private Object model;
	private FullView view;



	
	 
	public void Controller(Object model, FullView view){
	this.model = model;
	this.view = view;
	}
	
	
	
	
	/*
	 * test for setObjName(String name)
	 */
	public void setObjName(String name){
		      model.setObjName(name);    
		   }
	

	

	
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@Test
	void testController() {
		Object model229 = null;
		
		FullView view229 = null;
		Controller(model229,view229);
		if(model==model229&&view==view229) {
			System.out.println("Controller(objects,view) works good");
		}
		
		else {
			System.out.println("Controller(objects,view)  has errors");
			
		}
	}

	@Test
	void testSetObjName() {
		Object K1=new Object();
		K1.objName="aGoodName";
		K1.setObjName("anotherGoodName");
		
		if(K1.objName=="anotherGoodName") {
			System.out.println("setObjName(objName) works good");
		}
		else {
			System.out.println("setObjName(objName)  has errors");
			
		}
	}

	@Test
	void testGetObjName() {
		Object K2=new Object();
		K2.objName="aGoodName";
		String ObjName=K2.getObjName();
		if(ObjName=="aGoodName") {
			System.out.println("getObjName() works good");
		}
		else {
			System.out.println("setObjName()  has errors");
			
		}
	
	}

	@Test
	void testSetObjId() {
		Object K3=new Object();
		K3.objId=952287;
		K3.setObjId(321);
		
		if(K3.objId==321) {
			System.out.println("setObjId(objId) works good");
		}
		else {
			System.out.println("setObjId(objId) has errors");
			
		}
	}

	@Test
	void testGetObjId() {
		Object K4=new Object();
		K4.objId=98756;
		int aNewObjId=K4.getobjId();
		if(aNewObjId==98756) {
			System.out.println("getobjId() works good");
		}
		else {
		
			System.out.println("getobjId()  has errors");
			
			
		}
	}



}
