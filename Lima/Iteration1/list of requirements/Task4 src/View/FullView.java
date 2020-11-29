
/** 
 * @author:Xuchen
 * @className:FullView
 * @JDK version 11
**/
package View;


import java.awt.Canvas;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.image.ImageObserver;

import javax.swing.JButton;
import javax.swing.JComponent;
import javax.swing.JFrame;
import javax.swing.JPanel;

import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JTextField;



public class FullView extends JFrame {

	public class drawLine2 extends JComponent {
		  public void paint(Graphics g) {
		    g.drawLine(500, 500, 200, 200);

		  }
		}
	
	public JButton printButtonA() {
		   JButton AttriEdit = new JButton("AttritEdit");
		   AttriEdit.setBounds(1100, 700, 150, 50);
	        return AttriEdit;
	   }
	public JButton printButtonS() {
		   JButton StateEdit = new JButton("StateEdit");
		   StateEdit.setBounds(900, 700, 150, 50);
	        return StateEdit;
	   }

	
	
	public void printObjDetails(String objName, int objId){
			      System.out.println("Object: ");
			      System.out.println("Object Name: " + objName);
			      System.out.println("Object ID: " + objId);
			      final long serialVersionUID = 1L;
			  	  Canvas canvas;
			      canvas = new Canvas();
			      canvas.setBounds(300, 100, 800, 550);
			      canvas.setBackground(Color.WHITE);
			      canvas.setVisible(true);

		      	Graphics g = canvas.getGraphics();
	
             
		//    
		 
		      
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

		        objButtonRect.addActionListener(new ActionListener() {
		            public void actionPerformed(ActionEvent addRect) {
				     g.drawRect(200, 200, 100, 100);
		            }
		        });
	      
		        JButton objButtonLine = new JButton("AddLine");
		        objButtonLine.setBounds(100, 700, 150, 50);
		        objButtonLine.addActionListener(new ActionListener() {
		            public void actionPerformed(ActionEvent addLine) {
				     g.drawLine(200, 200, 100, 100);
		            }
		        });
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
		        SurfaceFrame.add(printButtonA());
		        SurfaceFrame.add(printButtonS());
		        SurfaceFrame.getContentPane().add(new drawLine2());
		        
		       
		        
		        SurfaceFrame.setSize(1600,800);
		        SurfaceFrame.setLocationRelativeTo(null);
		        SurfaceFrame.setLayout(null);  
		        SurfaceFrame.setVisible(true); 
		        
		        
		 
		        
		        
		        
		        
		}
	   
	  
	   
}
