<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Log;

class StorePostQuestionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
       return [
            'theme' => 'required|max:255',
            'title' => 'required|string',
            'content' => 'required|string',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        Log::error('Validation failed', ['errors' => $validator->errors()->all()]);
        throw new ValidationException($validator);
    }
}
