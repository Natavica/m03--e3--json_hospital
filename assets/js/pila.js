//Pensar en ejemplo de pila de latas de bebida.

export class Pila {
    data = [];

    push (elemento) {
        //con el punto hjago referencia al objeto a través de un punto 
        this.data.push(elemento);
        //push agrega dato al final del arreglo
    }
    pop() {
        return this.data.pop();
    }
    //con el pop se eliminan los datos
    lenght() {

    }

}

//Se hace la pila, se le agregan los datos, y después se renderiza de manera individual