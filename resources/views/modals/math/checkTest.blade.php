<!-- Modal check -->
    <div class="modal fade"
         id="mathCheckModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="mathTestCheckModalTitle"
         aria-hidden="true"
    >
        <div class="modal-dialog top-50" role="document" style="max-width: 80%; ">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="mathTestCheckModalTitle">{{__('Check your skills')}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" id="closeAnswerModal">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div>Your test result:</div>
                    <h1 id="rightAnswersCount"></h1>
                </div>
            </div>
        </div>
    </div>
