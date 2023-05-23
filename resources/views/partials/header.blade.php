<header id="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="{{ route('pages.index') }}">
                <h1 class="text-secondary">Gather</h1>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item mx-3">
                        <button id="mathLab" class="btn btn-secondary headerButton">MathLab</button>
                    </li>
                    <li class="nav-item mx-3">
                        <button id="physicsLab" class="btn btn-secondary headerButton">PhysicsLab</button>
                    </li>
                    <li class="nav-item mx-3">
                        <button id="psychologyLab" class="btn btn-secondary headerButton">PsychologyLab</button>
                    </li>
                    <li class="nav-item mx-3">
                        <button id="biologyLab" class="btn btn-secondary headerButton">BiologyLab</button>
                    </li>
                    <li class="nav-item mx-3">
                        <button id="geographyLab" class="btn btn-secondary headerButton">GeographyLab</button>
                    </li>
                </ul>
            </div>

            <div>
                <button><a href="{{ route('logOut') }}">LogOut</a></button>
            </div>
        </div>
    </nav>
</header>

@push('js')
    <script src="{{ asset('js/main.js') }}"></script>
@endpush

