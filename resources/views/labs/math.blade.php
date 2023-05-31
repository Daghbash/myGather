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

        <!-- Modal -->
        <div class="modal fade"
             id="mathTestsModal"
             tabindex="-1"
             role="dialog"
             aria-labelledby="mathTestsModalTitle"
             aria-hidden="true"
        >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="mathTestsModalTitle">{{__('Check your skills')}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="mathTest1 border border-secondary py-3 my-2 px-2">
                            {{__('Ո՞ր թիվը պետք է լինի հաջորդը․')}}
                            <img src="{{ asset('images/mathTest/1_result.jpg') }}" alt="" class="w-100">
                            <div class="form-check">
                                <input class="form-check-input"
                                       type="radio"
                                       name="flexRadioDefault1"
                                       id="flexRadioDefault1"
                                >
                                <label class="form-check-label" for="flexRadioDefault1">
                                    48
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input"
                                       type="radio"
                                       name="flexRadioDefault1"
                                       id="flexRadioDefault2"
                                >
                                <label class="form-check-label" for="flexRadioDefault2">
                                    68
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input"
                                       type="radio"
                                       name="flexRadioDefault1"
                                       id="flexRadioDefault3"
                                >
                                <label class="form-check-label" for="flexRadioDefault3">
                                    72
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input"
                                       type="radio"
                                       name="flexRadioDefault1"
                                       id="flexRadioDefault4"
                                >
                                <label class="form-check-label" for="flexRadioDefault4">
                                    70
                                </label>
                            </div>
                        </div>
                        <div class="mathTest1 border border-secondary py-3 my-2 px-2">
                            {{__('Ո՞ր թիվը պետք է լինի հաջորդը․')}}
                            <img src="{{ asset('images/mathTest/2_result.jpg') }}" alt="" class="w-100">
                            <div class="form-check">
                                <input class="form-check-input"
                                       type="radio"
                                       name="flexRadioDefault2"
                                       id="flexRadioDefault11"
                                >
                                <label class="form-check-label" for="flexRadioDefault11">
                                    534
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input"
                                       type="radio"
                                       name="flexRadioDefault2"
                                       id="flexRadioDefault22"
                                >
                                <label class="form-check-label" for="flexRadioDefault22">
                                    465
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input"
                                       type="radio"
                                       name="flexRadioDefault2"
                                       id="flexRadioDefault33"
                                >
                                <label class="form-check-label" for="flexRadioDefault33">
                                    353
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input"
                                       type="radio"
                                       name="flexRadioDefault2"
                                       id="flexRadioDefault44"
                                >
                                <label class="form-check-label" for="flexRadioDefault44">
                                    354
                                </label>
                            </div>
                        </div>
                        <div class="mathTest1 border border-secondary py-3 my-2 px-2">
                            {{__('Ո՞ր թիվը պետք է լինի հաջորդը․')}}
                            <img src="{{ asset('images/mathTest/3_result.jpg') }}" alt="" class="w-100">
                            <div class="form-check">
                                <input class="form-check-input"
                                       type="radio"
                                       name="flexRadioDefault3"
                                       id="flexRadioDefault111"
                                >
                                <label class="form-check-label" for="flexRadioDefault111">
                                    71
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input"
                                       type="radio"
                                       name="flexRadioDefault3"
                                       id="flexRadioDefault222"
                                >
                                <label class="form-check-label" for="flexRadioDefault222">
                                    61
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input"
                                       type="radio"
                                       name="flexRadioDefault3"
                                       id="flexRadioDefault333"
                                >
                                <label class="form-check-label" for="flexRadioDefault333">
                                    91
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input"
                                       type="radio"
                                       name="flexRadioDefault3"
                                       id="flexRadioDefault444"
                                >
                                <label class="form-check-label" for="flexRadioDefault444">
                                    81
                                </label>
                            </div>
                        </div>
                        <div class="mathTest1 border border-secondary py-3 my-2 px-2">
                            {{__('Ո՞ր թիվը պետք է լինի հաջորդը․')}}
                            <img src="{{ asset('images/mathTest/4_result.jpg') }}" alt="" class="w-100">
                            <div class="form-check">
                                <input class="form-check-input"
                                       type="radio"
                                       name="flexRadioDefault4"
                                       id="flexRadioDefault1111"
                                >
                                <label class="form-check-label" for="flexRadioDefault1111">
                                    530
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input"
                                       type="radio"
                                       name="flexRadioDefault4"
                                       id="flexRadioDefault2222"
                                >
                                <label class="form-check-label" for="flexRadioDefault2222">
                                    980
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input"
                                       type="radio"
                                       name="flexRadioDefault4"
                                       id="flexRadioDefault3333"
                                >
                                <label class="form-check-label" for="flexRadioDefault3333">
                                    640
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input"
                                       type="radio"
                                       name="flexRadioDefault4"
                                       id="flexRadioDefault4444"
                                >
                                <label class="form-check-label" for="flexRadioDefault4444">
                                    720
                                </label>
                            </div>
                        </div>
                        <div class="mathTest1 border border-secondary py-3 my-2 px-2">
                            {{__('Ո՞ր թիվը պետք է լինի հաջորդը․')}}
                            <img src="{{ asset('images/mathTest/5_result.jpg') }}" alt="" class="w-100">
                            <div class="form-check">
                                <input class="form-check-input"
                                       type="radio"
                                       name="flexRadioDefault5"
                                       id="flexRadioDefault11111"
                                >
                                <label class="form-check-label" for="flexRadioDefault11111">
                                    73
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input"
                                       type="radio"
                                       name="flexRadioDefault5"
                                       id="flexRadioDefault22222"
                                >
                                <label class="form-check-label" for="flexRadioDefault22222">
                                    74
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input"
                                       type="radio"
                                       name="flexRadioDefault5"
                                       id="flexRadioDefault33333"
                                >
                                <label class="form-check-label" for="flexRadioDefault33333">
                                    71
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input"
                                       type="radio"
                                       name="flexRadioDefault5"
                                       id="flexRadioDefault44444"
                                >
                                <label class="form-check-label" for="flexRadioDefault44444">
                                    72
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" id="mathTestCheck" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

<script src="{{ asset('js/mathLab.js') }}"></script>
