class MensagemView extends View {
    
    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        
        //se texto é diferente de null imprime classe bootstrap.
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
    }


}