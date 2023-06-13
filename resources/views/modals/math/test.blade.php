    @foreach($data['tests'] as $key => $test)
        <div class="{{ 'mathTest' . $key + 1 }} border border-secondary py-3 my-2 px-2">
            <div>{{ $test['question'] }}</div>
            @if(!empty($test['src']))
                <img src="{{ asset($test['src']) }}" alt="" class="w-100">
            @endif

            <?php
                $answersArray = array(
                    $test->answer['answer'],
                    mt_rand($test->answer['answer'] - 10, $test->answer['answer'] - 1),
                    mt_rand($test->answer['answer'] + 1, $test->answer['answer'] + 10),
                    mt_rand($test->answer['answer'] + 11, $test->answer['answer'] + 20),
                );
                shuffle($answersArray)
            ?>

            @foreach($answersArray as $index => $answer)
                <div class="form-check">
                    <input class="form-check-input"
                           type="radio"
                           name="{{ 'testArr[test_' . $test['id'] . ']' }}"
                           value="{{ $answer }}"
                           id="{{ 'testAnswer_' . $key + 1 . '_' . $index + 1 }}"
                    >
                    <label class="form-check-label" for="{{ 'testAnswer_' . $key + 1 . '_' . $index + 1 }}">
                        {{ $answer }}
                    </label>
                </div>
            @endforeach
        </div>
    @endforeach
