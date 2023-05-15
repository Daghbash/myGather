<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Laravolt\Avatar\Facade as Avatar;

class MathLabController extends Controller
{
    public function index(): JsonResponse
    {

        $avatar = Avatar::create('John Doe')->toBase64();

        $data = [
            'message' => 'Hello Math lab, JSON response!',
            'avatar'  => $avatar,
        ];


        return response()->json($data);
    }
}
