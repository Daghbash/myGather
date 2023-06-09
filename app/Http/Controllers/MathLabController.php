<?php

namespace App\Http\Controllers;

use App\Models\MathTest;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MathLabController extends Controller
{
    public function index(): View
    {
        $data = [
            'message' =>
                'Hi ' .
                Auth::user()['name'] .
                ', You can delve into the world of mathematics to test your skills by working through exercises',
            'tests' => MathTest::all(),
        ];

        return view('labs.math', compact('data'));
    }

    public function test(): View
    {
        $data = [
            'tests' => MathTest::all(),
        ];

        return view('modals.math.test', compact('data'));
    }

    public function checkTest(Request $request): JsonResponse
    {
//        $mathTest = MathTest::query()->first();
        $data = [
            'request'   => $request->all(),
//            'data'      => $mathTest,
        ];

        return response()->json($data);
    }
}
