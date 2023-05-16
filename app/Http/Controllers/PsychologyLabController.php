<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

class PsychologyLabController extends Controller
{
    public function index(): View
    {
        $data = [
            'message' => 'Hello Psychology lab, JSON response!',
        ];

        return view('labs.psychology', compact('data'));
    }
}
