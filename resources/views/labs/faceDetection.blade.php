@extends('layouts.main')

@section('content')
    <style>
        .face{
            position: absolute;
            border: 2px solid #009900;
        }
        #detect{
            margin-left: 15%;
            cursor: pointer;
        }
    </style>

{{--  jquery.facedetection.js  --}}
{{--    <div class="d-flex align-items-center justify-content-center">--}}
{{--        <img src="{{ asset('faces1.jpeg') }}" alt="" class="pic" width="50%">--}}
{{--        <h2 id="detect">Detect Face</h2>--}}
{{--    </div>--}}

{{--  face-api.js  --}}
    <h1>Face Recognition</h1>
    <div>
        <h2>Train Model</h2>
        <input type="file" id="trainImageInput">
        <button id="trainButton">Train</button>
    </div>
    <div>
        <h2>Recognize Face</h2>
        <input type="file" id="testImageInput">
        <button id="recognizeButton">Recognize</button>
        <h3 id="result">Result: </h3>
    </div>

@endsection

@push('js')
{{--    <script type="text/javascript" src="{{ asset('js/faceDetection/jquery.facedetection.js') }}"></script>--}}
    <script src="https://unpkg.com/@tensorflow/tfjs-core"></script>
    <script src="https://unpkg.com/@tensorflow/tfjs-converter"></script>
{{--    <script src="https://unpkg.com/face-api.js"></script>--}}
    <script src="https://unpkg.com/@vladmandic/face-api/dist/face-api.js"></script>
    <script type="text/JavaScript" src="{{ asset('js/faceDetection.js') }}"></script>
@endpush
