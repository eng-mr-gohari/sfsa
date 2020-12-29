<?php

namespace App\Models\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Astrotomic\Translatable\Translatable;

class Detail extends Model implements TranslatableContract
{
    use HasFactory;
    use Translatable;
    protected $table="details";
    public $translatedAttributes = ['subject', 'content'];
    protected $fillable = ['product_id'];
}
