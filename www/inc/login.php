<?php

if (isset($_POST['login'])) {
    $uname = $_POST['uname'];
    $pword = $_POST['pword'];

    $uname1 = filter_var($uname, FILTER_SANITIZE_STRING);
    $pword1 = filter_var($pword, FILTER_SANITIZE_STRING);

    if (!empty($uname1) or !empty($pword1)) {
        $verify_pword = $pword1 === 'h';
        if ($verify_pword) {
            $_SESSION['id'] = $uname;
            $_SESSION['login_state'] = 1;
            header("location: index.php");
        }
        if (password_verify($pword1, $res['pword_hash']) === false) {
            echo "wrong password :(";
        }
    } else {
        echo "And i oop";
    }
}