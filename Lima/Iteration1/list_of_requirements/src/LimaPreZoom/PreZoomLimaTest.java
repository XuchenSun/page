/**
 * @author:Xuchen 
 * 
 * @className:LimaPreZoomTest
 * 
 * @description:Test the main function in class LimaPreZoomTest
 * @JUnitVersion:5 
 **/
package LimaPreZoom;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import Model.Object;
import View.FullView;
import Controller.Controller;

class PreZoomLimaTest {


	
	
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@Test
	void testMain() {
		Object testObject771=new Object();
		testObject771.setObjId(771);
		testObject771.setObjName("Object771");
		FullView view1 = new FullView();
		Controller controller=new Controller(testObject771, view1);
		controller.updateView();
       
		if(testObject771.objId==771) {
			System.out.println("PreZoomLima main function works good");
		}
		else {
			System.out.println("PreZoomLima main function works good  has errors");
			
		
			
		}
		
	}

}
