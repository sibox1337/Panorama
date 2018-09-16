<?php


require __DIR__ .'/db_connection.php';




class Panorama
{
	
	protected $db;
	
	
	public function __construct() {
		
		$this->db = DB();		
		
	}
	
	
	public function getGroups() {
		$query = $this->db->query('SELECT * FROM GRUP WHERE CHAR_LENGTH(IMEGR) > 2 ORDER BY ID_GR ASC ');
		$query->execute();
		$data = array();
		
		while($row = $query->fetch(PDO::FETCH_ASSOC)) {
			
		
		$data[] = mb_convert_encoding($row,'utf-8','windows-1251');
		
		}
		
	
	
	return json_encode(['groups' => $data]);
	
	}
	
	public function getItems($id) {
		
		$query = $this->db->query('SELECT * FROM ART WHERE GR_ART ='.$id.' AND CENA_ART > 0');
		$query->execute();
		$data = array();
		while($row = $query->fetch(PDO::FETCH_ASSOC)) {
			
			
			$data[] = mb_convert_encoding($row,'utf-8','windows-1251');
		}
		
		return json_encode(['items'	=> $data]);

		
	}
	
	
}