<?php
/**
 * Created by PhpStorm.
 * User: DREAM
 * Date: 12/15/2020
 * Time: 8:57 AM
 */
?>

<style>
  
  .head{
    padding : 30px;
    padding-top: 80px;
    color : var(--custom_green);
    font-size: 35pt;
  }

  .body{
    color : white;
    padding : 20px;
  }
  .but{
    padding : 20px;
    padding-bottom: 60px;
  }
  #bodyBack {
    background-image: url("assets/media/error/bg.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% ;
  }
</style>

<div class = "kt-container kt-container--fluid kt-align-center kt-container--fit" id = "bodyBack">
  <div class = "head">
    <h1>ERROR 404</h1>
  </div>


  <div class = "body">
    <h3>WE COULDN’T FIND THE PAGE
      <br>YOU ARE LOOKING FOR</h3>
  </div>
  <div class = "but">
    <a href = "<?=base_url()?>"><span class = "btn btn-md btn-signup"> Take me home</span></a>
  </div>
</div>