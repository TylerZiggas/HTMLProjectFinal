<!DOCTYPE html>
<?php
    include 'connectionInfo.php';
?>
<html lang="en">
<head>
    <?php define("title", "Umbrella Corporation Registration Page"); ?>
    <meta charset="utf-8" />
    <title><?php echo title; ?></title>
    <link href="./CSS/stylesheet.css" rel="stylesheet" type="text/css"/>
    <link href="./CSS/background.css" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="./js/registrationreq.js"></script>
</head>
<body onload="registerHandlers();">
    <?php
        include 'inputValidate.php';
    ?>
    <div class="navbar navbar-fixed-top">
        <img src="./IMG/topbarlogo.jpg"  align="left" width=50 height=50 alt="Umbrella Corporation ™"/>
        <a href="index.php">Home</a>
        <a class="current" href="registration.php">Registration</a>
        <a href="animation.php">Animation</a>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 sidenav">
        <div id="top">
            <br/>
            <h1><b>Register to Help Umbrella Today!</b></h1>
            <h2>Our Business Is Life Itself</h2>
        </div>
    </div>
    <form method="POST" id="form" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 sidenav">
        <div id="registration">
            <div id="userDiv">
                <label for="userName" class="identify-text">Username: *</label><br/>
                <input id="userName" type="text" name="userName" class="form-text" placeholder="WeLoveRaccoonCity" value="<?php echo $userName;?>"/><br/>
                <span id="userErr" class="help-block hide">Username must be between 6 and 50 characters.</span>
            </div>
            <div id="passDiv">
                <label for="PASSWORD" class="identify-text">Password: *</label><br/>
                <input id="PASSWORD" type="PASSWORD" name="PASSWORD" class="form-text" placeholder="ABC123$d" value="<?php echo $PASSWORD;?>"/><br/>
                 <span id="passErr" class="help-block hide">Passwords must be between 8-50 characters and require
                                    a capital letter, a lowercase letter, a digit, and a special character.</span>
            </div>
            <div id="verPassDiv">
                <label for="repeatPassword" class="identify-text">Repeat Password:  *</label><br/>
                <input id="repeatPassword" type="password" name="repeatPassword" class="form-text" placeholder="ABC123$d" value="<?php echo $repeatPassword;?>"/><br/>
                 <span id="verPassErr" class="help-block hide">The two passwords do not match, please re-enter both.</span>
            </div>
            <div id ="firstDiv">
                <label for="firstName" class="identify-text">First Name:  *</label><br/>
                <input id="firstName" type="text" name="firstName" class="form-text" placeholder="Leon" value="<?php echo $firstName;?>"/><br/>
                <span id="firstErr" class="help-block hide">First name must be less than 51 characters.</span>
            </div>
            <div id="lastDiv">
                <label for="lastName" class="identify-text">Last Name:  *</label><br/>
                <input id="lastName" type="text" name="lastName" class="form-text" placeholder="Kennedy" value="<?php echo $lastName;?>"/><br/>
                <span id="lastErr" class="help-block hide">Last name must be less than 51 characters.</span>
            </div>
            <div id="add1Div">
                <label for="address1" class="identify-text">Address Line 1:  *</label><br/>
                <input id="address1" type="text" name="address1" class="form-text" placeholder="123 Arklay Drive" value="<?php echo $address1;?>"/><br/>
                <span id="add1Err" class="help-block hide">Addresses must be less than 101 characters.</span>
            </div>
            <div id="add2Div">
                <label for="address2" class="identify-text">Address Line 2:</label><br/>
                <input id="address2" type="text" name="address2" class="form-text" placeholder="(Optional)" value="<?php echo $address2;?>"/><br/>
                <span id="add2Err" class="help-block hide">OPTIONAL: Addresses must be less than 101 characters.</span>
            </div>
            <div id="cityDiv">
                <label for="city" class="identify-text">City:  *</label><br/>
                <input id="city" type="text" name="city" class="form-text" placeholder="Raccoon City" value="<?php echo $city;?>"/><br/>
                <span id="cityErr" class="help-block hide">City must be less than 51 characters.</span>
            </div>
            <div id="stateDiv">
                <label for="state">State:  *</label><br/>
                <select id="state" name="state"/>
                    <option value="AL" <?php if ($state == "AL") {echo "selected";}?>>Alabama</option>
                    <option value="AK" <?php if ($state == "AK") {echo "selected";}?>>Alaska</option>
                    <option value="AZ" <?php if ($state == "AZ") {echo "selected";}?>>Arizona</option>
                    <option value="AR" <?php if ($state == "AR") {echo "selected";}?>>Arkansas</option>
                    <option value="CA" <?php if ($state == "CA") {echo "selected";}?>>California</option>
                    <option value="CO" <?php if ($state == "CO") {echo "selected";}?>>Colorado</option>
                    <option value="CT" <?php if ($state == "CT") {echo "selected";}?>>Connecticut</option>
                    <option value="DE" <?php if ($state == "DE") {echo "selected";}?>>Delaware</option>
                    <option value="FL" <?php if ($state == "FL") {echo "selected";}?>>Florida</option>
                    <option value="GA" <?php if ($state == "GA") {echo "selected";}?>>Georgia</option>
                    <option value="HI" <?php if ($state == "HI") {echo "selected";}?>>Hawaii</option>
                    <option value="ID" <?php if ($state == "ID") {echo "selected";}?>>Idaho</option>
                    <option value="IL" <?php if ($state == "IL") {echo "selected";}?>>Illinois</option>
                    <option value="IN" <?php if ($state == "IN") {echo "selected";}?>>Indiana</option>
                    <option value="IA" <?php if ($state == "IA") {echo "selected";}?>>Iowa</option>
                    <option value="KS" <?php if ($state == "KS") {echo "selected";}?>>Kansas</option>
                    <option value="KY" <?php if ($state == "KY") {echo "selected";}?>>Kentucky</option>
                    <option value="LA" <?php if ($state == "LA") {echo "selected";}?>>Louisiana</option>
                    <option value="ME" <?php if ($state == "ME") {echo "selected";}?>>Maine</option>
                    <option value="MD" <?php if ($state == "MD") {echo "selected";}?>>Maryland</option>
                    <option value="MA" <?php if ($state == "MA") {echo "selected";}?>>Massachusetts</option>
                    <option value="MI" <?php if ($state == "MI") {echo "selected";}?>>Michigan</option>
                    <option value="MN" <?php if ($state == "MN") {echo "selected";}?>>Minnesota</option>
                    <option value="MS" <?php if ($state == "MS") {echo "selected";}?>>Mississippi</option>
                    <option value="MO" <?php if ($state == "MO") {echo "selected";}?>>Missouri</option>
                    <option value="MT" <?php if ($state == "MT") {echo "selected";}?>>Montana</option>
                    <option value="NE" <?php if ($state == "NE") {echo "selected";}?>>Nebraska</option>
                    <option value="NV" <?php if ($state == "NV") {echo "selected";}?>>Nevada</option>
                    <option value="NH" <?php if ($state == "NH") {echo "selected";}?>>New Hampshire</option>
                    <option value="NJ" <?php if ($state == "NJ") {echo "selected";}?>>New Jersey</option>
                    <option value="NM" <?php if ($state == "NM") {echo "selected";}?>>New Mexico</option>
                    <option value="NY" <?php if ($state == "NY") {echo "selected";}?>>New York</option>
                    <option value="NC" <?php if ($state == "NC") {echo "selected";}?>>North Carolina</option>
                    <option value="ND" <?php if ($state == "ND") {echo "selected";}?>>North Dakota</option>
                    <option value="OH" <?php if ($state == "OH") {echo "selected";}?>>Ohio</option>
                    <option value="OK" <?php if ($state == "OK") {echo "selected";}?>>Oklahoma</option>
                    <option value="OR" <?php if ($state == "OR") {echo "selected";}?>>Oregon</option>
                    <option value="PA" <?php if ($state == "PA") {echo "selected";}?>>Pennsylvania</option>
                    <option value="RI" <?php if ($state == "RI") {echo "selected";}?>>Rhode Island</option>
                    <option value="SC" <?php if ($state == "SC") {echo "selected";}?>>South Carolina</option>
                    <option value="SD" <?php if ($state == "SD") {echo "selected";}?>>South Dakota</option>
                    <option value="TN" <?php if ($state == "TN") {echo "selected";}?>>Tennessee</option>
                    <option value="TX" <?php if ($state == "TX") {echo "selected";}?>>Texas</option>
                    <option value="UT" <?php if ($state == "UT") {echo "selected";}?>>Utah</option>
                    <option value="VT" <?php if ($state == "VT") {echo "selected";}?>>Vermont</option>
                    <option value="VA" <?php if ($state == "VA") {echo "selected";}?>>Virginia</option>
                    <option value="WA" <?php if ($state == "WA") {echo "selected";}?>>Washington</option>
                    <option value="WV" <?php if ($state == "WV") {echo "selected";}?>>West Virginia</option>
                    <option value="WI" <?php if ($state == "WI") {echo "selected";}?>>Wisconsin</option>
                    <option value="WY" <?php if ($state == "WY") {echo "selected";}?>>Wyoming</option>
            </select><br/>
            </div>
            <div id="zipDiv">
                <label for="zip" class="identify-text">Zip Code:  *</label><br/>
                <input id="zip" type="text" name="zip" class="form-text" placeholder="73110" onblur="formatZip(this);" value="<?php echo $zip;?>"/><br/>
                <span id="zipErr" class="help-block hide">Zip Code must be either 5 or 9 digits.</span>
            </div>
            <div id="phoneDiv">
                <label for="phone" class="identify-text">Phone Number:  *</label><br/>
                <input id="phone" type="text" name="phone" class="form-text" placeholder="314-955-3233" onblur="formatPhone(this);" value="<?php echo $phone;?>"/><br/>
                <span id="phoneErr" class="help-block hide" >Phone number must be either 7 or 10 digits.</span>
            </div>
            <div id="emailDiv">
                <label for="email" class="identify-text">Email:  *</label><br/>
                <input id="email" type="text" name="email" class="form-text" placeholder="KennedyLeon@gmail.com" value="<?php echo $email;?>"/><br/>
                <span id="emailErr" class="help-block hide">Emails must following the format user@host.com</span>
            </div>
            <div id="genderDiv">
                <label for="male" id="gender">Gender:  *</label><br/>
                <input type="radio" name="gender" id="male" value="male" <?php if ($gender=="male") {echo "checked";}?>/><label for="male">Male</label>
                <input type="radio" name="gender" id="female" value="female" <?php if ($gender=="female") {echo "checked";}?>/><label for="female">Female</label><br/>
                <input type="radio" name="gender" id="other" value="other" <?php if ($gender=="other") {echo "checked";}?>/><label for="other">Other</label><br/>
                <span id="genderErr" class="help-block hide">Please select a gender.</span>
            </div>
            <div id="maritalDiv">
                <label for="single" id="marital">Martial Status:  *</label><br/>
                <input type="radio" name="marital" id="single" value="single" <?php if ($marital=="single") {echo "checked";}?>/><label for="single">Single</label>
                <input type="radio" name="marital" id="married" value="married" <?php if ($marital=="married") {echo "checked";}?>/><label for="married">Married</label><br/>
                <input type="radio" name="marital" id="widowed" value="widowed" <?php if ($marital=="widowed") {echo "checked";}?>/><label for="widowed">Widowed</label>
                <input type="radio" name="marital" id="divorced" value="divorced" <?php if ($marital=="divorced") {echo "checked";}?>/><label for="divorced">Divorced</label><br/>
                <span id="maritalErr" class="help-block hide">Please select a martial status.</span>
            </div>
            <div id="birthDiv">
                <label for="birthday">Date of Birth:  *</label><br/>
                <input id="birthday" type="date" name="birthday"  value="<?php echo $birthday;?>"/><br/>
                <span id="birthdayErr" class="help-block hide">Please select your date of birth.</span><br/><br/>
            </div>
            <button type="submit" name="submit" value="Submit" >Register</button>
            <button type="reset" name="reset" value="Reset" >Reset</button>
            <span id="submitErr" class="help-block hide">Please fill out the * Required Fields</span>
        </div>
    </div>
    </form>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 sidenav">
        <div id="bottom">
            <a href="https://twitter.com/RE_Games" target="_blank" title="RE_Games" style="color:gainsboro">Twitter</a><br/><br/>
            <a href="https://www.youtube.com/user/ResidentEvil" target="_blank" title="ResidentEvil" style="color:gainsboro">Youtube</a><br/><br/>
            <a href="https://www.instagram.com/re_games/" target="_blank" title="re_games" style="color:gainsboro">Instagram</a><br/><br/>
            <a href="https://www.capcom.com/us/" target="_blank" title="capcom" style="color:gainsboro">Capcom</a><br/><br/>
            <a href="https://www.evilresource.com/resident-evil-2-remake/files/guide-pamphlet" target="_blank" title="Pamphlet" style="color:gainsboro">Synopsis</a><br/><br/>
            <a href="https://residentevil.fandom.com/wiki/Raccoon_City" target="_blank" title="Wiki" style="color:gainsboro">Raccoon Citys History</a>
            <img align="right" width=34% height=34% src="./IMG/bottomlogo.png" alt="Umbrella Corporation ™"/><br/>
        </div>
    </div>
    <?php
       include 'insertValidData.php';
    ?>
</body>
</html>