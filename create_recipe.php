<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<meta name="description" content="">
<meta name="author" content="">
<title>|| Spencer's || Create Recipe</title>
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
        <li class="breadcrumb-item"><a class="myAnchor" tabindex="0" href="#">Home</a></li>
        <li class="breadcrumb-item"><a tabindex="0" href="kitchen_landing.php">Spencer's Kitchen</a></li>
        <li class="breadcrumb-item active">Create a Recipe</li>
      </ol>
    </div>    
  </div>
</div>
<!--End-Breadcrumbs--> 

<!--Start-Heading-Add-Photo-->
<div class="row expert_corner_banner_row">
  <h1>Create a Recipe</h1>
  <div class="headding">
   <h1><a tabindex="0" href="kitchen_landing.php">Create a Recipe</a></h1>
  </div>
  <div class="container">
    <div class=" col-lg-12 col-md-12 col-sm-12 no_padding">
      <div class="share_tip_add_img">
     <span class="share_tip_add_camera_icon"><img src="images/camera_icon.png" alt=""/></span>
      <input type="file" id="file1" class="browse_file">
     <span class="share_tip_add_photo_video_btn"><button onClick="openFileOption();return;" tabindex="0" type="button" class="btn btn_add_photo_video">Add Photo / Video</button></span>
     <span class="share_tip_photo_video_msg">Make sure your food looks at its best with our <label><a href="#" class="myAnchor" data-toggle="tooltip" data-html="true" data-placement="bottom" data-original-title="<ul >
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

<!--Start-Container-->
<div class="container"> 
  
  <!--Start-Create_Recipe-Form-->
  <div class="share_tip_form_main create_recipe_form">
    
 <div class="share_tip_form ">
      <div class="row">
		<div class="col-lg-12 col-xs-12 margin_bottom" >
		<div class="col-lg-05"><span class="sprite_share_tip_create_recipe_2 share_tip_form_icon_1"></span></div>
		<div class="col-lg-05-full"><span class="title_name_create">Please enter title name</span>
			<p class="heading">Recipe Title</p>
			 <div class="create_recipe_input_drop_down">
			 
           <input type="text" placeholder="Give your Recipe a Name" class="recipe_title">
	    
         
         
		</div>
		
		</div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 margin_bottom"> 
		<div class="col-lg-05-sub"><span class="sprite_share_tip_create_recipe_2 create_recipe_icon_1"></span></div>
		<div class="col-lg-05-full-sub">
			<p class="heading">Prep Time</p>
			 <div class="create_recipe_input_drop_down">
            <input type="text" class="prep_time" placeholder="0" maxlength="3">
	    <button tabindex="0" type="button" class="btn btn-default dropdown-toggle time_prep" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="interval">Min</span> <span class="caret"></span></button>
            <ul class="dropdown-menu dropdown-menu-right prep_time">
              <li><a class="myAnchor" tabindex="0" href="#">Hr</a></li>
              <li><a class="myAnchor" tabindex="0" href="#">Min</a></li>
              <li><a class="myAnchor" tabindex="0" href="#">Sec</a></li>
            </ul>
           
			<p class="valid_input">Please enter a valid input</p>
          </div>
		  
		</div>
		
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 margin_bottom"> 
		
		<div class="col-lg-05-sub"><span class="sprite_share_tip_create_recipe_2 create_recipe_icon_2"></span></div>
		<div class="col-lg-05-full-sub">
			<p class="heading">Cook  Time</p>
			 <div class="create_recipe_input_drop_down">
            <input type="text" class="cook_time" placeholder="0" maxlength="3">
	   
          <button tabindex="0" type="button" class="btn btn-default dropdown-toggle time_cook" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="interval">Min</span> <span class="caret"></span></button>
            <ul class="dropdown-menu dropdown-menu-right cook_time">
              <li><a class="myAnchor" tabindex="0" href="#">Hr</a></li>
              <li><a class="myAnchor" tabindex="0" href="#">Min</a></li>
              <li><a class="myAnchor" tabindex="0" href="#">Sec</a></li>
            </ul>
						<p class="valid_input">Please enter a valid input</p>
          </div>
		   
		</div>
				
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 margin_bottom">
		
		<div class="col-lg-05-sub"><span class="sprite_share_tip_create_recipe_2 create_recipe_icon_3"></span></div>
		<div class="col-lg-05-full-sub">
			<p class="heading">Serves</p>
			 <div class="create_recipe_input_drop_down">
            <input type="text" class="serves" placeholder="0" maxlength="3">
	   
            <p class="valid_input">Please enter a valid input</p>
          </div>
		 
		</div>
		
	
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6  margin_bottom">
		<div class="col-lg-05-sub"><span class="sprite_share_tip_create_recipe_2 create_recipe_icon_4"></span></div>
		<div class="col-lg-05-full-sub">
			<p class="heading">Veg / Non - Veg</p>
			 <div class="create_recipe_input_drop_down veg-nonveg">
			  <button tabindex="0" type="button" class="btn btn-default dropdown-toggle veg_nonveg_selected " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="interval pull-left">Select</span> <span class="caret pull-right"></span></button>
            <ul class="dropdown-menu dropdown-menu-right veg_nonveg_option">
<li><a class="myAnchor" tabindex="0" href="#">Non-Veg</a></li>
<li><a class="myAnchor" tabindex="0" href="#">Veg</a></li>
            </ul>
            
	   
           
          </div>
		</div>


		
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6  margin_bottom"> 
		<div class="col-lg-05-sub"><span class="sprite_share_tip_create_recipe_2 create_recipe_icon_5"></span></div>
		<div class="col-lg-05-full-sub">
			<p class="heading"> Cuisine</p>
			 <div class="create_recipe_input_drop_down cuisine">
 <button tabindex="0" type="button" class="btn btn-default dropdown-toggle cuisine_selected" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="interval pull-left">Select</span> <span class="caret pull-right"></span></button>
            <ul class="dropdown-menu dropdown-menu-right cuisine_option">
              
            
			  <li><a class="myAnchor" tabindex="0" href="#">Arabian Gulf</a></li>
 <li><a class="myAnchor" tabindex="0" href="#">Caribbean</a></li>
 <li><a class="myAnchor" tabindex="0" href="#">Chinese</a></li>
 <li><a class="myAnchor" tabindex="0" href="#">Indian</a></li>
 <li><a class="myAnchor" tabindex="0" href="#">Italian</a></li>
 <li><a class="myAnchor" tabindex="0" href="#">Mediterranean</a></li>
 <li><a class="myAnchor" tabindex="0" href="#">Mexican</a></li>
 <li><a class="myAnchor" tabindex="0" href="#">Moroccan</a></li>
 <li><a class="myAnchor" tabindex="0" href="#">Thai</a></li>
			
			  
            </ul>
	   
           
          </div>
		</div>
		
		
		
		
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6  margin_bottom">

		<div class="col-lg-05-sub"><span class="sprite_share_tip_create_recipe_2 share_tip_form_icon_2"></span></div>
		<div class="col-lg-05-full-sub">
			<p class="heading">Tags</p>
			 <div class="create_recipe_input_drop_down">
           <input id="tags_3" class="tags" type="text" placeholder="Add Tags">
	   
           
          </div>
		</div>

		
        </div>
		<div class="col-lg-12 col-xs-12">
		<div class="col-lg-05"><span class="sprite_share_tip_create_recipe_2 share_tip_form_icon_3"></span> </div>
		<div class="col-lg-05-full">
			<p class="heading">About Recipe</p>
			<span class="share_tip_form_input">
     <textarea class="expand" placeholder="Write Something"></textarea>
      </span>
		</div>
        </div>
      </div>
    </div>
    
    
    
    
  </div>
  <!--End-Create_Recipe-Form-->
  
  <div class="row creating_btn">
    <div class="col-lg-12">
      <div class="start_creating_button">
        <a href="#" class="myAnchor btn btn-create start-creating" tabindex="0">Start Creating</a>
      </div>
    </div>
  </div>
  
  <!--Start-Add-Ingredients-->
  <div class="add_ingredient_form_main">
    <h1>Ingredients</h1>
    <div class="row add_ingredient_form_field_heading">
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 add_ingredient_heading_text_1">Ingredient Name</div>
      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 add_ingredient_heading_text_2">Qty.</div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-1 add_ingredient_heading_text_2"></div>
    </div>
    <div class="row add_ingredient_form input-addIng tab_logic hide-recipe-div">
      <div class="add_ingredient addr0">
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 ingredient_input">
          <input type="text" placeholder="Add Ingredient"  class="add_ingre_val">
		  <p class="valid_input">Enter an ingredient name</p>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-5 ingredient_qty no_padding_right">
            
		    <div class="create_recipe_input_drop_down">
             <input type="text" class="qunatity_ingredient" maxlength="4" placeholder="0" name='ingredient_amount'>
	   
          <button type="button" class="btn btn-default dropdown-toggle ingred_drop" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="interval">g</span> <span class="caret"></span></button>
            <ul class='dropdown-menu dropdown-menu-right ingred_drop_items'><li><a class='myAnchor' href='#'>g</a></li><li><a class='myAnchor' href='#'>l</a></li><li><a class='myAnchor' href='#'>ml</a></li> <li><a class='myAnchor' href='#'>tbsp</a></li></ul>
						<p class="valid_input">Please enter a valid input</p>
          </div>
          </div>
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-1 ingredient_remove addIng-lastdiv no_padding "><span class="cross0 create_cross_icon create_close_btn"></span></div>
      </div>
      <div class="add_ingredient addr1" ></div>
    </div>
    <div class="row add_row_link hide-recipe-div">
      <div class="col-lg-12"><span class="add_row pull-left">+ Add Ingredients</span></div>
    </div>
  </div>
  <!--End-Add-Ingredients--> 
  
  <!--Start-Add-Method-->
  <div class="add_ingredient_form_main">
    <h1>Method</h1>
    <div class="optionBox">
      <div class="block add_step_form">
        <div class="add_step_form_left"><span class="add_step_form_heading">Step</span><span class="add_step_form_input">
          <input type="text" placeholder="Add Step" class="add_step" name="add_step_validate">
		
          </span>
		   <p class="valid_input" >Please enter a valid input</p>
		  </div>
        <span class=" remove"><span class="create_cross_icon create_close_btn"></span></span> 
		 
		<span class="add_step_form_add_photo" onClick="openFileOption2();return;">
        <input type="file" id="file2" class="browse_file">
        </span> </div>
      <div class="row add_row_step block">
        <div class="col-lg-12"><span class="add pull-left">+ Add Steps</span></div>
      </div>
    </div>
   <div class="share_tip_form_publish_button">
<span class="col-lg-6 col-md-6 col-sm-6 col-xs-7 text-right"><a class="btn btn-publish-button" href="preview_recipe.php">Preview Recipe</a></span>
<span class="col-lg-6 col-md-6 col-sm-6 col-xs-5 text-left share_tip_form_publish_save_time">Autosaved at 5:36pm</span>
</div>
  </div>
  <!--End-Add-Method--> 
  
</div>
<!--End-Container--> 

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
