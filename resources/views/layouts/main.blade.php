<!doctype html>
<html lang="en">
<head>
    @include('partials.scripts')
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <title>Gather</title>
    @include('partials.styles')
</head>
<body>

@include('partials.header')

<main id="container" class="">
    @yield('content')
</main>

@stack('js')

</body>
</html>
