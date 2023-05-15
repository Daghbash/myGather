<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;

class MathLabController extends Controller
{
    public function index(): View
    {
        $data = [
            'message' => 'Hello Math lab, JSON response!',
        ];

        return view('labs.math', compact('data'));
    }
}
