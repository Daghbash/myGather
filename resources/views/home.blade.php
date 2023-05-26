@extends('layouts.main')

@section('content')
    <div class="text-center">
        <h3 class="text-secondary">Hi {{\Illuminate\Support\Facades\Auth::user()->name}}, this is gather main page.</h3>
        <h5>Please select lab door</h5>
    </div>

    <div class="h-100">
        <canvas id="canvas" style="background-color: #282d40"></canvas>
    </div>

@endsection
