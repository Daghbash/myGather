@extends('layouts.main')

@section('content')
    <div class="h-100">

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
                    <a class="nav-link active" id="body-tab" data-toggle="tab" href="#body" role="tab"
                       aria-controls="home" aria-selected="true">Body</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="hat-tab" data-toggle="tab" href="#hat" role="tab"
                       aria-controls="profile" aria-selected="false">Hat</a>
                </li>
{{--                <li class="nav-item">--}}
{{--                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab"--}}
{{--                       aria-controls="contact" aria-selected="false">Contact</a>--}}
{{--                </li>--}}
            </ul>

            <div class="tab-content" id="myTabContent" >
                <div class="tab-pane fade show active h-100" id="body" role="tabpanel" aria-labelledby="body-tab">

                    <div class="d-flex" style="height: 300px">
                        <div class="img-block">
                            <img
                                src="{{ asset('/images/body/body1.png') }}"
                                class="card-img-top" alt="Card image cap"
                            >
                        </div>
                        <div class="img-block">
                            <img
                                src="{{ asset('/images/body/body2.png') }}"
                                class="card-img-top"
                                alt="Card image cap"
                            >
                        </div>
                        <div class="img-block">
                            <img
                                src="{{ asset('/images/body/body3.png') }}"
                                class="card-img-top"
                                alt="Card image cap"
                            >
                        </div>
                        <div class="img-block">
                            <img
                                src="{{ asset('/images/body/body4.png') }}"
                                class="card-img-top"
                                alt="Card image cap"
                            >
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="hat" role="tabpanel" aria-labelledby="hat-tab">hat</div>
{{--                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">nav3</div>--}}
            </div>
        </div>

        <div class="my-3">
            <button type="button" class="btn btn-outline-secondary">Go to lab</button>
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
