<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;

class PhysicsLabController extends Controller
{
    public function index(): JsonResponse
    {
        $data = [
            'message' => 'Hello physics lab, JSON response!',
        ];

        return response()->json($data);
    }
}
