<?php

namespace Database\Factories;

use App\Models\Repair;
use App\Models\Test;
use Illuminate\Database\Eloquent\Factories\Factory;

class TestFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Test::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'=>$this->faker->sentence($nbWords = 6, $variableNbWords = true),
            'description'=>$this->faker->text(),
            'results'=>$this->faker->text(),
            'repair_id'=>Repair::all()->random(),
        ];
    }
}
