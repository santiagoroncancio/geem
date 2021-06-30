<?php

namespace Database\Seeders;

use App\Models\Diagnostic;
use App\Models\Incident;
use App\Models\Invoice;
use App\Models\Product;
use App\Models\Record;
use App\Models\Repair;
use App\Models\Requisition;
use App\Models\Rol;
use App\Models\Spare_part;
use App\Models\State;
use App\Models\Test;
use App\Models\Type_service;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Datos de rol 
        Rol::create(['name'=>'administrador','description'=>'']);
        Rol::create(['name'=>'tecnico','description'=>'']);
        Rol::create(['name'=>'Auxiliar','description'=>'']);
        Rol::create(['name'=>'cliente','description'=>'']);

        // Datos del estado
        State::create(['name'=>'ingreso','description'=>'']);
        State::create(['name'=>'diagnostico','description'=>'']);
        State::create(['name'=>'cotización','description'=>'']);
        State::create(['name'=>'Aprobado/Negado','description'=>'']);
        State::create(['name'=>'Repuestos','description'=>'']);
        State::create(['name'=>'Reparación','description'=>'']);
        State::create(['name'=>'Listo','description'=>'']);
        State::create(['name'=>'Entregado','description'=>'']);

        // Datos de tipo de servicio
        Type_service::create(['name'=>'Predictivo','description'=>'']);
        Type_service::create(['name'=>'Preventivo','description'=>'']);
        Type_service::create(['name'=>'Correctivo','description'=>'']);
        Type_service::create(['name'=>'Garantia','description'=>'']);

        // Datos para crear usuarios
        User::create(['type_document'=>'CC','document'=>'12345678','email'=>'i@admin.com','password'=>Hash::make('123'),'name'=>'admin','lastname'=>'admin2','phone'=>'3123121232','rol_id'=>'1']);

        // Datos generados con la libreria faker
        Product::factory(30)->create();

        Spare_part::factory(30)->create();

        User::factory(30)->create();

        Record::factory(30)->create();

        Incident::factory(30)->create();

        Diagnostic::factory(30)->create();

        Requisition::factory(30)->create();

        Repair::factory(30)->create();

        Test::factory(30)->create();

        Invoice::factory(30)->create();
    }
}
