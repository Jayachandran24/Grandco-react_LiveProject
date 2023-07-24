<?php    
    
    // $MAILID = 'jayachandran@grinfotech.com';
    // $PASSWORD = 'Bgt56yhN@';
    // $HOST = 'mail.grinfotech.com';
    // $PORT =465 ;
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: *");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "test";

    if(!empty($_POST)){
    $conn = new mysqli ($servername, $username, $password, $dbname);
    if ($conn->connect_error){
       die("connection failed " .$conn->connect_error);
    }
    else {
        $contactus = [];
        if($_POST['name'] == 'all'){
            $query = "SELECT * FROM `grandco` GROUP By `name`";
            $query_result = mysqli_query($conn, $query);
            // echo ($query);
            // exit;
            $i = 0;
            if (mysqli_num_rows($query_result) > 0) {
                while($row = mysqli_fetch_assoc($query_result)){
                    $contactus_form = [];
                    $contactus_form['id'] = $i++;
                    $contactus_form['name'] = $row['name'];
                    $contactus[] = $contactus_form;   
                }
            }
        }


        $data['status'] = "ok";
        $data['message'] = "Success";
        $data['result'] = $contactus;
        
    }
    }else {
        die();
    }
    echo json_encode($data);
?>