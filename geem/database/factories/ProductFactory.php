<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'code'=>$this->faker->numberBetween($min = 1000, $max = 9000),
            'type'=> $this->faker->word(),
            'name'=>$this->faker->name(),
            'brand'=>$this->faker->sentence($nbWords = 6, $variableNbWords = true),
            'color'=>$this->faker->colorName(),
            'reference'=>$this->faker->sentence($nbWords = 6, $variableNbWords = true),
            'description'=>$this->faker->text(),
        ];
    }
}
