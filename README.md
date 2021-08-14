# geem
geem - Software solution for the optimization of the maintenance of electrical and mechanical equipment.

## Installation
To run the platform it is necessary to execute the commands
- composer install 
- npm install 
- Create the ".env" file
- php artisan migrate
- php artisan serve
- php artisan jwt:secret

** If you get the server error 500 **
- php artisan key:generate
- sudo chmod 755 -R laravel
- chmod -R o+w laravel/storage
