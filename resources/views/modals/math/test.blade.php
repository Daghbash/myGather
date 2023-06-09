    @foreach($data['tests'] as $key => $test)
        <input type="hidden" value="{{ $test->answer }}" id="{{ 'answer_' . $key }}" >
        <div class="mathTest1 border border-secondary py-3 my-2 px-2">
            {{ $test['question'] }}
            @if(!empty($test['src']))
                <img src="{{ asset($test['src']) }}" alt="" class="w-100">
            @endif
            <div class="form-check">
                <input class="form-check-input"
                       type="radio"
                       name="{{ 'test_' . $test['id'] }}"
                       value="{{ $test->answer['answer'] }}"
                       id="{{ 'testAnswer_' . $key }}"
                >
                <label class="form-check-label" for="{{ 'testAnswer_' . $key }}">
                    {{ $test->answer['answer'] }}
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input"
                       type="radio"
                       name="{{ 'test_' . $test['id'] }}"
                       value="{{ mt_rand($test->answer['answer'] - 10, $test->answer['answer']) }}"
                       id="{{ 'testAnswer_' . $key . '_' . $key }}"
                >
                <label class="form-check-label" for="{{ 'testAnswer_' . $key . '_' . $key }}">
                    {{ mt_rand($test->answer['answer'] - 10, $test->answer['answer']) }}
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input"
                       type="radio"
                       name="{{ 'test_' . $test['id'] }}"
                       value="{{ mt_rand($test->answer['answer'], $test->answer['answer'] + 10) }}"
                       id="{{ 'testAnswer_' . $key . '_' . $key . '_' . $key }}"
                >
                <label class="form-check-label" for="{{ 'testAnswer_' . $key . '_' . $key . '_' . $key }}">
                    {{ mt_rand($test->answer['answer'], $test->answer['answer'] + 10) }}
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input"
                       type="radio"
                       name="{{ 'test_' . $test['id'] }}"
                       value="{{ mt_rand($test->answer['answer'] + 10, $test->answer['answer'] + 20) }}"
                       id="{{ 'testAnswer_' . $key . '_' . $key . '_' . $key . '_' . $key }}"
                >
                <label class="form-check-label" for="{{ 'testAnswer_' . $key . '_' . $key . '_' . $key . '_' . $key }}">
                    {{  mt_rand($test->answer['answer'] + 10, $test->answer['answer'] + 20)  }}
                </label>
            </div>
        </div>
    @endforeach
