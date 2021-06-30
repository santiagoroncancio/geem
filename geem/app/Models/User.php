<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'type_document',
        'document',
        'email',
        'password',
        'name',
        'lastname',
        'phone',
        'city'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function records()
    {
        return $this->hasMany(Record::class);
    }

    public function incidents()
    {
        return $this->hasMany(Incident::class);
    }

    public function diagnostic()
    {
        return $this->hasMany(Diagnostic::class);
    }

    public function repair()
    {
        return $this->hasMany(Repair::class);
    }

    public function rol()
    {
        return $this->belongsTo(Rol::class);
    }

    public function invoices()
    {
        return $this->hasMany(Invoice::class);
    }

}
