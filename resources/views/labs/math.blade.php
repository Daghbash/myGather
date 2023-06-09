<div id="contentContainer">
    <div class="text-center my-2">{{ $data['message'] }}</div>

    <div class="canvasContainer">
        <canvas id="canvas"></canvas>

        <button type="button"
                class="btn btn-primary position-absolute d-none"
                data-toggle="modal"
                data-target="#mathTestsModal"
                id="mathTests"
        >
            Click me
        </button>

        <!-- Modal test -->
        <div class="modal fade"
             id="mathTestsModal"
             tabindex="-1"
             role="dialog"
             aria-labelledby="mathTestsModalTitle"
             aria-hidden="true"
        >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <form action="{{ route('lab.math.check.test') }}" method="POST" id="math_check_test">
                        @csrf
                        <div class="modal-header">
                            <h5 class="modal-title" id="mathTestsModalTitle">{{__('Check your skills')}}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button"
                                    id="mathTestCheck"
                                    class="btn btn-primary"
                            >
                                Check test
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

</div>
@include('modals.math.checkTest')
<script src="{{ asset('js/mathLab.js') }}"></script>
