<?php

namespace Database\Factories;

use App\Models\diagnostic;
use App\Models\Incident;
use App\Models\Rol;
use Illuminate\Database\Eloquent\Factories\Factory;

class DiagnosticFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Diagnostic::class;

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
            'tecnical_id'=>Rol::find(2)->users->random(),
            'incident_id'=>Incident::all()->random(),
        ];
    }
}
