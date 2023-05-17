<div id="contentContainer">
    {{ $data['message'] }}
    <div style="width: 1000px; height: 600px;" class="border mathLab" id="lab" >
        <div id="physicsLabContent">
            <img
                src="{{ asset('/images/body/body3.png') }}"
                class="card-img-top"
                id="person"
                alt="Card image cap"
                style="height: 100px; width: 100px;"
            >
        </div>

        <div class="position-relative h-100">
            <div class="mathLabDoor">
                Psychology Lab Door
            </div>
        </div>
    </div>
</div>

<script src="{{ asset('js/physics.js') }}"></script>
