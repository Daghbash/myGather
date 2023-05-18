<div id="contentContainer">
    {{ $data['message'] }}

{{--    <div style="height: 600px;" class="border mathLab position-relative" id="lab">--}}
        <div>
            <canvas id="canvas">

            </canvas>
{{--        <div id="mathLabContent">--}}
{{--            <img--}}
{{--                src="{{ asset('/images/body/body2.png') }}"--}}
{{--                class="card-img-top"--}}
{{--                id="person"--}}
{{--                alt="Card image cap"--}}
{{--                style="height: 100px; width: 100px;"--}}
{{--            >--}}
{{--        </div>--}}

{{--        <div class="position-relative h-100" id="doors">--}}
{{--            <div class="mathLabDoor" lab="mathLab">--}}
{{--                {{ __('Physics Lab Door') }}--}}
{{--            </div>--}}
{{--            <div class="psychologyLabDoor" lab="psychologyLab">--}}
{{--                {{ __('Psychology Lab Door') }}--}}
{{--            </div>--}}
{{--            <div class="biologyLabDoor" lab="biologyLab">--}}
{{--                {{ __('Biology Lab Door') }}--}}
{{--            </div>--}}
{{--        </div>--}}
    </div>
</div>

<script src="{{ asset('js/mathLab.js') }}"></script>
