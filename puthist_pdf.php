<?php 
  require('fpdf.php'); 

  $f = fopen('history.txt', 'r');

  $pdf = new FPDF();
  $pdf->AddPage();                        // Create PDF page
  $pdf->SetFont('Courier','B',14);        // Set bold Font
  $pdf->Cell(50, 8, 'History of Requests',0,1);  // put line to PDF page  
        $pdf->Cell(50, 8, '===============================================',0,1);  // put line to PDF page
  $pdf->SetFont('Courier','',14);         // Set regular Font
  while ( !feof($f) )       // while not end of history file
  {
      $line = fgets($f, 250);    // read history line, max length 250
      $pdf->Cell(50, 8, $line,0,1);   // put line to PDF page
  }  
        fclose($f);
  $pdf->Output();
?>