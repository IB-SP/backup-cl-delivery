<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<meta name="description" content="">
<meta name="author" content="">
<title>|| Spencer's || Share a Tip</title>
<!--Fav Icon-->
<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico">
<!--Css-Files-->
<link href="css/bootstrap.css" rel="stylesheet" type="text/css">
<link href="css/font-awesome.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="css/all-pluggin-css.css" type="text/css"/>
<link href="css/style.css" rel="stylesheet" type="text/css">
</head>

<body>
<div class="wrapper">
<!--Start-Header-->
<?php include 'header.php';?>
<!--End-Header-->

<!--Start-Breadcrumbs-->
<div class="container">
  <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a tabindex="0" href="no_page_found.php">Home</a></li>
        <li class="breadcrumb-item"><a tabindex="0" href="kitchen_landing.php">Spencer's Kitchen</a></li>
        <li class="breadcrumb-item active">Share a Tip</li>
      </ol>
    </div>
    </div>
  </div>
<!--End-Breadcrumbs--> 
  
<!--Start-Heading-Add-Photo-->
<div class="row expert_corner_banner_row">
<h1>Share a Tip</h1>
<div class="headding"><h1><a tabindex="0" href="kitchen_landing.php">Share a Tip</a></h1>
</div>
<div class="container"> 
    <div class=" col-lg-12 col-md-12 col-sm-12 no_padding">
     <div class="share_tip_add_img">
     <span class="share_tip_add_camera_icon"><span class="sprite_share_tip_create_recipe sprite_share_tip_create_recipe_1"></span></span>
      <input type="file" id="file1" class="browse_file">
     <span class="share_tip_add_photo_video_btn"><button onClick="openFileOption();return;" type="button" class="btn btn_add_photo_video">Add Photo / Video</button></span>
     <span class="share_tip_photo_video_msg">Make sure your stuff looks at its best with our <label><a href="#" class="myAnchor" data-toggle="tooltip" data-html="true" data-placement="bottom" data-original-title="<ul >
<li> Clean the lens.</li>
<li> Set the focus.</li>
<li> Don’t use the zoom.</li>
<li> Keep your camera steady.</li>
<li> Shoot from different perspectives.</li>
<li> Watch out for distracting backgrounds.</li>
<li> Take multiple shots.</li>
<li> Don’t over-process your photos.</li>
</ul>
">tips for photographing</a></label></span>
     </div>
    </div>
    </div>
    </div>  
<!--End-Heading-Add-Photo-->

<!--Start-Share-Tip-Form-->
<div class="container">
<form id="share_form" method="post" name="share_form" >
<div class="share_tip_form_main">

<div class="share_tip_form">
<span class="sprite_share_tip_create_recipe_2 share_tip_form_icon_1"></span>
<span class="share_tip_form_heading">Tip Title</span>
<span class="share_tip_form_input title_input">
  <input type="text" placeholder="What’s Your Tip About">
  <span class="title_name">Please enter title name</span>
</span>
</div>

<div class="share_tip_form">
<span class="sprite_share_tip_create_recipe_2 share_tip_form_icon_2"></span>
<span class="share_tip_form_heading">Tags</span>
<span class="share_tip_form_input"><input id="tags_3" class="tags" type="text" placeholder="Add Tags"></span>
</div>

<div class="share_tip_form">
<span class="sprite_share_tip_create_recipe_2 share_tip_form_icon_3"></span>
<span class="share_tip_form_heading">About Tip</span>
    <span class="share_tip_form_input"><textarea class="expand" placeholder="Write Something"></textarea></span>
</div>

<div class="share_tip_form">
<span class="sprite_share_tip_create_recipe_2 share_tip_form_add_photo" onClick="openFileOption2();return;"><input type="file" id="file2"></span>
</div>

<div class="share_tip_form_publish_button">
<span class="col-lg-6 col-md-6 col-sm-6 col-xs-7 text-right"><a href="share_tip_preview.php" class="btn btn-publish" tabindex="0">Preview Tip</a></span>
<span class="col-lg-6 col-md-6 col-sm-6 col-xs-5 text-left share_tip_form_publish_save_time">Autosaved at 5:36pm</span>
</div>
</div>
</form>
</div>
<!--End-Share-Tip-Form-->

</div>

<!--Start-Footer-->
<div class="footer_ajax"></div>
<!--End-Footer-->
  
<!--Script-Files--> 
<script src="js/jquery-3.1.1.min.js"></script> 
<script src="js/bootstrap.min.js"></script> 
<!--Header-Search-->
<script src="js/all-pluggin.js"></script>
<!--Common-Function-Script--> 
<script src="js/common.js"></script>
</body>
</html>
