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
        $data = [];
        if ($request->has('testArr')) {
            $mathTestCount = MathTest::query()
                ->whereHas('answer', function ($query) use ($request) {
                    $query->whereIn('answer', $request->input('testArr'));
                })
                ->count();

            $data['rightAnswerCount'] = $mathTestCount;
        } else {
            $data['rightAnswerCount'] = 0;
        }

        $data['testsCount'] = MathTest::query()->count();

        return response()->json($data);
    }
}
