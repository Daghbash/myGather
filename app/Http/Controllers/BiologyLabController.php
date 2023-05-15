<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BiologyLabController extends Controller
{
    public function index(): JsonResponse
    {
        $data = [
            'message' => 'Hello Biology lab, JSON response!',
        ];

        return response()->json($data);
    }
}
