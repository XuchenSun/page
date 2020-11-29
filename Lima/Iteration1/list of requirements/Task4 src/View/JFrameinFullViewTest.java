package View;

import static org.junit.jupiter.api.Assertions.*;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JTextField;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

class JFrameJTextJButtonInFullViewTest extends JFrame{

	
	JFrame SurfaceFrame = new JFrame("PreZoomLima");
	
	JTextField textOperationSelect = new JTextField();
    JTextField textEditAttribute = new JTextField();
    JTextField textEditState = new JTextField();

    
    JButton StartButton = new JButton("Start");
    JButton OperationSelectButton = new JButton("OperationSelect");
    JButton SaveButton = new JButton("Save");
    JButton LoadButton = new JButton("Load");
    JButton EditButton = new JButton("Edit");
    JButton PresentButton = new JButton("Present");
    JButton objButtonRect = new JButton("AddRect");
    JButton objButtonLine = new JButton("AddLine");
    JButton objButtonArc = new JButton("AddArc");
    JButton objButtonOval = new JButton("AddOval");
    JButton objButtonPolygon = new JButton("AddPolygon");
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}


	@Test
	void testJFrame() {
		if(SurfaceFrame!=null){
			System.out.println("SurfaceFrame initialize sucessfully");
		}
		else {
			System.out.print("SurfaceFrame has errors");
			
		}
		
	}

	@Test
	void testJtextField() {
		if(textOperationSelect!=null&&textEditAttribute!=null&&textEditState!=null){
			
			System.out.println("JtextField:textEditState initialize sucessfully");
			System.out.println("JtextField:textOperationSelect initialize sucessfully");
			System.out.println("JtextField:textEditState initialize sucessfully");
	         }
		else {
			System.out.print("JtextField has errors");
			
		}
	}

	@Test
	void testJBotton() {
		if(StartButton!=null){
			
			System.out.println("JBotton:StartButton initialize sucessfully");
			
	         }
         if(OperationSelectButton!=null){
			
			System.out.println("JBotton:OperationSelectButton initialize sucessfully");
			
	         }
         if(SaveButton!=null){
 			
 			System.out.println("JBotton:SaveButton initialize sucessfully");
 			
 	         }
         if(LoadButton!=null){
 			
 			System.out.println("JBotton:LoadButton initialize sucessfully");
 			
 	         }
         if(EditButton!=null){
 			
 			System.out.println("JBotton:EditButtonn initialize sucessfully");
 			
 	         }
         if(PresentButton!=null){
 			
 			System.out.println("PresentButton initialize sucessfully");
 			
 	         }
         if(objButtonRect!=null){
 			
 			System.out.println("Add Object Button:objButtonRect initialize sucessfully");
 			
 	         }
         if(objButtonLine!=null){
 			
 			System.out.println("Add Object Button:objButtonLine initialize sucessfully");
 			
 	         }
         if(objButtonArc!=null){
 			
 			System.out.println("Add Object Button:objButtonArc initialize sucessfully");
 			
 	         }
         if(objButtonOval!=null){
  			
  			System.out.println("Add Object Button:objButtonOval initialize sucessfully");
  			
  	         }
         if(objButtonPolygon!=null){
  			
  			System.out.println("Add Object Button:objButtonPolygon initialize sucessfully");
  			
  	         }
         
		else {
			System.out.print("JtextField and JButton has errors");
			
		}
	}
	

	
	
	
	

}
