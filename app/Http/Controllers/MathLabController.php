<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;

class MathLabController extends Controller
{
    public function index(): View
    {
        $data = [
            'message' =>
                'Hi ' .
                Auth::user()['name'] .
                ', You can delve into the world of mathematics to test your skills by working through exercises',
        ];

        return view('labs.math', compact('data'));
    }

    public function checkTest(Request $request)
    {

    }
}
