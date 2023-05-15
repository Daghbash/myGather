@extends('layouts.main')

@section('content')
    <div class="container">

        <div class="selectLab">
            <div class="my-3">
                Hi you are in the Gather, Please select lab
            </div>
            <select class="form-select" aria-label="Disabled select example">
                <option selected>Select lab...</option>
                <option value="math">
                    MathLab
                </option>
                <option value="physics">
                    PhysicsLab
                </option>
                <option value="biology">
                    BiologyLab
                </option>
                <option value="psychology">
                    PsychologyLab
                </option>
                <option value="geography">
                    GeographyLab
                </option>
            </select>
        </div>

        <div class="createAvatar">
            <div class="my-3">
                Please create your Avatar
            </div>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                       aria-controls="home" aria-selected="true">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                       aria-controls="profile" aria-selected="false">Profile</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab"
                       aria-controls="contact" aria-selected="false">Contact</a>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">nav1</div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">nav2</div>
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">nav3</div>
            </div>
        </div>

        <div class="my-3">
            <button class="btn btn-outline-secondary">Go to lab</button>
        </div>
    </div>

@endsection

{{--@push('js')--}}
{{--<script>--}}
{{--    $(document).ready(function() {--}}
{{--        console.log('jQuery version:', $.fn.jquery);--}}
{{--        console.log('jQuery is working!');--}}
{{--        // Test jQuery functionality here--}}
{{--    });--}}
{{--</script>--}}
{{--@endpush--}}
