<?php
	echo "<body>";
	echo "<br/>������� ��������.<br/><pre><code>";
	$res = file_get_contents('history.txt');
	echo $res;
	echo "</code></pre></body>";
?>