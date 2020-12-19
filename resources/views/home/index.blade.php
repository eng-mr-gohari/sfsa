@extends('home._layout')
@section('title',__('home.title'))
@section('head')
    <link rel="stylesheet" href="{{asset('css/style_front.css')}}">
@endsection
@section('content')
    <div id="root">
        <div id="index"></div>
    </div>
@endsection
@section('scripts')
    <script>
        $("#nav-toggle").click(function () {
            if (!$("#navigation").hasClass("full-height")) {
                $("#navigation").addClass("full-height");
                $("#navigation").addClass("position-absolute");
                $("#navigation").removeClass("position-relative");
                $("#left-item").removeClass("z-index-99");
            } else {
                $("#navigation").addClass("position-relative");
                $("#left-item").addClass("z-index-99");
                $("#navigation").removeClass("position-absolute");
                $("#navigation").removeClass("full-height")
            }
        })
        // $(document).bind("contextmenu",function(e){
        //     return false;
        // });
        // document.addEventListener('contextmenu', function(e) {
        //     e.preventDefault();
        // });
        // $(document).keydown(function (event) {
        //     if (event.keyCode == 123) { // Prevent F12
        //         return false;
        //     } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I
        //         return false;
        //     }
        // });
    </script>
@endsection
