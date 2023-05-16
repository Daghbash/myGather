<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

class BiologyLabController extends Controller
{
    public function index(): View
    {
        $data = [
            'message' => 'Hello Biology lab, JSON response!',
        ];

        return view('labs.biology', compact('data'));
    }
}
