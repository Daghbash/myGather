<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PsychologyLabController extends Controller
{
    public function index(): JsonResponse
    {
        $data = [
            'message' => 'Hello Psychology lab, JSON response!',
        ];

        return response()->json($data);
    }
}
