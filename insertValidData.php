<?php
    if ($isValid) {
    try {
            $conn = new PDO("mysql:host=$servername;dbname=$dbname",
                            $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = $conn->prepare("INSERT INTO registration (userName, PASSWORD, firstName, lastName, address1, address2,
            city, state, zipCode, phone, email, gender, maritalStatus, dateOfBirth)
            VALUES (:name, :pass, :firstName, :lastName, :address1, :address2, :city,
            :state, :zip, :phone, :email, :gender, :marital, :birthday)");

            $sql->bindParam(':name', $userName);
            $sql->bindParam(':pass', $PASSWORD);
            $sql->bindParam(':firstName', $firstName);
            $sql->bindParam(':lastName', $lastName);
            $sql->bindParam(':address1', $address1);
            $sql->bindParam(':address2', $address2);
            $sql->bindParam(':city', $city);
            $sql->bindParam(':state', $state);
            $sql->bindParam(':zip', $zip);
            $sql->bindParam(':phone', $phone);
            $sql->bindParam(':email', $email);
            $sql->bindParam(':gender', $gender);
            $sql->bindParam(':marital', $marital);
            $sql->bindParam(':birthday', $birthday);

            $sql->execute();

            $last_id = $conn->lastInsertId();
            $_SESSION["last_id"] = "$last_id";

            header("Location: confirmation.php");
        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        } finally {
            $conn = null;
        }
    }

?>