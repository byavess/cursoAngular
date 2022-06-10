import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable ({
    providedIn: 'root'
})
export class CourseListService{

retrieveAll(): Course[] {
    return COURSES;
}

}

var COURSES: Course[] = [
 {
    id: 1,
    nome: 'Angular:CLI',
    releaseDate: new Date() ,
    description: 'Nesse curso os alunos irão obter um conhecimento aprofundado sobre os recursos disponiveis no modulo de CLI',
    duration : 80,
    code : 'OPL - 0913',
    rating: 4.0,
    price: 36.99,
    imageUrl: '/assets/image/cli.png',
},
{
    id: 2,
    nome: 'Angular: Forms',
    releaseDate: new Date() ,
    description: 'Nesse curso os alunos irão obter um conhecimento aprofundado sobre os recursos disponiveis no modulo de HTTP',
    duration : 60,
    code : 'FMS - 0510',
    rating: 5.0,
    price: 66.99,
    imageUrl: '/assets/image/forms.png',
},


{
    id: 3,
    nome: 'Angular:http',
    releaseDate: new Date() ,
    description: 'Nesse curso os alunos irão obter um conhecimento aprofundado sobre os recursos disponiveis no modulo de HTTP',
    duration : 80,
    code : 'OPL - 0913',
    rating: 4.0,
    price: 36.99,
    imageUrl: '/assets/image/http.png',
},
{
    id: 4,
    nome: 'Angular:Router',
    releaseDate: new Date() ,
    description: 'Nesse curso os alunos irão obter um conhecimento aprofundado sobre os recursos disponiveis no modulo de HTTP',
    duration : 90,
    code : 'ABL - 1309',
    rating: 4.5,
    price: 56.79,
    imageUrl: '/assets/image/router.png',
},
{
    id: 5,
    nome: 'Angular:Animations',
    releaseDate: new Date() ,
    description: 'Nesse curso os alunos irão obter um conhecimento aprofundado sobre os recursos disponiveis no modulo de HTTP',
    duration : 70,
    code : 'GHD - 0384',
    rating: 3.0,
    price: 26.96,
    imageUrl: '/assets/image/animations.png',
},
];
