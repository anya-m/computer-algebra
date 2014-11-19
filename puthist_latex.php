<?php 
$f = fopen('history.txt', 'r');
$flatex = fopen('history.tex', 'w');

fputs($flatex, "\documentclass{article}\n"); // head of latex file
fputs($flatex, "\begin{document}\n");

while ( !feof($f) ) // while not end of file
{
$line = fgets($f, 100); // read line, max length 100
fputs($flatex, $line);

}
fputs($flatex, "\n\end{document}\n"); // end of latex file

fclose($f);
fclose($flatex);
?>