package View;


import java.awt.Graphics;

import javax.swing.JComponent;
import javax.swing.JFrame;

class ddd extends JComponent {
  public void paint(Graphics g) {
    g.drawLine(20, 20, 200, 200);


  }
}

public class color {
  public static void main(String[] a) {
    JFrame window = new JFrame();
    window.setBounds(30, 30, 300, 300);
    window.getContentPane().add(new ddd());
    window.setVisible(true);
  }
}