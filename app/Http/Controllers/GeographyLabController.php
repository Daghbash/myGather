<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

class GeographyLabController extends Controller
{
    public function index(): View
    {
        return view('labs.geography');
    }
}
