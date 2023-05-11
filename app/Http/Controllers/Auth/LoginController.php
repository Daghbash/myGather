<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function showLoginForm(): View
    {
        return view('auth/login');
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            return redirect('/')
                ->with('message', 'You have Successfully logged in');
        }

        return redirect("login")->withErrors('Oops! You have entered invalid credentials');
    }

    public function logOut(): RedirectResponse
    {
        Auth::logout();

        return Redirect('login')->with('message', 'You have Successfully logged out');
    }
}
