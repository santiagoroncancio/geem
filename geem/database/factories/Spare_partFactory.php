<?php

namespace Database\Factories;

use App\Models\Spare_part;
use Illuminate\Database\Eloquent\Factories\Factory;

class Spare_partFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Spare_part::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'=>$this->faker->sentence($nbWords = 6, $variableNbWords = true),
            'reference'=>$this->faker->numberBetween($min = 1000, $max = 9000),
            'description'=>$this->faker->text()
        ];
    }
}
