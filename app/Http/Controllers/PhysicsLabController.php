<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;

class PhysicsLabController extends Controller
{
    public function index(): View
    {
        $data = [
            'message' => 'Hello Physics lab, JSON response!',
        ];

        return view('labs.math', compact('data'));
    }
}
