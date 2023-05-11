<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

class BiologyLabController extends Controller
{
    public function index(): View
    {
        return view('labs.biology');
    }
}
