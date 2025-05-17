<?php

  // PHP Mailer initialization on Post

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$error = '';
  if (isset($_POST["submit"])) {
      // requires
      require 'MailClass/Exception.php';
      require 'MailClass/PHPMailer.php';
      require 'MailClass/SMTP.php';

      // creating new mailer
      $mail = new PHPMailer(true);

      // credentials
      $mail->IsSMTP();
      $mail->Host = 'smtp.gmail.com';
      $mail->Port = '587';
      $mail->SMTPAuth = true;
      $mail->Username = 'mustafaalsdf@gmail.com';
      $mail->Password = 'ahmadkabachay';
      $mail->SMTPSecure = 'tls';

      // form body (note: add address to your name i.e Kashif Maqbool)
      $mail->From = $_POST['email'];
      $mail->FromName = $_POST['yourname'];
      $mail->AddAddress('mustafaalsdf@gmail.com', 'Kashif');
      $mail->WordWrap = 50;
      $mail->IsHTML(true);
      $mail->Subject = "inquiry - (" .$_POST['dropdown']. ") item";
      $mail->Body = "
      Name: " .$_POST['yourname']. "<br>
      Company: " .$_POST['companyname']. "<br>
      Email: " .$_POST['email']. " <br>
      Phone No: " .$_POST['number']. "<br>
      Product: " .$_POST['product']. "<br>
      Address: " .$_POST['address']. "<br>
      Message: " .$_POST['message'];
      if ($mail->Send()) {
          $error = '<span style="color: green"><b>Thank you for contacting us</b></span>';
      } else {
          $error = '<span style="color: red"><b>An Error occurred while sending your information.</b></span>';
      }
  }
?>


<!DOCTYPE html>
<html lang="en">
<head>
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Magoo International</title>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="main.css">
    <link rel="stylesheet" href="home.css">
    <script src="https://kit.fontawesome.com/b5abc29d16.js" crossorigin="anonymous"></script>
</head> 
<body>
    
  
    <nav id="desktopnav">
        
        <div class="logocont"><a class="log" href="index.php"> <img src="images/mago.png" alt=""> </a>
        <button class="navbtn"><img src="images/hamburger.png" alt=""></button></div>
         <ul class="navul collapse">
             <li class="crt"><a href="index.php" class="current hover-underline-animation">Home</a></li>
             <!-- <li><a href="#" class="hover-underline-animation">Shop</a></li> -->
             <li><a href="product.html" class="hover-underline-animation">Products</a></li>
             <li><a href="about.html" class="hover-underline-animation">About</a></li>
             <li><a href="#contact" class="hover-underline-animation">Contact</a></li>
         </ul>
     </nav>

    


     <section id="hero" data-aos="fade-right" >
            
      <h1 data-aos="fade-up">A Chemical Supply and Distribution Group Driven By Seasoned Professionals With Deep Industry Experience.
      </h1>

     </section>



     
       <section class="Text" >
        <h1 data-aos="fade-right">A Full service chemical supplier and distributor, providing efficient and cost-effective supply chain solutions</h1>
        <p class="txt" data-aos="fade-right">The core of what we do at mago is to provide supply chain solutions to our customers for chemicals, minerals and other raw materials. Service is central to what we offer as a chemical supplier and distributor to a wide range of industries and applications.
        </p>
       </section>
       















       <section id="sssc">

        <div class="sssc spm" data-aos="fade-up">
          <div class="head">
          <img src="images/spm.png" alt="">
          
        </div>
        <h1>SALES & PRODUCT MANAGEMENT</h1>
        <ul class="slist">
            <li>Dedicated team of highly experienced professionals administering entire distribution process from sourcing to sales and customer service</li>
            <li>Custom-tailored solutions designed to meet customer needs</li>
            <li>Efficient warehousing of chemicals based on customers' demand cycle</li>
          </ul>
        </div>

        <div class="sssc sc" data-aos="fade-up">
          <div class="head"><img src="images/src.png" alt="">
          
          </div>
          <h1>SOURCING</h1>
          <ul class="slist">
            <li>Full-time teams in four locations across pakistan</li>
            <li>Daily interaction with manufacturing partners</li>
            <li>Synergy across sales offices and sourcing offices</li>
            <li>Auditing of new manufacturing partners for quality and reliability</li>
          </ul>

        </div>

        <div class="sssc srqc" data-aos="fade-up">
          <div class="head"><img src="images/srqc.png" alt="">
          
        </div>
        <h1>SAFETY, REGULATORY & QUALITY CONTROL</h1>
          <ul class="slist">
            <li>Committed to compliance with NACD Responsible Distribution</li>
            <li>Dedicated managers ensure products meet all required standards</li>
            <li>Quality control system for all product samples</li>
            <li>Compliance with all international safety and regulatory requirements</li>
          </ul>
        </div>

        <div class="sssc cs" data-aos="fade-up">
          <div class="head"><img src="images/cs.png" alt="">
          
        </div>
        <h1>CUSTOMER SERVICE</h1>
          <ul class="slist">
            <li>Dedicated regional teams focused on servicing customer orders</li>
            <li>Unique solutions based on customers' logistical requirements</li>
            <li>Proactive communication of product and shipment information with customers</li>
          </ul>
        </div>

     

       </section>








       <section id="prd">
          <div class="prdcnt" data-aos="fade-right">
            <h1>Our Products</h1>
            <p>As an international importer, distributor and supplier of various commodity and specialty chemicals, mago Chemical Group has a strong ability to service manufacturers and distributors with products across dozens of industries. With decades of experience in sourcing reliable chemical supply chains, mago consistently finds steady and competitively priced sources for hundreds of commercial chemicals used.</p>
            <p>Our list of products is constantly growing and diversifying as we seek to provide our customers with value in as many avenues as possible. Our strong worldwide network establishes mago as a premier supplier for chemical products around the world.</p>
            <p>Mago's products include but are not limited to: acids, acrylates, alcohols, amines, glycols, oils, pigments, polymers, solvents, surfactants and other additives. mago always ensures our supply of products meet the highest standards in production, quality, safety and service.</p>
            <a href="products.html">View All</a>
          </div>
          <div class="prdimg" data-aos="fade-left"></div>
      </section>
      












     <section id="abt">
       <div class="abtcont">
       <div class="abtimg" data-aos="fade-right"></div>
       <div class="abttextcont" data-aos="fade-left"> 
       <h1>About Us</h1>
        <p>Mago international a family owned and operated company—is a global supplier, importer, and distributor of chemicals, and raw materials.</p>
        <p>
          Mago offers a variety of chemical products with diverse applications and uses, servicing a wide range of industries. We continuously diversify our product portfolio to meet the needs of the ever-evolving industries we serve. Since inception in 1992 our philosophy has been founded on the sourcing and development of competitive chemical supply originating from the Pacific Rim, with a strong emphasis on China, Taiwan, Korea, Japan, and Indonesia.</p>
          <a href="about.html">Learn More</a>
      </div>
    </div>
     </section>
     





<!-- <section id="cards">

    <h1 data-aos="fade-up">Our Products</h1>


<main class="page-content">
    <div class="card" data-aos="fade-up">
      <div class="content">
        <h2 class="title">Foaming Agents</h2>
        <p class="copy">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, adipisci illum quasi assumenda tempora neque.</p>
        <button class="btn"><a href="products.html">View All</a></button>
      </div>
    </div>
    <div class="card" data-aos="fade-up">
      <div class="content">
        <h2 class="title">PVC</h2>
        <p class="copy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero atque optio esse commodi placeat totam?</p>
        <button class="btn"><a href="products.html">View All</a></button>
      </div>
    </div>
    <div class="card" data-aos="fade-up">
      <div class="content">
        <h2 class="title">Synthetic Rubber</h2>
        <p class="copy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum accusamus, dolores fuga recusandae qui similique?</p>
        <button class="btn"><a href="products.html">View All</a></button>
      </div>
    </div>
    <div class="card" data-aos="fade-up">
      <div class="content">
        <h2 class="title">Natural Rubber</h2>
        <p class="copy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum accusamus, dolores fuga recusandae qui similique?</p>
        <button class="btn"><a href="products.html">View All</a></button>
      </div>
    </div>
  
    <div class="card" data-aos="fade-up">
      <div class="content">
        <h2 class="title">Stearate</h2>
        <p class="copy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum accusamus, dolores fuga recusandae qui similique?</p>
        <button class="btn"><a href="products.html">View All</a></button>
      </div>
    </div>
    
    <div class="card" data-aos="fade-up">
      <div class="content">
        <h2 class="title">PU</h2>
        <p class="copy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum accusamus, dolores fuga recusandae qui similique?</p>
        <button class="btn"><a href="products.html">View All</a></button>
      </div>
    </div>
  
    </main>
 </section> -->





<!-- <section id="prds">
    <h1>Explore Our Products</h1>
    <ul>
        <li>NBR</li>
        <li>SBR</li>
        <li>Latex</li>
        <li>Iso-Eva-Poly Catalyst</li>
        <li>MC</li>
        <li>Zinc Stearate</li>
        <li>Lead Stearate</li>
        <li>Tokusil</li>
        <li>PVC</li>
        <li>PVC-Resin</li>
        <li>DSP4</li>
    </ul>
    <a id="discover">View All</a>
</section> -->





<!-- 
<section id="maincontact">

    <ul class=" information">
            <li><h1>Contact Information</h1></li>
            <li><i class="fas fa-phone"></i>  <span>  03008402932</span>   </li>
            <li><i class="fas fa-envelope"></i><span>  magoint@yahoo.com </span>   </li>
            <li><i class=""></i>Office: ABC </li>
    </ul>
</section> -->

<!-- 
<section id="loc">
    <h1 data-aos="fade-up">Our Location</h1>
<div class="map">
    <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510.0501399104954!2d74.30022710249489!3d31.597669786012094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM1JzUyLjIiTiA3NMKwMTgnMDIuMCJF!5e0!3m2!1sen!2s!4v1593069715043!5m2!1sen!2s" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
</div>
</section> -->

<!-- <section id="loc">
<div class="location">
<h1 data-aos="fade-right">Our Location</h1>
</div>
<iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510.0501399104954!2d74.30022710249489!3d31.597669786012094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM1JzUyLjIiTiA3NMKwMTgnMDIuMCJF!5e0!3m2!1sen!2s!4v1593069715043!5m2!1sen!2s" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
</section>
 -->





 <section id="contact">
    <div class="contactimg"></div>
        
        <form class="form" data-aos="zoom-in" method="POST">
            <h1>CONTACT US</h1>       
            <input type="text" placeholder="Company name" name="companyname" required>
            <input type="text" placeholder="Your Name" name="yourname" required>    
            <select name="dropdown" class="select">
              <option value="supplier">Supplier</option>
              <option value="customer">Customer</option>
              <option value="job">Apply for a job</option>
            </select>
            <input type="email" placeholder="Email" style="display:inline" name="email" required>
            <input type="number" name="number" placeholder="Phone Number" required>
            <select name="product" class="select"> 
              <option value="Blowing agent">Blowing agent</option>
              <option value="DCP (DECUMYL PER OXIDE)">DCP (DECUMYL PER OXIDE)</option>
              <option value="EVA">EVA</option>
              <option value="Pigments">Pigments</option>
              <option value="Fillers">Fillers</option>
              <option value="Excellaters">Excellaters </option>
              <option value="antioxidant">antioxidant</option>
              <option value="POE">POE</option>
              <option value="Steric acid">Steric acid</option>
              <option value="carbon black">carbon black</option>
              <option value="Sulpher">Sulpher</option>
              <option value="PVC STABLIZER">PVC STABLIZER</option>
              <option value="Paraffin">Paraffin</option>
              <option value="Benzoic acid">Benzoic acid</option>
              <option value="TITANIUM">TITANIUM</option>
              <option value="Reclaim rubber">Reclaim rubber</option>
              <option value="Silicone">Silicone</option>
              <option value="Rubber">Rubber</option>
              <option value="Plasticizer">Plasticizer</option>
              <option value="plastic">plastic</option>
              <option value="Broza">Broza</option>
              <option value="Zinc oxide">Zinc oxide</option>
              <option value="Oxides categoty">Oxides categoty</option>
            </select>
            <input type="text" placeholder="Your Address" name="address" required>
            <input type="text" placeholder="Message" name="message" required>
            <?php echo $error ?>
            <button input-type="submit" class="btn" name="submit">Submit</button>
          </form>
   

</section>








<footer>
    <h1>MAGOO INTERNATIONAL</h1>
    <div>
      <ul class="f1">
        
        <li>Khashif Maqbool C.E.O</li>
        <li><i class="fas fa-phone"></i> 03008402932</li>
        <li><i class="fas fa-envelope"></i> magoo33@hotmail.com</li>
        
        

        <li>Furqan Kashif</li>
        <li><i class="fas fa-phone"></i> 03238498256</li>
        <li><i class="fas fa-envelope"></i>  furqank95@gmail.com</li>
        
        

        
        
    </ul>

    <ul class="f3">
      <li>Mustafa Kashif Sourcing Manager</li>
        <li><i class="fas fa-phone"></i> 03074024953</li>
        <li><i class="fas fa-envelope"></i> mustafaalsdf@gmail.com</li>

        

        <li>Maaz Kashif G.Manager</li>
        <li><i class="fas fa-phone"></i> 03364336527</li>
        <li><i class="fas fa-envelope"></i> magoint@yahoo.com</li>
    </ul>

    <ul class="f2">
        <li><h2>Pages</h2></li>
        <li><a href="about.html">About us</a></li>
        <li><a href="index.php#contact">Contact us</a></li>
        <li><a href="product.html">Products</a></li>
    </ul>

    
</div>
    <p>&copy; Copyright 2020</p>
</footer>




<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script src="main.js"></script>
<script>
    AOS.init();
</script>


</body>
</html>