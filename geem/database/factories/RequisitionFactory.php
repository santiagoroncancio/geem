<?php

namespace Database\Factories;

use App\Models\Diagnostic;
use App\Models\Requisition;
use App\Models\Spare_part;
use Illuminate\Database\Eloquent\Factories\Factory;

class RequisitionFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Requisition::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'quantity'=>$this->faker->numberBetween($min = 1, $max = 10),
            'unit'=>$this->faker->word(),
            'creation_date'=>$this->faker->dateTimeBetween($startDate = '-2 years', $endDate = 'now', $timezone = null, $format = 'y-m-d'),
            'spare_part_id'=>Spare_part::all()->random(),
            'diagnostic_id'=>Diagnostic::all()->random(),
        ];
    }
}
