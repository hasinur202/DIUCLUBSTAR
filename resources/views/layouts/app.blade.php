<!DOCTYPE html>

<html lang="en">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name') }}</title>
    <link rel="shortcut icon" type="image/png" href="images/fav.png"/>
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">

    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">

    </head>
    <body>

        <div id="app">
            <master></master>
        </div>


        @if (Auth::check())
        <script>
            var authUser = @JSON(Auth::user())
        </script>
        @else
        <script>
            var authUser = ''
        </script>
        @endif
        <script>
            var Base_Url ="{{ URL::to('/') }}"
        </script>
        <script src="{{ mix('/js/app.js') }}"></script>

    </body>
</html>
