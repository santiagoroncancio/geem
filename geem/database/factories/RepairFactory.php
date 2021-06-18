<?php

namespace Database\Factories;

use App\Models\Diagnostic;
use App\Models\Repair;
use App\Models\Rol;
use Illuminate\Database\Eloquent\Factories\Factory;

class RepairFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Repair::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'date_admission'=>$this->faker->dateTimeBetween($startDate = '-2 years', $endDate = 'now', $timezone = null, $format = 'y-m-d'),
            'check_in_time'=>$this->faker->dateTimeBetween($startDate = '-2 years', $endDate = 'now', $timezone = null, $format='h:m'),
            'check_out_time'=>$this->faker->dateTimeBetween($startDate = '-2 years', $endDate = 'now', $timezone = null, $format='h:m'),
            'description'=>$this->faker->text(),
            'diagnostic_id'=>Diagnostic::all()->random(),
            'tecnical_id'=>Rol::find(2)->users->random(),
        ];
    }
}
