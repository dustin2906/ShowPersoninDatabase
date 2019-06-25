/**
 * file: js/mycode.js
 * denc: displays json from file persona.json in web page div called "persons"
 */

 $(document).ready(function() {
    showPersons();
 

 $("#persons").on('click','personID', function() {
   var personID=$(this).attr('data-id');
    alert(personID);
 });
});
 function showPersons() {
   var textToShow=' ';
   //read the json file and parse through the data in it
   $.get("jsontest.json", function(data) {
    //go through the "data" {reference to json file}
    $.each(data.persons, function(key,person) {
        textToShow=textToShow+'<li class="list-group-item">';
        textToShow=textToShow+person.id+' ';

        textToShow=textToShow+person.firstname+' '+person.lastname+', '+person.status;
        textToShow=textToShow+'<ul class="list-group">';

    $.each(person.children, function(key,child) {
      textToShow=textToShow+'<li class="list-group-item">'+child.firstname+''+child.lastname+'</li>';
    }); 
      textToShow=textToShow+'</ul>';

      textToShow=textToShow+'<button type="button" class="btn personID" data-id="'+person.id;
      textToShow=textToShow+'"data-toggle-"modal" data-target="'
      +'">Edit</button>';
      textToShow=textToShow+'</li>';
    });
        $("#persons").html(textToShow);
    
   });
 }