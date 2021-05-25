new Vue({
	el:'#app',
  data:{
  	titulo:'Hola Mundo con Vue',
    enlaceHTML: '<a href="https://codigoonclick.com">Código OnClick</a>',
    contador: 1,
    inicialContador: 0
  },
  methods:{
  	mostrarTitulo:function(){
    	this.titulo = 'Hola Mundo desde Methods';
    	return this.titulo;
    },
    aumentarCongador:function(){
    	this.contador++;
    },
    cambiarContador:function(){
    	this.contador = this.inicialContador;
    }
  }
});
