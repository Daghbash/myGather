<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class GeographyLabController extends Controller
{
    public function index(): View
    {
        $data = [
            'message' => 'Hello Geography lab, JSON response!',
        ];

        return view('labs.math', compact('data'));
    }
}
