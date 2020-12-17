
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {



  public function __construct()
  {
    parent::__construct();
    $this->load->helper('url_helper');
    $this->load->library('session');
  }

  public function index()
	{
      $this->load->view('common/header_html');
      $this->load->view('common/header');
      $this->load->view('home');
      $this->load->view('common/footer_html');
      $this->load->view('common/footer');
	}
}