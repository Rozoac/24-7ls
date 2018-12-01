<?php

header('Content-type: application/json');

	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);

	$from_nombreEmpresa = $request->nombreEmpresa;
	$from_nit = $request->nit;
	$from_servicio = $request->servicio;
	$from_origen = $request->origen;
	$from_destino = $request->destino;
	$from_nombre = $request->nombre;
	$from_tel = $request->tel;
	$from_correo = $request->correo;
	$from_comentarios = $request->comentarios;
    $f_reg = date("Y-m-d");
    $h_reg = date("H:i");
    $comercial = 'jrozo@econtainers.co';
		


// 	    $sql = <<<SQL


// 		INSERT INTO  `econtain_24-7`.`landing-2019` (
// 		`id` ,
// 		`nit` ,
// 		`servicio` ,
// 		`origen` ,
// 		`destino` ,
// 		`nombre` ,
// 		`tel` ,
// 		`correo` ,
// 		`comentarios`,
// 		`hreg` ,
// 		`freg`
// 		)
// 		VALUES (
// 		NULL ,  '$from_nit',  '$from_servicio',  '$from_origen',  '$from_destino',  '$from_nombre','$from_tel','$from_correo',  '$from_comentarios', '$h_reg', '$f_reg'
// 		);


// SQL;

// $hostname = 'localhost';
//     $username = 'econtain_2018';
//     $password = 'guirova18';
//     $dbname = 'landing-2019';

//     mysql_connect($hostname, $username, $password) OR DIE('Unable to connect to database! Please try again later.');
//     mysql_select_db($dbname);
//      mysql_set_charset('utf8');
//     mysql_query($sql);

	
// }

// if ( trim($from_name!='') || trim($from_email!='') || trim($from_celular!='') ||  trim($from_para!='')){


    $email_from = "jrozo@econtainers.co";
		$email_to = "jrozo@econtainers.co ";
		$email_subject = "Nuevo Lead pagina web 24-7ls: ";



		$email_message = "Nuevo contacto:\n\n";
		$email_message .= "Nombre: " . $from_nombre . "\n\n";
		$email_message .= "Nombre Empresa: " . $from_nombreEmpresa . "\n\n";
		$email_message .= "NIT: " . $from_nit . "\n\n";
		$email_message .= "Servicio: " . $from_servicio . "\n\n";
		$email_message .= "Origen: " . $from_origen . "\n\n";
		$email_message .= "Destino: " . $from_destino . "\n\n";
		$email_message .= "Tel: " . $from_tel . "\n\n";
		$email_message .= "Correo: " . $from_correo . "\n\n";
		$email_message .= "Comentarios: " . $from_comentarios . "\n\n";



	//Ahora se envía el e-mail usando la función mail() de PHP
		$headers = 'From: '.$email_from."\r\n".
		'Reply-To: '.$email_from."\r\n" .
		'X-Mailer: PHP/' . phpversion();
		@mail($email_to, $email_subject, $email_message, $headers);


		// Correo enviado a lciente
    	//         $email_from2 = "E-Containers Colombia news@econtainerscolombia.com";
		// $email_to2 =  $from_email;
		// $email_subject2 = "Pronto estaremos en contacto";



		/*$email_message2 = "Pronto nuestro asesor\n\n";
		$email_message2 .= $foto_comercial . "\n";
		$email_message2 .= "se comunicara y le brindara la información necesaria.\n\n";*/

		// $email_message2 .= "<head><title></title></head><body><table><tr><td><img src='". $foto_comercial ."'></td></tr></table></body></html>";

		// Ahora se envía el e-mail usando la función mail() de PHP
		// $headers2 = 'MIME-Version: 1.0' . "\r\n";
		// $headers2.= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		// $headers2.= 'From: '.$email_from2."\r\n".
		// 'Reply-To: '.$email_from2."\r\n" .
		// 'X-Mailer: PHP/' . phpversion();

		// @mail($email_to2, $email_subject2, $email_message2, $headers2);




function StripHtml( $fStringData = NULL )
{
	if( is_null( $fStringData ) && "" != $fStringData ){
		return FALSE;
	}

	$fStringData = trim( $fStringData );

	//quita tags tipo sql y html
	$fStringData = strip_tags( $fStringData );
	$fStringData = str_replace( "from", "", $fStringData );
	$fStringData = str_replace( "FROM", "", $fStringData );
	$fStringData = str_replace( "database", "", $fStringData );
	$fStringData = str_replace( "DATABASE", "", $fStringData );
	$fStringData = str_replace( "select", "", $fStringData );
	$fStringData = str_replace( "SELECT", "", $fStringData );
	$fStringData = str_replace( "delete", "", $fStringData );
	$fStringData = str_replace( "DELETE", "", $fStringData );
	$fStringData = str_replace( "update", "", $fStringData );
	$fStringData = str_replace( "UPDATE", "", $fStringData );
	$fStringData = str_replace( "table", "", $fStringData );
	$fStringData = str_replace( "TABLE", "", $fStringData );
	$fStringData = str_replace( "insert", "", $fStringData );
	$fStringData = str_replace( "INSERT", "", $fStringData );
	$fStringData = str_replace( "drop", "", $fStringData );
	$fStringData = str_replace( "DROP", "", $fStringData );
	$fStringData = str_replace( "create", "", $fStringData );
	$fStringData = str_replace( "CREATE", "", $fStringData );
	$fStringData = str_replace( "truncate", "", $fStringData );
	$fStringData = str_replace( "TRUNCATE", "", $fStringData );
	$fStringData = str_replace( "alter", "", $fStringData );
	$fStringData = str_replace( "ALTER", "", $fStringData );
	$fStringData = str_replace( "';", "", $fStringData );
	$fStringData = str_replace( "' ;", "", $fStringData );

	$fStringData = str_replace( "php", "", $fStringData );
	$fStringData = str_replace( "PHP", "", $fStringData );
	$fStringData = str_replace( "cookies", "", $fStringData );
	$fStringData = str_replace( "COOKIES", "", $fStringData );
	$fStringData = str_replace( "HTTP", "", $fStringData );
	$fStringData = str_replace( "HTTPS", "", $fStringData );
	$fStringData = rawurldecode($fStringData);

	return $fStringData;
}
?>
