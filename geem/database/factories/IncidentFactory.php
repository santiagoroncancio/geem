<?php

namespace Database\Factories;

use App\Models\Incident;
use App\Models\Record;
use App\Models\Rol;
use App\Models\State;
use App\Models\Type_service;
use Illuminate\Database\Eloquent\Factories\Factory;

class IncidentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Incident::class;

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
            'evaluation'=>$this->faker->text(),
            'report_client'=>$this->faker->text(),
            'record_id'=>Record::all()->random(),
            'helper_id'=>Rol::find(3)->users->random(),
            'state_id'=>State::all()->random(),
            'type_service_id'=>Type_service::all()->random(),
        ];
    }
}
