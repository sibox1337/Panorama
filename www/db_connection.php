<?php

define('HOST','localhost');
	define('DATABASE','C:\xampp\htdocs\panoramas\DATAR.GDB');
	define('USER','SYSDBA');
	define('PASSWORD','masterkey');

function DB() {
	
	static $instance;
	
	if($instance === null) {
		$opt = array(
		PDO::ATTR_ERRMODE =>	PDO::ERRMODE_EXCEPTION,
		PDO::ATTR_DEFAULT_FETCH_MODE =>	PDO::FETCH_ASSOC,
		PDO::ATTR_EMULATE_PREPARES => FALSE,
		);
		$dsn='firebird:dbname='.DATABASE.'';
		$instance = new PDO($dsn,USER,PASSWORD,$opt);
	}
	return $instance;	
	}
	
	

	
	
	
	
