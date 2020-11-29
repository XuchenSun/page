

/**
 * @author:Xuchen 
 * 
 * @className:FullViewTest
 * @JUnitVersion:5
 * @description:Test for Canvas,serialVersionUID and some part of method printObjDetails(String objName, int objId) , they are good. 
 **/

package View;

import static org.junit.jupiter.api.Assertions.*;
import java.awt.Canvas;
import java.awt.Color;
import java.awt.FlowLayout;
import java.awt.Graphics;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JTextField;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

class FullViewTest {

	
	
	
	
	private static final long serialVersionUID = 1L;

	private Canvas canvas;	

   
    
	public void printObjDetails(String objName, int objId){
	      System.out.println("Object: ");
	      System.out.println("Object Name: " + objName);
	      System.out.println("Object ID: " + objId);

	      canvas = new Canvas();
	      canvas.setBounds(300, 100, 800, 550);
	      canvas.setBackground(Color.WHITE);
	      canvas.setVisible(true);

	     Graphics g = canvas.getGraphics();

  
	    
	      
		    JFrame SurfaceFrame = new JFrame("PreZoomLima");
	        JTextField textOperationSelect = new JTextField();
	        textOperationSelect.setBounds(200, 40,300, 40);
	       

	        JTextField textEditAttribute = new JTextField();
	        textEditAttribute.setBounds(1200, 40, 200, 100);

	        textEditAttribute.setText("Object Name "+objName+"  Object ID"+objId);
	        
	        JTextField textEditState = new JTextField();
	        textEditState.setBounds(1200, 500, 200, 100);
	        textEditState.setText("State Setting");
	        
	     
	        
	        
	        JButton StartButton = new JButton("Start");
	        StartButton.setBounds(50, 100, 100, 50);
	        StartButton.addActionListener(new ActionListener() {
	            public void actionPerformed(ActionEvent eStart) {
	            	textOperationSelect.setText("StartOperation");
	            	textOperationSelect.setBackground(Color.white);
	            }
	        });
	        
	        JButton OperationSelectButton = new JButton("OperationSelect");
	        OperationSelectButton.setBounds(30, 50, 140, 20);
	        
	        OperationSelectButton.addActionListener(new ActionListener() {
	            public void actionPerformed(ActionEvent eSelect) {
	            	textOperationSelect.setText("Please Select An Operation In Above");
	            	textOperationSelect.setBackground(Color.white);
	            }
	        });
	        
	        
	        
	        
	        JButton SaveButton = new JButton("Save");
	        SaveButton.setBounds(50, 200, 100, 50);
	        
	        SaveButton.addActionListener(new ActionListener() {
	            public void actionPerformed(ActionEvent eSave) {
	            	textOperationSelect.setText("SaveOperation");
	            	textOperationSelect.setBackground(Color.white);
	            }
	        });
	        
	        
	        
	        
	        JButton LoadButton = new JButton("Load");
	        LoadButton.setBounds(50, 300, 100, 50);
	        
	        LoadButton.addActionListener(new ActionListener() {
	            public void actionPerformed(ActionEvent eLoad) {
	            	textOperationSelect.setText("LoadOperation");
	            	textOperationSelect.setBackground(Color.white);
	            }
	        });
	        
     
	        
	        
	        JButton EditButton = new JButton("Edit");
	        EditButton.setBounds(50, 400, 100, 50);
	        
	        EditButton.addActionListener(new ActionListener() {
	            public void actionPerformed(ActionEvent eEdit) {
	            	textOperationSelect.setText("EditOperation");
	            	textOperationSelect.setBackground(Color.white);
	            }
	        });
	        
	               
	        
	        JButton PresentButton = new JButton("Present");
	        PresentButton.setBounds(50, 500, 100, 50);
	        
	        PresentButton.addActionListener(new ActionListener() {
	            public void actionPerformed(ActionEvent ePresent) {
	            	textOperationSelect.setText("PresentOperation");
	            	textOperationSelect.setBackground(Color.white);
	            }
	        });
	        JButton objButtonRect = new JButton("AddRect");
	        objButtonRect.setBounds(250, 700, 150, 50);
	        JButton objButtonLine = new JButton("AddLine");
	        objButtonLine.setBounds(100, 700, 150, 50);
	        JButton objButtonArc = new JButton("AddArc");
	        objButtonArc.setBounds(400, 700, 150, 50);
	        JButton objButtonOval = new JButton("AddOval");
	        objButtonOval.setBounds(550, 700, 150, 50);
	        JButton objButtonPolygon = new JButton("AddPolygon");
	        objButtonPolygon.setBounds(700, 700, 150, 50);
	        objButtonLine.addActionListener(new ActionListener() {
	            public void actionPerformed(ActionEvent eObj) {
	            	textOperationSelect.setText("AddTriangle");
	            	textOperationSelect.setBackground(Color.white);
	            }
	            
	          
	            
	            
	            
	        });
	        
	        	        
	       /*
	        * add button 
	        */
	      
	        SurfaceFrame.add(OperationSelectButton);
	        SurfaceFrame.add(StartButton);
	        SurfaceFrame.add(LoadButton);
	        SurfaceFrame.add(SaveButton);
	        SurfaceFrame.add(EditButton);
	        SurfaceFrame.add(objButtonLine);
	        SurfaceFrame.add(PresentButton);
	        SurfaceFrame.add(textOperationSelect);
	        SurfaceFrame.add(textEditAttribute);
	        SurfaceFrame.add(textEditState);
	        SurfaceFrame.add(canvas);
	        SurfaceFrame.add(objButtonRect);
	        SurfaceFrame.add(objButtonArc);
	        SurfaceFrame.add(objButtonPolygon);
	        SurfaceFrame.add(objButtonOval);
	   
	        
	        
	        SurfaceFrame.setSize(1600,800);
	        SurfaceFrame.setLocationRelativeTo(null);
	        SurfaceFrame.setLayout(null);  
	        SurfaceFrame.setVisible(true); }
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@Test
	void testPrintObjDetails() {
		String objName="an important object";
		int objId=23548247;
		printObjDetails(objName,objId);
		if(canvas!=null) {
			System.out.println("canvas is created");
		}
		if(serialVersionUID == 1L) {
			System.out.println("serialVersionUID is correct");
		}
	}



}
