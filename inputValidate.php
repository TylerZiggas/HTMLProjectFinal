<?php

$userName = $PASSWORD = $repeatPassword = $firstName = $lastName = $address1 = $state =
$address2 = $city = $zip = $phone = $email = $gender = $marital = $birthday = "";
$userErr = $passErr = $verPassErr = $firstErr = $lastErr = $add1Err = $add2Err = $stateErr =
$cityErr = $zipErr = $phoneErr = $emailErr = $genderErr = $maritalErr = $birthdayErr = "";
$isValid = false;

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $isValid = true;
    $userName = clean_input($_POST["userName"]);
    		if (empty($username)) {
    			$userErr = "Username is required";
    			$isValid = false;
    		} else {
    			if (strlen($userName) > 50 || strlen($userName) < 6) {
    				$userErr = "Must be between 6 and 50 characters";
    				$isValid = false;
    			}
    		}

    $PASSWORD = clean_input($_POST["PASSWORD"]);
    $repeatPassword = clean_input($_POST["repeatPassword"]);
        if (empty($PASSWORD) || empty($repeatPassword)) {
        	    $passErr = "Password is required";
        	    $verPassErr = "Passwords must match";
        		$isValid = false;
        } else {
        	    if (!preg_match("/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,50}$/", $PASSWORD) || $repeatPassword != $PASSWORD) {
        			$passErr = "Must be between 8 and 50 characters, with at least 1 lowercase letter, 1 uppercase letter, 1 digit, and 1 special character";
        			$verPassErr = "Passwords must match";
        			$isValid = false;
        	    }
    }

    $firstName = clean_input($_POST["firstName"]);
    if (empty($firstName)) {
           $firstErr = "First name is required";
           $isValid = false;
    } else {
        	if (!preg_match("/^[a-zA-Z ]+$/", $firstName) || strlen($firstName) > 50) {
        		$firstErr = "Must be less than 50 characters with only letters and white space allowed";
        		$isValid = false;
        	}
    }

    $lastName = clean_input($_POST["lastName"]);
    if (empty($lastName)) {
           $lastErr = "Last name is required";
           $isValid = false;
    } else {
        	if (!preg_match("/^[a-zA-Z ]+$/", $lastName) || strlen($lastName) > 50) {
        		$lastErr = "Must be less than 50 characters with only letters and white space allowed";
        		$isValid = false;
        	}
    }

    $address1 = clean_input($_POST["address1"]);
    if (empty($address1)) {
           $add1Err = "Address is required";
           $isValid = false;
    } else {
            if (strlen($address1) > 100) {
            	$add1Err = "Must be less than 100 characters";
            	$isValid = false;
            }
    }

    $address2 = clean_input($_POST["address2"]);
    if (strlen($address2) > 100) {
            $add2Err = "Must be less than 100 characters";
            $isValid = false;
    }

    $city = clean_input($_POST["city"]);
    if (empty($city)) {
           $cityErr = "City is required";
           $isValid = false;
    } else {
            if (!preg_match("/^[a-zA-Z ]+$/", $city) || strlen($city) > 50) {
                 $cityErr = "City must be less than 50 characters";
                 $isValid = false;
            }
    }

    if (isset($_POST["state"])) {
            $state = clean_input($_POST["state"]);
            if (empty($_POST["state"])) {
                $stateErr = "State is required";
                $isValid = false;
            }
        } else {
            $genderErr = "Gender is required";
            $isValid = false;
        }

    $zip = $_POST["zip"];
    if (empty($zip)) {
          $zipErr = "Zip Code is required";
          $isValid = false;
    } else {
           if (!preg_match("/^\d{5}$/", $zip) &&  !preg_match("/^\d{5}-\d{4}$/", $zip)) {
               $zipErr = "Zip Code must be in XXXXX or XXXXX-XXXX format";
               $isValid = false;
           }
    }

    $phone = clean_input($_POST["phone"]);
    if (empty($phone)) {
         $phoneErr = "Phone Number is required";
         $isValid = false;
    } else {
           if (!preg_match("/^\d{3}-\d{4}$/", $phone) && !preg_match("/^\d{3}-\d{3}-\d{4}$/", $phone)) {
               $phoneErr = "Must be in XXX-XXXX or XXX-XXX-XXXX format";
               $isValid = false;
           }
    }

    $email = clean_input($_POST["email"]);
    if (empty($email)) {
        $emailErr = "Email is required";
        $isValid = false;
    } else {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "Invalid email format";
            $isValid = false;
        }
    }

    if (isset($_POST["gender"])) {
        $gender = clean_input($_POST["gender"]);
        if (empty($_POST["gender"])) {
            $genderErr = "Gender is required";
            $isValid = false;
        }
    } else {
        $genderErr = "Gender is required";
        $isValid = false;
    }

    if (isset($_POST["marital"])) {
        $marital = clean_input($_POST["marital"]);
        if (empty($_POST["marital"])) {
            $maritalErr = "Marital Status is required";
            $isValid = false;
        }
    } else {
        $maritalErr = "Marital Status is required";
        $isValid = false;
    }

    $birthday = $_POST['birthday'];
    if ($birthday) {
      $new_date = date('Y-m-d', strtotime($_POST['birthday']));
    } else {
       $birthdayErr = "Birthday is required";
       $isValid = false;
    }
}

function clean_input($data) {
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}

?>