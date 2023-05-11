<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\BiologyLabController;
use App\Http\Controllers\GeographyLabController;
use App\Http\Controllers\MathLabController;
use App\Http\Controllers\PhysicsLabController;
use App\Http\Controllers\PsychologyLabController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::prefix('room/')->group(function () {
    Route::get('/kitchen', function () {
        return view('rooms/kitchen');
    })->name('home.kitchen');

    Route::get('/bedroom', function () {
        return view('rooms/bedroom');
    })->name('home.bedroom');

    Route::get('/living-room', function () {
        return view('rooms/livingRoom');
    })->name('home.livingRoom');

    Route::get('/dining-room', function () {
        return view('rooms/diningRoom');
    })->name('home.diningRoom');

    Route::get('/garage', function () {
        return view('rooms/garage');
    })->name('home.garage');

    Route::get('/balcony', function () {
        return view('rooms/balcony');
    })->name('home.balcony');
});

// Login/logout
Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login/post', [LoginController::class, 'login'])->name('login.post');
Route::get('/logout', [LoginController::class, 'logOut'])->name('logOut');

// Registration
Route::get('/register', [RegisterController::class, 'showRegistrationForm'])->name('register');
Route::post('/register/post', [RegisterController::class, 'register'])->name('register.post');

Route::middleware(['auth'])->group(function () {
    Route::get('/', function () {
        return view('home');
    })->name('pages.index');
    Route::get('/about', function () {
        return view('about');
    })->name('pages.about');

    Route::group(['prefix' => '/lab', 'as' => 'lab.'], function () {
        Route::get('/math', [MathLabController::class, 'index'])->name('math');
        Route::get('/physics', [PhysicsLabController::class, 'index'])->name('physics');
        Route::get('/psychology', [PsychologyLabController::class, 'index'])->name('psychology');
        Route::get('/biology', [BiologyLabController::class, 'index'])->name('biology');
        Route::get('/geography', [GeographyLabController::class, 'index'])->name('geography');
    });
});
