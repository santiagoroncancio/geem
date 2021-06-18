<?php

namespace Database\Factories;

use App\Models\Incident;
use App\Models\Invoice;
use App\Models\Requisition;
use App\Models\Rol;
use Illuminate\Database\Eloquent\Factories\Factory;

class InvoiceFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Invoice::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'creation_date'=>$this->faker->dateTimeBetween($startDate = '-2 years', $endDate = 'now', $timezone = null, $format = 'y-m-d'),
            'helper_id'=>Rol::find(2)->users->random(),
            'client_id'=>Rol::find(4)->users->random(),
            'requisition_id'=>Requisition::all()->random(),
            'incident_id'=>Incident::all()->random(),
        ];
    }
}
