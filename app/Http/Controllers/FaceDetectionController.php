<?php

namespace App\Http\Controllers;

use Google\Cloud\Core\ServiceBuilder;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

class FaceDetectionController extends Controller
{
    public function detectFaces(): View
    {
        return view('labs.faceDetection');
    }
}
