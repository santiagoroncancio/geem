<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIncidentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('incidents', function (Blueprint $table) {
            $table->id();
            $table->date('date_admission');
            $table->time('check_in_time');
            $table->text('evaluation');
            $table->text('report_client');
            $table->foreignId('record_id')->constrained('records');
            $table->foreignId('helper_id')->constrained('users');
            $table->foreignId('state_id')->constrained('states');
            $table->foreignId('type_service_id')->constrained('type_services');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('incidents');
    }
}
