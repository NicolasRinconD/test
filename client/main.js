import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import Organizaciones from "../collections";  
import './main.html';

Template.organizacion.created = ()=>{
  console.log("Created the profile template");
}

Template.organizacion.rendered = ()=>{
  console.log("Rendered the profile template");
}


Template.organizacion.helpers({
  /*other helpers*/
  exampleHelper: () => {
      return "string returned by exampleHelper";
  },
  passingData: (myString1, myString2) => {
    console.log(`These are the strings ${myString1} ${myString2}`);
  },
  organizacionesCollection: () =>{
    return Organizaciones.find({});
  }
});

Template.organizacion.events({
  'submit form'(event){
    event.preventDefault();
    let target = event.target;
    let fname = target.fname.value;
    let fdesc = target.fdescripcion.value;
    let fresp = target.fresponsable.value;
    let fInicio = target.fechaInicio.value;
    let fFinal = target.fechaFinal.value;
    let ubicacion = target.ubicacion.value;

    Organizaciones.insert({
      nombre: fname,
      descripcion: fdesc,
      responsable : fresp,
      fechaInicio: fInicio,
      fechaFinal: fFinal,
      ubicacion: ubicacion
    });

    target.fname.value = '';
    target.fdescripcion.value='';
    target.fresponsable.value='';
    target.fechaInicio.value='';
    target.fechaFinal.value='';
    target.ubicacion.value='';
  }
});



/*Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
}); */
