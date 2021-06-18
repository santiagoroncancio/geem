<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\Record;
use App\Models\Rol;
use Illuminate\Database\Eloquent\Factories\Factory;

class RecordFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Record::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'product_id'=>Product::all()->random(),
            'client_id'=>Rol::find(4)->users->random()
        ];
    }
}
