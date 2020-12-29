<?php

namespace App\Models;

use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
class Product extends Model implements HasMedia,TranslatableContract
{
    use HasFactory;
    use InteractsWithMedia;
    use Translatable;

    protected $table="products";
    public $translatedAttributes = ['name', 'detail', 'url'];
}
