<div id="contentContainer">
    {{ $data['message'] }}
    <div style="width: 1000px; height: 600px;" class="border mathLab">
        <div id="mathLabContent">
            <img
                src="{{ asset('/images/body/body2.png') }}"
                class="card-img-top"
                alt="Card image cap"
                style="height: 100px; width: 100px;"
            >
        </div>

        <div class="position-relative h-100">
            <div class="exitDoor">
                Door
            </div>
        </div>
    </div>
</div>

<script src="{{ asset('js/mathLab.js') }}"></script>
