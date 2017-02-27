<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<meta name="description" content="">
<meta name="author" content="">
<title>|| Spencer's || Select Payment Mode</title>
<!--Fav Icon-->
<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico">
<!--Css-Files-->
<link href="css/bootstrap.css" rel="stylesheet" type="text/css">
<link href="css/font-awesome.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="css/all-pluggin-css.css" type="text/css"/>
<link href="css/style.css" rel="stylesheet" type="text/css">
</head>

<body>

    <!-- Navigation -->
    <div class="wrapper all_content_wrapper">
        <?php include 'header.php';?>
        <!-- Page Content -->
        <div id="page-content-wrapper">

          <div class="container headcontenor">
              <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#" tabindex="0">Home</a></li>
                <li class="breadcrumb-item"><a href="my_acount.php" tabindex="0">My Account</a></li>
                <li class="breadcrumb-item active">Select Payment Mode</li>
              </ol>
            </div>
              </div>
            <div class="container-fluid acount_container">
              <div class="headding my_acount">
                 <h1>Select Payment Mode</h1>
              </div>
                <div id="exTab1" class="tab_contents">
                  <ul class=" mobile_view">
                          <li class="active col-lg-3 col-sm-3">
                            <a href="#1a" data-toggle="tab" tabindex="0" aria-expanded="true">Debit/Credit Card</a>
                          </li>
                          <li class="col-lg-3 col-sm-3"><a href="#2a" data-toggle="tab" tabindex="0" aria-expanded="false">Wallet</a>
                          </li>
                          <li class="col-lg-3 col-sm-3"><a href="#3a" data-toggle="tab" tabindex="0" aria-expanded="false">Net Banking</a>
                          </li>
                          <li class="col-lg-3 col-sm-3"><a href="#4a" data-toggle="tab" tabindex="0" aria-expanded="false">Cash/Card on Delivery</a>
                          </li>
                    </ul>
                    </div>
                  </div>
                </div>
                       <div class="full_content_box cvv_main_box">
                      			<div class="tab-content clearfix">
                      			  <div class="tab-pane active" id="1a">
                                <div class="container">       
								<div class="cvv_main_box_1">
          
         <div class="add_card_form">
           <form>
             <div>
			 <div class="group number">
                   <input type="text"  maxlength="16" placeholder="Card Number" class="card_no">
                   <span>Please enter your Card Number</span>
              </div>
               
            </div>
            <div>
              <div class="group username">
                    <input type="text"  placeholder="Name on Card">
                    <span>Please enter your full name.</span>
               </div>
              <div class="clearfix"></div>
      <div class="select_box_content">
             
              <div class="select_box">
               <div id="device_top" class="wrapper-dropdown-3 month_dropdown" tabindex="1">
                   <span data-val="">Expiry Month</span>
                   <div class="dropdown">
                       <div class="cat-listing">
                           <ul>
                               <li><a href="#" data-val="01" tabindex="0">01</a></li>
                               <li><a href="#" data-val="02" tabindex="0">02</a></li>
                               <li><a href="#" data-val="03" tabindex="0">03</a></li>
                               <li><a href="#" data-val="04" tabindex="0">04</a></li>
                               <li><a href="#" data-val="05" tabindex="0">05</a></li>
                              <li><a href="#" data-val="06" tabindex="0">06</a></li>
                               <li><a href="#" data-val="07" tabindex="0">07</a></li>
                               <li><a href="#" data-val="08" tabindex="0">08</a></li>
                               <li><a href="#" data-val="09" tabindex="0">09</a></li>
                               <li><a href="#" data-val="10" tabindex="0">10</a></li>
                               <li><a href="#" data-val="11" tabindex="0">11</a></li>
                               <li><a href="#" data-val="12" tabindex="0">12</a></li>

                           </ul>
                       </div>
                   </div>
               </div>
           </div>

           <div class="select_box">
            <div id="deviceprice_top" class="wrapper-dropdown-3 year_dropdown" tabindex="1">
                <span data-val="">Expiry Year</span>
                <div class="dropdown">
                    <div class="cat-listing">
                        <ul>
                            <li><a href="#" data-val="2017" tabindex="0">2017</a></li>
                            <li><a href="#" data-val="2018" tabindex="0">2018</a></li>
                            <li><a href="#" data-val="2019" tabindex="0">2019</a></li>
                            <li><a href="#" data-val="2020" tabindex="0">2020</a></li>
                            <li><a href="#" data-val="2021" tabindex="0">2021</a></li>
                            <li><a href="#" data-val="2022" tabindex="0">2022</a></li>
                            <li><a href="#" data-val="2023" tabindex="0">2023</a></li>
                            <li><a href="#" data-val="2024" tabindex="0">2024</a></li>
                            <li><a href="#" data-val="2025" tabindex="0">2025</a></li>
                            <li><a href="#" data-val="2026" tabindex="0">2026</a></li>
                            <li><a href="#" data-val="2027" tabindex="0">2027</a></li>
                            <li><a href="#" data-val="2028" tabindex="0">2028</a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
              </div>
			  <div class="col-lg-12 no_padding">
			  <div class="col-lg-2 no_padding cvv_icon_left">
			  <div class="group cvvnumber">
                   <input type="text"  maxlength="3" placeholder="CCV" class="cvv_no">
                  <span>Please enter valid cvv number</span>
              </div>
			  </div>
			  <div class="col-lg-4 cvv_icon"><img src="images/cvv-icon.png"/><span>Last 3 digits printed on <br>the back of the card</span></div>
			  </div>
            </div>
              
			  <div class="cvv_checkbox">
               <label>
               <div class="checkbox-bg">
                <input class="input_class_checkbox check_input" style="display: none;" type="checkbox"><div class="class_checkbox"></div>
                Save this card for future transactions
                </div>
               </label>
                            
			  </div>
			  <div class="clearfix"></div>
              <button class="payment_card">Pay</button>

            </form>
           
            </div>
         </div>

                              </div>
                              </div>



                                <div class="clearfix"></div>


                      				<div class="tab-pane" id="2a">
                                <div class="container">
                               
                                </div>
                                <div class="clearfix"></div>
                             
                            </div>
                              <div class="tab-pane" id="3a">
                      
                            </div>
                                <div class="tab-pane" id="4a">
                            
                             
                      			</div>
                          </div>
                        </div>

          </div>

        <!-- /#page-content-wrapper -->
       <footer>
         <h2>Footer</h2>
       </footer>
    </div>
  </div>
  <div class="modal fade" id="popup1" role="dialog">

     <div class="modal-dialog">

       <!-- Modal content-->
       <div class="modal-content">
           <button type="button" class="close" data-dismiss="modal"></button>
           <img class="card_left" src="images/card_left.png">
         <div class="add_card_form">
           <form>
             <div>
               <div class="group username">
                    <input type="text"  placeholder="Cardholder's Name">
                    <span>Please enter your full name.</span>
               </div
            ></div>
            <div>
              <div class="group number">
                   <input type="text"  maxlength="16" placeholder="Card Number" class="card_no">
                   <span>Please enter your Card Number</span>
              </div>


              <div class="clearfix"></div>
      <div class="select_box_content">
              <label>Expiry Date</label>
              <div class="select_box">
               <div id="device_top" class="wrapper-dropdown-3 month_dropdown" tabindex="1">
                   <span data-val="">MM</span>
                   <div class="dropdown">
                       <div class="cat-listing">
                           <ul>
                               <li><a href="#" data-val="01" tabindex="0">01</a></li>
                               <li><a href="#" data-val="02" tabindex="0">02</a></li>
                               <li><a href="#" data-val="03" tabindex="0">03</a></li>
                               <li><a href="#" data-val="04" tabindex="0">04</a></li>
                               <li><a href="#" data-val="05" tabindex="0">05</a></li>
                              <li><a href="#" data-val="06" tabindex="0">06</a></li>
                               <li><a href="#" data-val="07" tabindex="0">07</a></li>
                               <li><a href="#" data-val="08" tabindex="0">08</a></li>
                               <li><a href="#" data-val="09" tabindex="0">09</a></li>
                               <li><a href="#" data-val="10" tabindex="0">10</a></li>
                               <li><a href="#" data-val="11" tabindex="0">11</a></li>
                               <li><a href="#" data-val="12" tabindex="0">12</a></li>

                           </ul>
                       </div>
                   </div>
               </div>
           </div>

           <div class="select_box">
            <div id="deviceprice_top" class="wrapper-dropdown-3 year_dropdown" tabindex="1">
                <span data-val="">YYYY</span>
                <div class="dropdown">
                    <div class="cat-listing">
                        <ul>
                            <li><a href="#" data-val="2017" tabindex="0">2017</a></li>
                            <li><a href="#" data-val="2018" tabindex="0">2018</a></li>
                            <li><a href="#" data-val="2019" tabindex="0">2019</a></li>
                            <li><a href="#" data-val="2020" tabindex="0">2020</a></li>
                            <li><a href="#" data-val="2021" tabindex="0">2021</a></li>
                            <li><a href="#" data-val="2022" tabindex="0">2022</a></li>
                            <li><a href="#" data-val="2023" tabindex="0">2023</a></li>
                            <li><a href="#" data-val="2024" tabindex="0">2024</a></li>
                            <li><a href="#" data-val="2025" tabindex="0">2025</a></li>
                            <li><a href="#" data-val="2026" tabindex="0">2026</a></li>
                            <li><a href="#" data-val="2027" tabindex="0">2027</a></li>
                            <li><a href="#" data-val="2028" tabindex="0">2028</a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
              </div>
            </div>
              <div class="clearfix"></div>
              <button class="save_card">Save</button>

            </form>
            <div class="card_img_popup">
              <div class="popup_card01">
             </div>
            <div class="popup_card02">
          </div>
          </div>
            </div>
         </div>
       </div>

     </div>


    <!-- /#wrapper -->

<!--Script-Files--> 
<script src="js/jquery-3.1.1.min.js"></script> 
<script src="js/bootstrap.min.js"></script> 
<!--Header-Search-->
<script src="js/all-pluggin.js"></script>
<!--Common-Function-Script--> 
<script src="js/common.js"></script>
</body>

</html>
