<!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="x-ua-compatible" content="ie=edge">

  <title>DIU PRO-BOOK</title>

  <!-- Font Awesome Icons -->
  {{-- <link rel="stylesheet" href="{{asset ('css/all.css') }}"> --}}
  {{-- <!-- Theme style -->
  <link rel="stylesheet" href="{{asset ('css/adminlte.css') }}">
  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
  <!-- icheck bootstrap -->
  <link rel="stylesheet" href="{{asset ('css/icheck-bootstrap.min.css') }}">
  <!-- Google Font: Source Sans Pro -->
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet"> --}}
  <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body class="hold-transition sidebar-mini login-page register-page">

 
  
<!-- ./wrapper -->

<!-- REQUIRED SCRIPTS -->

<!-- jQuery -->
{{-- <script src="{{asset ('js/jquery.min.js') }}"></script>
<!-- Bootstrap 4 -->
<script src="{{asset ('js/bootstrap.bundle.min.js') }}"></script>
<!-- AdminLTE App -->
<script src="{{asset ('js/adminlte.min.js') }}"></script> --}}
<script>
  var Base_Url ="{{ URL::to('/') }}"
</script>
<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>    