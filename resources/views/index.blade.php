<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Laravel-Vue Boilerplate</title>

        <!-- Fonts -->

        <!-- Styles -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <link rel="stylesheet" href="css/common.css">
    </head>
    <body>
        <div class="container-fluid">

            <div class="row justify-content-center">
                <div class="col-12">
                    <h1>String Theory</h1>

                    <div id="app">
                        <div class="row">
                            <div class="col-12 control-container">
                                <scales-module></scales-module>
                            </div>
                            <div class="col-12 fretboard-container">
                                <mandolin-fretboard></mandolin-fretboard>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
        
        <script src="js/app.js"></script>
    </body>
</html>
