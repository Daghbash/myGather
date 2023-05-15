<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class GeographyLabController extends Controller
{
    public function index(): JsonResponse
    {
        $data = [
            'message' => 'Hello geography , JSON response!',
        ];

        return response()->json($data);
    }
}
